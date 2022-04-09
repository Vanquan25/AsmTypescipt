import instance from './instance';
import { ProductType } from '../types/Product';
import { isAuthenticate } from '../utils/localStorage';


const user = isAuthenticate();
console.log(user);

export const create = (product: ProductType) => {
    const url = `/products/${user?.user._id}`;
    return instance.post(url, product, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
}

export const list = () => {
    const url = `/products`;
    return instance.get(url)
}
export const remove = (id: number) => {
    const url = `/products/${id}/${user?.user._id}`;
    return instance.delete(url , {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
}
export const read = (id: any) => {
    const url = `/products/${id}`;
    return instance.get(url);
}
export const update = (product: ProductType) => {
    const url = `/products/${product._id}/${user?.user._id}`;
    return instance.patch(url, product, {
        headers: {
            "Authorization": `Bearer ${user?.token}`
        }
    });
}

export const search = (search_value:any | undefined) =>{
    const url = `/search/?q=${search_value}`
    return instance.post(url)
}