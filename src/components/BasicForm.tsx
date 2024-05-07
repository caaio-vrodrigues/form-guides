import { useForm } from "react-hook-form";

export const BasicForm = () => {
  const { register, handleSubmit } = useForm();

  const createUser = (data: any) => {
    console.log(data);
  };

  return(
    <form onSubmit={handleSubmit(createUser)}
    className={`flex flex-col w-[60%] m-auto text-center bg-slate-700 p-4 mt-4 rounded-md`}>
      <h1 className={`text-[25px] mb-2 text-emerald-300 font-bold`}>Formulário Básico com useForm</h1>

      <label htmlFor="">E-mail</label>
      <input type="email" {...register('email')} className={`mb-4 rounded-md bg-zinc-800 text-white p-1`} />

      <label htmlFor="">Senha</label>
      <input type="password" {...register('password')} className={`mb-4 rounded-md bg-zinc-800 text-white p-1`} />

      <button type="submit" className={`bg-emerald-300 rounded-md text-black font-semibold`}>Salvar</button>
    </form>
  );
};