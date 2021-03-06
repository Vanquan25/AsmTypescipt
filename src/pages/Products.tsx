import React from "react";
import ProductList from "../components/ProductList";
import { ProductType } from "../types/Product";

type ProductsProps = {
    products: ProductType[]
}

const Products = (props: ProductsProps) => {
    return (
        <div>
            <ProductList products={props.products} />
        </div>
    )
}

export default Products