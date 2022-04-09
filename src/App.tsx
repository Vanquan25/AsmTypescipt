import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import { ProductType } from './types/Product'
import { create, list, remove, update } from './api/product'
import ProductDetail from './pages/ProductDetail'
import Products from './pages/Products'
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard'
import ProductManager from './pages/ProductManager'
import ProductEdit from './pages/ProductEdit'
import ProductAdd from './pages/ProductAdd'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.min.css"
import PrivateRouter from './components/PrivateRouter'
import Search from './pages/Search'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, []);

  const onHandleRemove = async (id: number) => {
    try {
      const { data } = await remove(id);
      setProducts(products.filter(item => item._id !== id));
      if (data) {
        toast.success("Xoa thanh cong");
      }
    } catch (error) {

    }
  }
  const onHandleAdd = async (product: ProductType) => {
    try {
      const { data } = await create(product);
      setProducts([...products, data]);
      if (data) {
        toast.success("Them thanh cong");
      }
    } catch (error) {

    }
  }
  const onHandleUpdate = async (product: ProductType) => {
    try {
      const { data } = await update(product);
      setProducts(products.map(item => item._id === data._id ? product : item))
      if (data) {
        toast.success("Sua thanh cong");
      }
    } catch (error) {

    }
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<HomePage products={products} />} />
          <Route path="product" >
            <Route index element={<Products products={products} />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Route>
          <Route path='product/search/:search_value' element={<Search/>}/>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
        </Route>
        <Route path="admin" element={<PrivateRouter><Dashboard /></PrivateRouter>}>
          <Route index element={<ProductManager products={products} onRemove={onHandleRemove} />} />
          <Route path="product">
            <Route index element={<ProductManager products={products} onRemove={onHandleRemove} />} />
            <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate} />} />
            <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
