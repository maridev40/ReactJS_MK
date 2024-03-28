import { Link } from "react-router-dom";

const BreadCrumbs = ({crumb}) => {

    return (
        <div className="top-head center">
            <h2 className="top-head__heading">{crumb}</h2>
            <nav className="breadcrumbs">
                <Link to={'/'} className={crumb === "HOME" ? "breadcrumbs__link breadcrumbs__link_site" : "breadcrumbs__link"}>HOME</Link>
                <p>/</p>
                <Link to={'/catalog'} className={crumb === "MEN" ? "breadcrumbs__link breadcrumbs__link_site" : "breadcrumbs__link"}>MEN</Link>
                <p>/</p>
                <Link to={'/arrivals'} className={crumb === "NEW ARRIVALS" ? "breadcrumbs__link breadcrumbs__link_site" : "breadcrumbs__link"}>NEW ARRIVALS</Link>
            </nav>
        </div>
    )

};

export default BreadCrumbs;