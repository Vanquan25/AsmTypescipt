import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import { ProductType } from './types/Product'
import { create, list, remove, update } from './api/product'
import ProductList from './components/ProductList'
import ProductDetail from './pages/ProductDetail'
import Products from './pages/Products'
import HomePage from './pages/HomePage'
import AdminLayout from './pages/layouts/AdminLayout'
import Dashboard from './pages/Dashboard'
import ProductManager from './pages/ProductManager'
import ProductEdit from './pages/ProductEdit'
import ProductAdd from './pages/ProductAdd'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await list();
      setProducts(data);
    };
    getProduct();
  }, [])

  const onHandleAdd = async (product: any) => {
    const {data} = await create(product);
    setProducts([...products, data]);
  }
  const onHandleRemove = async (id: number) => {
    remove(id);

    setProducts(products.filter(item => item._id !== id));
  }
  const onHandleUpdate = async (product: ProductType) => {
    try {
       const {data} = await update(product);
       setProducts(products.map(item => item._id === data._id ? product : item))
    } catch (error) {
      
    }
  }
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<WebsiteLayout />}>
        <Route index element={<HomePage products={products} />} />
        <Route path="product" >
            <Route index element={<Products products={products} />}/>
            <Route path="/product/:id" element= {<ProductDetail />} />
          </Route>
        </Route>
        <Route path="admin" element={<Dashboard />}>
            <Route index element={<ProductManager products={products} onRemove={onHandleRemove} />}/>
            <Route path="product">
            <Route index element={<ProductManager products={products} onRemove={onHandleRemove} />}/>
                  <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate}/>} />
                  <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
                </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
