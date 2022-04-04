import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ProductType } from '../types/Product';
import { useForm, SubmitHandler } from "react-hook-form";
import { signup } from '../api/user';
import { ToastContainer, toast } from 'react-toastify';

type Input = {
  name:string,
  email: string,
  password: string
};


const Signup = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<Input>();
    const navigate = useNavigate();

    const onSumbit: SubmitHandler<Input> = async (user) => {
        const { data } = await signup(user);
        if(data){
            toast.success("Bạn đã đăng ký thành công, chờ 3s");
            setTimeout(() => {
                navigate('/signin')
            }, 3000)
        }
    }
  return (
    <div>
    <form onSubmit={handleSubmit(onSumbit)}>
      <h2>Đăng kí tài khoản</h2>
      <div className="form-group">
        <label htmlFor="">Email address</label>
        <input type="text" {...register('name')} className="form-control"   />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" {...register('email')} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" {...register('password')} className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    <ToastContainer/>
    </div>
  )
}

export default Signup;