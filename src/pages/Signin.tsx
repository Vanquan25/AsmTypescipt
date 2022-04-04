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
        toast.success("Bạn đã đăng nhập thành công, chờ 3s");
        setTimeout(() => {
            navigate('/')
            localStorage.setItem("user",JSON.stringify(data))
        }, 3000)
    }
}
  return (

    <div>
        
        <form onSubmit={handleSubmit(onSumbit)}>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control"  {...register('email')} />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control"  {...register('password')} />
            </div>
            <button className="btn btn-primary">Đăng nhập</button>
        </form>
        <ToastContainer />
    </div>

  )
}

export default Signin;