import { useSelector } from 'react-redux';
import { delProduct, editProduct } from '../reducers/productListSlice.js';
import Product from './Product.js';

export default function AProductList() {
    const products = useSelector((state) => state.products.array);

    return (
        <div>
            <h2>Список продуктов: </h2>
            {products.map((item) => (
                <Product key={item.id} id={item.id} actions={[delProduct, editProduct]} />
            ))}
        </div>
    );
}