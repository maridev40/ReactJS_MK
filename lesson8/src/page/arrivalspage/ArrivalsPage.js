import Header from "../../components/header/Header.js"
import Footer from "../../components/footer/Footer.js"
import Subscribe from "../../components/subscribe/Subscribe.js"
import Service from "../../components/service/Service.js"
import Arrivals from "../../components/arrivals/Arrivals";

const ArrivalsPage = () => {

    return (
        <div>
            <Header />
            <Arrivals />
            <Service />
            <Subscribe />
            <Footer />
        </div>
    )

};

export default ArrivalsPage;