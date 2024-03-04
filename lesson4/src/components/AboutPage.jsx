import { Link } from "react-router-dom"; 

function AboutPage() {
    return (
        <>
            <h1>О нас</h1>
            <h2><Link to={'/HomePage'}>Главная страница</Link></h2>
        </>
    );
}

export default AboutPage;