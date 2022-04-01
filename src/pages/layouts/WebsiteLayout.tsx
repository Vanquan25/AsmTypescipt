import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'

type Props = {}

const WebsiteLayout = (props: Props) => {
    return (
        <div className='container'>
            <Header />
            <Outlet />
        </div>
    )
}

export default WebsiteLayout