import { Link } from "react-router-dom"; 

function HomePage() {
    return (
        <>
            <h1>Главная страница</h1>
            <h2><Link to={'/AboutPage'}>О нас</Link></h2>
        </>
    );
}

export default HomePage;