import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

type Inputs = {
    name: string,
    price: number,
    img: string
  };
  
type ProductAddProps = {
    onAdd: (product: Inputs) => void
}
const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors}} = useForm<Inputs>()
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<Inputs>  = (dataInput) => {
        props.onAdd(dataInput);
        navigate("/admin/product");
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-indigo-50 min-h-screen md:px-20 pt-6">
  <div className=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
    <h1 className="text-center text-2xl font-bold text-gray-500 mb-10">THÊM </h1>
    <div className="space-y-4">
      <div>
        <label htmlFor="name" className="text-lx font-serif">Name:</label>
        <input type="text" {...register('name')} placeholder="name" id="name" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
      </div>
      <div>
        <label htmlFor="description" className="block mb-2 text-lg font-serif">Description:</label>
        <textarea id="description" cols={30} rows={10} placeholder="whrite here.." className="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md" defaultValue={""} />
      </div>
      <div>
        <label htmlFor="price" className="text-lx font-serif">Price:</label>
        <input type="number" {...register('price')} placeholder="price" id="price" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
      </div>
      <div>
        <label htmlFor="img" className="text-lx font-serif">Img:</label>
        <input type="text" {...register('img')} placeholder="img" id="img" className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md" />
      </div>
      <button className=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">ADD POST</button>
    </div>
  </div>
</div>
        </form>
    </div>
  )
}

export default ProductAdd