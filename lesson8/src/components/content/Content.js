import { Link } from "react-router-dom";
import Product from "../product/Product.js"
import data from "../data/products.js"

const Content = () => {
    return (
        <div className="content center">
            <h1 className="content_title">Fetured Items</h1>
            <p className="content_subtitle">Shop for items based on what we featured in this week</p>
            <div className="product-box">
                {data.filter((item, index) => index < 6).map((product) =>
                    <Product
                        key={product.id}
                        item={product} />
                )}
            </div>
            <div className="content_footer center">
                <Link className="menu_basket" to={'/catalog'}>
                    <button className="content_footer_button">Browse All Product</button>
                </Link>
            </div>
        </div>
    )
};

export default Content;