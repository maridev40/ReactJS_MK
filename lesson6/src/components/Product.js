import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, delProduct, editProduct, incNum } from "../reducers/productListSlice";

const Product = ({ id, actions, autoClear }) => {
    const products = useSelector((state) => state.products.array);
    const num = useSelector((state) => state.products.num);

    const initialProduct = { id: "", name: "", description: "", price: "", available: false };
    const [product, setProduct] = useState(initialProduct);
    const dispatch = useDispatch();

    useEffect(() => {
        const prod = products.find((el) => el.id === id);
        if (prod) {
            setProduct({ id: prod.id, name: prod.name, description: prod.description, price: prod.price, available: prod.available });
        };
    }, []);

    const setName = (productName) => {
        setProduct({ ...product, name: productName });
    }

    const setDescription = (productDescription) => {
        setProduct({ ...product, description: productDescription });
    }

    const setPrice = (productPrice) => {
        setProduct({ ...product, price: productPrice });
    }

    const setAvailable = (productAvailable) => {
        setProduct({ ...product, available: productAvailable });
    }

    const handleActionProduct = (e) => {
        const action = actions[e.target.getAttribute("id")];
        if (action === delProduct) {
            dispatch(action(product));
        } else if (action === addProduct) {
            dispatch(incNum());
            dispatch(action({ ...product, id: num }));
            if (autoClear) {
                setProduct(initialProduct);
            }
        } else if (action === editProduct) {
            dispatch(action(product));
        }
    };

    const getNameAction = (index) => {
        const action = actions[index];
        if (action === addProduct) {
            return "Добавить";
        } else if (action === delProduct) {
            return "Удалить";
        } else if (action === editProduct) {
            return "Изменить";
        } else {
            return "Выполнить";
        };
    };

    return (
        <div>
            <label htmlFor="name">Наименование: </label>
            <input id="name"
                type="text"
                value={product.name}
                onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="description">Описание: </label>
            <input id="description"
                type="text"
                value={product.description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="price">Цена: </label>
            <input id="price"
                type="number"
                value={product.price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor="available">Доступно: </label>
            <input id="available"
                type="checkbox"
                checked={product.available}
                onChange={(e) => setAvailable(e.target.checked)}
            />
            {actions.map((item, index) => (
                <button key={index} id={index} onClick={(e) => handleActionProduct(e)}>{getNameAction(index)}</button>
            ))}
        </div>
    );
};

export default Product;