import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";
import { signup, signin } from '../api/user';
import { authenticated } from '../utils/localStorage';
import { toast, ToastContainer } from 'react-toastify';

type Input = {
  email: string,
  password: string
};


const Signin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Input>();
  const navigate = useNavigate();
  const onSumbit: SubmitHandler<Input> = async (user) => {
    const { data } = await signin(user);
    if(data){
        toast.success("Bạn đã đăng nhập thành công");
        setTimeout(() => {
            navigate('/')
            localStorage.setItem("user",JSON.stringify(data))
            if (data.user.role === 1) {
              navigate('/admin')
          } else {
            navigate('/')
          }
        }, 2000)
    }
}
  return (
<div className="font-sans">
  <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
    <div className="relative sm:max-w-sm w-full">
      <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
      <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
      <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
        <label htmlFor="" className="block mt-3 text-sm text-gray-700 text-center font-semibold">
          Signin
        </label>
        <form className="mt-10" onSubmit={handleSubmit(onSumbit)}>
          <div className="mt-7">                
            <input type="email" {...register('email')} placeholder="Email" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />                           
          </div>
          <div className="mt-7">                
            <input type="password" {...register('password')} placeholder="Password" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />                           
          </div>
          <div className="mt-7">
            <button type="submit" className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
              Sign In
            </button>
          </div>
          <div className="flex mt-7 items-center text-center">
            <hr className="border-gray-300 border-1 w-full rounded-md" />
            <label className="block font-medium text-sm text-gray-600 w-full">
              Registrate con
            </label>
            <hr className="border-gray-300 border-1 w-full rounded-md" />
          </div>
          <div className="flex mt-7 justify-center w-full">
            <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
              Facebook
            </button>
            <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
              Google
            </button>
          </div>
          <div className="mt-7">
            <div className="flex justify-center items-center">
              <label className="mr-2">¿Ya tienes una cuenta?</label>
              <a href="#" className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                Iniciar sesion
              </a>
            </div>
          </div>
        </form>
        <ToastContainer/>
      </div>
    </div>
  </div>
</div>

  )
}

export default Signin;