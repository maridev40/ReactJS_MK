import intersect from "../../img/Intersect.png"

const Subscribe = () => {

    return (
        <div className="subscribe center">
            <div className="phrase">
                <img src={intersect} alt="intersect" />
                <p className="phrase_text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus
                    condimentum“</p>
            </div>
            <div className="promotion">
                <h1 className="prom_title">SUBSCRIBE</h1>
                <h3 className="prom_subtitle">FOR OUR NEWLETTER AND PROMOTION</h3>
                <form className="prom_flex" action="#">
                    <div>
                        <input className="prom_email" type="email" required placeholder="Enter Your Email" />
                    </div>
                    <button className="prom_subscribe" type="submit">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );

};

export default Subscribe;