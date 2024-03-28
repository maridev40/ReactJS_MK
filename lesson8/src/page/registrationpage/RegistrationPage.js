import Header from "../../components/header/Header.js"
import Footer from "../../components/footer/Footer.js"
import Subscribe from "../../components/subscribe/Subscribe.js"
import Service from "../../components/service/Service.js"
import Registration from "../../components/registration/Registration.js" 

const RegistrationPage = () => {

    return (
        <div>
            <Header />
            <div className="top-head center">
                <h2 className="top-head__heading">REGISTRATION</h2>
            </div>
            <Registration />
            <Service />
            <Subscribe />
            <Footer />
        </div>
    )

};

export default RegistrationPage;