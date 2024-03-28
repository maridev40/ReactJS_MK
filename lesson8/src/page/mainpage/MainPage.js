import Header from "../../components/header/Header.js"
import Footer from "../../components/footer/Footer.js"
import Subscribe from "../../components/subscribe/Subscribe.js"
import Service from "../../components/service/Service.js"
import Content from "../../components/content/Content.js"
import Top from "../../components/top/Top.js"
import Middle from "../../components/middle/Middle.js"

const MainPage = () => {

    return (
        <div>
            <Header />
            <Top />
            <Middle />
            <Content />
            <Service />
            <Subscribe />
            <Footer />
        </div>
    )

};

export default MainPage;