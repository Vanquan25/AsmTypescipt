import React,{useEffect,useState} from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {read} from '../api/product'
import {useParams,useNavigate} from "react-router-dom"
import { ProductType } from '../types/Product'
type ProductEditProps = {
    onUpdate :(product:ProductType)=>void
} 
type FromInput = {
    name:string,
    price:number,
    img:string
}

const ProductEdit = (props:  ProductEditProps) => {
    const {register,handleSubmit,formState:{errors},reset} = useForm<FromInput>();
    const {id} = useParams();
    const navigate =useNavigate();

useEffect(()=>{
    const getProducts = async ()=>{
     const {data} = await read(id);
     reset(data)
    }
    getProducts()
},[])

const onSubmit : SubmitHandler<FromInput> = data =>{
    props.onUpdate(data)
    navigate("/admin/product");
    // console.log(data)
}
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
         <div className="bg-indigo-50 min-h-screen md:px-20 pt-6">
  <div className=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
    <h1 className="text-center text-2xl font-bold text-gray-500 mb-10">CẬP NHẬT SẢN PHẨM</h1>
    <div className="space-y-4">
      <div>
        <label htmlFor="name" className="text-lx font-serif">Name:</label>
        <input type="text" {...register('name')} placeholder="name" id="name" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
        {errors.name && <span>Bắt buộc phải nhập trường này!</span>}
      </div>
      <div>
        <label htmlFor="description" className="block mb-2 text-lg font-serif">Description:</label>
        <textarea id="description" cols={30} rows={10} placeholder="whrite here.." className="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md" defaultValue={""} />
      </div>
      <div>
        <label htmlFor="price" className="text-lx font-serif">Price:</label>
        <input type="number" {...register('price')} placeholder="price" id="price" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
        {errors.price && <span>Bắt buộc phải nhập trường này!</span>}
      </div>
      <div>
        <label htmlFor="img" className="text-lx font-serif">Img:</label>
        <input type="text" {...register('img')} placeholder="img" id="img" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
        {errors.img && <span>Bắt buộc phải nhập trường này!</span>}
      </div>
      <button className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">UPDATE</button>
    </div>
  </div>
</div>
    </form>
  )
}

export default ProductEdit