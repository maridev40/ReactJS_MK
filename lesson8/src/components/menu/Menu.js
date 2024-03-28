const Menu = () => {

    return (
        <details className="menu">
            <summary className="menu__summary">
                <span className="menu__heading">MENU</span>
            </summary>
            <div className="menu__content">
                <details open className="menu__item">
                    <summary className="menu__head">MAN</summary>
                    <div className="menu__link-box">
                        <a href="#" className="menu__link">Accessories</a>
                        <a href="#" className="menu__link">Bags</a>
                        <a href="#" className="menu__link">Denim</a>
                        <a href="#" className="menu__link">T-Shirts</a>
                    </div>
                </details>
                <details className="menu__item">
                    <summary className="menu__head">WOMAN</summary>
                    <div className="menu__link-box">
                        <a href="#" className="menu__link">Accessories</a>
                        <a href="#" className="menu__link">Jackets & Coats</a>
                        <a href="#" className="menu__link">Polos</a>
                        <a href="#" className="menu__link">T-Shirts</a>
                        <a href="#" className="menu__link">Shirts</a>
                    </div>
                </details>
                <details className="menu__item">
                    <summary className="menu__head">KIDS</summary>
                    <div className="menu__link-box">
                        <a href="#" className="menu__link">Accessories</a>
                        <a href="#" className="menu__link">Jackets & Coats</a>
                        <a href="#" className="menu__link">Polos</a>
                        <a href="#" className="menu__link">T-Shirts</a>
                        <a href="#" className="menu__link">Shirts</a>
                        <a href="#" className="menu__link">Bags</a>
                    </div>
                </details>
            </div>
        </details>
    )
};

export default Menu;