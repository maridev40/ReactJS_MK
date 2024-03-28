import brand from "../../img/brand.png"

const Top = () => {

    return (
        <div className="top center">
            <img className="top_img" src={brand} alt="brand" />
            <div className="top_title">
                <h1 className="top_title1">THE BRAND</h1>
                <h2 className="top_title2">OF LUXERIOUS <span className="top_intitle2">FASHION</span></h2>
            </div>
        </div>
    )
};

export default Top;