import Header from "../../components/header/Header.js"
import Footer from "../../components/footer/Footer.js"
import Subscribe from "../../components/subscribe/Subscribe.js"
import Service from "../../components/service/Service.js"
import Catalog from "../../components/catalog/Catalog.js"

const CatalogPage = () => {

    return (
        <div>
            <Header />
            <Catalog />
            <Service />
            <Subscribe />
            <Footer />
        </div>
    )

};

export default CatalogPage;