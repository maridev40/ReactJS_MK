import content1 from "../../img/content1.svg"
import content2 from "../../img/content2.svg"
import content3 from "../../img/content3.svg"
import content4 from "../../img/content4.svg"
import content5 from "../../img/content5.svg"
import content6 from "../../img/content6.svg"
import man1 from "../../img/man1.png"
import man2 from "../../img/man2.svg"
import man5 from "../../img/man5.svg"
import man6 from "../../img/man6.png"
import man7 from "../../img/man7.png"
import man8 from "../../img/man8.png"
import man9 from "../../img/man9.png"

const ImageWrapper = ({image}) => {

    return (
        <div>
            {image == "content1" && <img className="product__img" src={content1} alt="content1" />}
            {image == "content2" && <img className="product__img" src={content2} alt="content2" />}
            {image == "content3" && <img className="product__img" src={content3} alt="content3" />}
            {image == "content4" && <img className="product__img" src={content4} alt="content4" />}
            {image == "content5" && <img className="product__img" src={content5} alt="content5" />}
            {image == "content6" && <img className="product__img" src={content6} alt="content6" />}
            {image == "man1" && <img className="product__img" src={man1} alt="man1" />}
            {image == "man2" && <img className="product__img" src={man2} alt="man2" />}
            {image == "man5" && <img className="product__img" src={man5} alt="man5" />}
            {image == "man6" && <img className="product__img" src={man6} alt="man6" />}
            {image == "man7" && <img className="product__img" src={man7} alt="man7" />}
            {image == "man8" && <img className="product__img" src={man8} alt="man8" />}
            {image == "man9" && <img className="product__img" src={man9} alt="man9" />}
        </div>
    )
};

export default ImageWrapper;