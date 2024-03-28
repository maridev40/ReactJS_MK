import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import data from "../../components/data/products.js"
import Header from "../../components/header/Header.js"
import Footer from "../../components/footer/Footer.js"
import Subscribe from "../../components/subscribe/Subscribe.js"
import Service from "../../components/service/Service.js"
import BasketItem from "../../components/basketitem/BasketItem.js"

const BasketPage = () => {
    console.log("BasketPage");
    const basket = useSelector((state) => state.basket.basket);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(Object.keys(basket).reduce((acc, el) => 
            Number(acc) + Number(data.find((item) => item.id == el)?.price * basket[el])
        , 0));
        console.log("BasketPage=", total);
    }, [basket]);

    return (
        <div>
            <Header />
            <div className="basket-content center">
                <div className="basket-content__first">
                    {Object.keys(basket).map((id) =>
                        <BasketItem item={data.find((el) => el.id == id)} quantity={basket[id]} />
                    )}
                    <div className="basket-content__control">
                        <div className="basket-content__control_button">
                            <p className="basket-content__control_title">CLEAR SHOPPING CART</p>
                        </div>
                        <div className="basket-content__control_button">
                            <p className="basket-content__control_title">CONTINUE SHOPPING</p>
                        </div>
                    </div>
                </div>
                <div className="basket-content__second">
                    <div className="basket-content__shipping">
                        <p className="basket-content__shipping_title">SHIPPING ADDRESS</p>
                        <input className="basket-content__shipping_input" placeholder="Bangladesh" />
                        <input className="basket-content__shipping_input" placeholder="State" />
                        <input className="basket-content__shipping_input" placeholder="Postcode / Zip" />
                        <input className="basket-content__shipping_input input_quote" placeholder="GET A QUOTE" />
                        <div className="basket-content__checkout">

                            <div className="basket-content__checkout_total">
                                <div className="basket-content__checkout_subtotal">
                                    <p className="basket-content__checkout_subtotal_label">SUB TOTAL</p>
                                    <p className="basket-content__checkout_subtotal_value">${total}</p>
                                </div>
                                <div className="basket-content__checkout_grandtotal">
                                    <p className="basket-content__checkout_grandtotal_label">GRAND TOTAL</p>
                                    <p className="basket-content__checkout_grandtotal_value">${total}</p>
                                </div>
                            </div>

                            <div className="basket-content__checkout_line">
                                <div className="basket-content__checkout_proceed">
                                    <p className="basket-content__checkout_title">PROCEED TO CHECKOUT</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Service />
            <Subscribe />
            <Footer />
        </div>
    )

};

export default BasketPage;