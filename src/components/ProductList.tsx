import React from 'react'
import { ProductType } from '../types/Product'

type ProductListProps = {
    products: ProductType[];
};

const ProductList = ({products}: ProductListProps) => {
    return (
       <div className="h-screen w-full flex bg-gray-800">
  <nav className="w-24 flex flex-col items-center bg-gray-900 py-4">
    <div className="text-lg font-semibold text-white">Le Festin</div>
    <ul className="mt-2 text-gray-300 font-semibold">
      <li className="mt-3 t">
        <a href="#" className="flex flex-col items-center text-sm capitalize">
          <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
            <path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
              17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
              8h-8v10h8V11m-10 4H3v6h8v-6z" />
          </svg>
          <span>pizza</span>
        </a>
      </li>
      <li className="mt-3 t">
        <a href="#" className="flex flex-col items-center text-sm capitalize">
          <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
            <path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
              17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
              8h-8v10h8V11m-10 4H3v6h8v-6z" />
          </svg>
          <span>Drink</span>
        </a>
      </li>
    </ul>
  </nav>
  <main className="w-full overflow-y-auto">
    <div className="px-10 mt-5">
      <span className="uppercase font-bold text-2xl text-white">special food</span>
    </div>
    <div className="px-10 grid grid-cols-4 gap-4">
        {products?.map((product, index) => {
            return (
                <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center" key={index} >
                <div className="bg-white rounded-lg mt-5">
                  <img src={product.img} className="h-40 rounded-md" />
                </div>
                <div className="bg-white shadow-lg rounded-lg -mt-4 w-64">
                  <div className="py-5 px-5">
                    <span className="font-bold text-gray-800 text-lg">{product.name}</span>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600 font-light">
                        <a href={`/product/${product.id}`} className='btn btn-primary'> Chi tiet</a>
                      </div>
                      <div className="text-2xl text-red-600 font-bold">
                        {product.price}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
        })}
    
      
    </div>
  </main>
</div>

    )
}

export default ProductList