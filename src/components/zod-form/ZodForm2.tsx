import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const createUserFormSchema = z.object({
  name: z.string()
    .nonempty('O nome é obrigatório')
    .transform(name => {
      return name.trim().split(' ').map(val => {
        return val[0].toLocaleUpperCase().concat(val.substring(1));
      }).join(' ');
    }),
  email: z.string()
    .nonempty('O e-mail é obrigatório')
    .email('Formato de e-mail inválido')
    .toLowerCase()
    .refine(email => {
      return email.endsWith('@gmail.com')
    }, 'O e-mail deve ser gmail'),
  password: z.string()
    .min(6, 'Senha de no minimo 6 caractéres'),
});

type TCreateUserFormData = z.infer<typeof createUserFormSchema>

export const ZodForm2 = () => {
  const { register, handleSubmit, formState, } = useForm<TCreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  //novo cadastro
  const createUser = (data: TCreateUserFormData) => console.log(data);

  //Erros
  console.log(formState.errors);

  return(
    <form onSubmit={handleSubmit(createUser)}
    className={`flex flex-col w-[60%] m-auto text-center bg-slate-700 p-4 mt-4 
    rounded-md`}>
      <h1 className={`text-[25px] mb-2 text-emerald-300 font-bold`}>
        Formulário com ZOD
      </h1>

      <label className={`text-left`} htmlFor="name">Nome</label>
      {formState.errors.name && 
        <span className={`text-red-400`}>{formState.errors.name?.message}</span>}
      <input type="text" {...register('name')} className={`mb-4 rounded-md 
      bg-zinc-800 text-white p-1`} />

      <label className={`text-left`} htmlFor="email">E-mail</label>
      {formState.errors.email && 
        <span className={`text-red-400`}>{formState.errors.email.message}</span>}
      <input type="email" {...register('email')} className={`mb-4 rounded-md 
      bg-zinc-800 text-white p-1`} />

      <label className={`text-left`} htmlFor="password">Senha</label>
      {formState.errors.password && 
        <span className={`text-red-400`}>{formState.errors.password.message}</span>}
      <input type="password" {...register('password')} className={`mb-4 
      rounded-md bg-zinc-800 text-white p-1`} />

      <button type="submit" className={`bg-emerald-300 rounded-md text-black 
      font-semibold mt-4`}>
        Salvar
      </button>
    </form>
  );
};