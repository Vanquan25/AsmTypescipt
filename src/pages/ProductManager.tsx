import React from 'react'
import { Link } from 'react-router-dom';
import { ProductType } from '../types/Product'

type ProductManagerProps = {
  products: ProductType[];
  onRemove: (id: number) => void
}

const ProductManager = (props: ProductManagerProps) => {
  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                #
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
              Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                Img
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">
                Desc
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {props.products.map((item, index) => {
            return <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{index + 1}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{item.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{item.price}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{item.img}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900"></div>
              </td>
              <td className="py-3 px-6 text-left whitespace-nowrap">
                <Link to={`/admin/product/${item._id}/edit`} className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Edit</Link>
                <button onClick={() => props.onRemove(item._id)} className="py-2 px-4 bg-[#FF0000] text-white font-semibold rounded-lg shadow-md hover:bg-[#CC0000] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Remove</button></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductManager