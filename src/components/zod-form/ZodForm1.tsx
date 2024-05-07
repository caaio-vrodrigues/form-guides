import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const createUserFormSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

type TCreateUserFormData = z.infer<typeof createUserFormSchema>

export const ZodForm1 = () => {
  const { register, handleSubmit, } = useForm<TCreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  //novo cadastro
  const createUser = (data: TCreateUserFormData) => console.log(data);

  return(
    <form onSubmit={handleSubmit(createUser)}
    className={`flex flex-col w-[60%] m-auto text-center bg-slate-700 p-4 mt-4 
    rounded-md`}>
      <h1 className={`text-[25px] mb-2 text-emerald-300 font-bold`}>
        Formulário com ZOD
      </h1>

      <label className={`text-left`} htmlFor="name">Nome</label>
      <input type="text" {...register('name')} className={`mb-4 rounded-md 
      bg-zinc-800 text-white p-1`} />

      <label className={`text-left`} htmlFor="email">E-mail</label>
      <input type="email" {...register('email')} className={`mb-4 rounded-md 
      bg-zinc-800 text-white p-1`} />

      <label className={`text-left`} htmlFor="password">Senha</label>
      <input type="password" {...register('password')} className={`mb-4 
      rounded-md bg-zinc-800 text-white p-1`} />

      <button type="submit" className={`bg-emerald-300 rounded-md text-black 
      font-semibold mt-4`}>
        Salvar
      </button>
    </form>
  );
};