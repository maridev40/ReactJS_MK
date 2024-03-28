import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editItem, delAllItem } from '../../reducers/basketSlice.js';
import ImageWrapper from "../imagewrapper/image";

const BasketItem = ({ item, quantity }) => {
    const basket = useSelector((state) => state.basket.basket);
    const [quant, setQuant] = useState(quantity);
    const dispatch = useDispatch();

    const handleChangeQuantity = (e) => {
        setQuant(e.target.value);
        dispatch(editItem({ id: item.id, quantity: Number(e.target.value) }));
    };

    const handlerdelItem = () => {
        dispatch(delAllItem(item.id));
    };

    return (
        <div className="basket-content__card">
            <ImageWrapper image={item.image} />
            <div className="basket-content__card_info">
                <p className="basket-content__card_title">{item.title}</p>
                <p className="basket-content__card_label">Price: <span className="basket-content__card_price">{item.price}</span>
                </p>
                <p className="basket-content__card_label">Color: {item.color}</p>
                <p className="basket-content__card_label">Size: {item.size}</p>
                <div className="basket-content__card_quantity">
                    <label className="basket-content__card_label">
                        Quantity:
                        <input className="basket-content__card_input" type="number" value={quant} min="1" onChange={handleChangeQuantity} />
                    </label>
                </div>
            </div>
            <div>
                <a href='#'>
                    <div className="basket-content__card_delete" onClick={handlerdelItem}>X</div>
                </a>
            </div>
        </div>
    )
};

export default BasketItem;