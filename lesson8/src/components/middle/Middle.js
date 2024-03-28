import ground1 from "../../img/ground1.png"
import ground2 from "../../img/ground2.png"
import middle1 from "../../img/middle1.svg"
import middle2 from "../../img/middle2.svg"
import middle3 from "../../img/middle3.svg"
import middle4 from "../../img/middle4.svg"

const Middle = () => {

    return (
        <div className="middle center">
            <div className="middle_item middle_item1">
                <div className="middle_item_flex">
                    <div className="middle_img">
                        <img src={middle1} alt="middle1" />
                    </div>
                    <div className="middle_ground">
                        <img className="middle_ground_img" src={ground1} alt="fon20" />
                    </div>
                    <div className="middle_text">
                        <p className="middle_title">30% OFF</p>
                        <p className="middle_subtitle">FOR WOMEN</p>
                    </div>
                </div>
            </div>
            <div className="middle_item middle_item2">
                <div className="middle_item_flex">
                    <div className="middle_img">
                        <img src={middle2} alt="middle2" />
                    </div>
                    <div className="middle_ground">
                        <img className="middle_ground_img" src={ground1} alt="fon20" />
                    </div>
                    <div className="middle_text">
                        <p className="middle_title">HOT DEAL</p>
                        <p className="middle_subtitle">FOR MEN</p>
                    </div>
                </div>
            </div>
            <div className="middle_item middle_item3">
                <div className="middle_item_flex">
                    <div className="middle_img">
                        <img src={middle3} alt="middle3" />
                    </div>
                    <div className="middle_ground">
                        <img className="middle_ground_img" src={ground1} alt="fon20" />
                    </div>
                    <div className="middle_text">
                        <p className="middle_title">NEW ARRIVALS</p>
                        <p className="middle_subtitle">FOR KIDS</p>
                    </div>
                </div>
            </div>
            <div className="middle_item middle_item4">
                <div className="middle_item_flex">
                    <div className="middle_img">
                        <img src={middle4} alt="middle4" />
                    </div>
                    <div className="middle_ground">
                        <img className="middle_ground_img" src={ground2} alt="fon21" />
                    </div>
                    <div className="middle_text">
                        <p className="middle_title">LUXIROUS & TRENDY</p>
                        <p className="middle_subtitle">ACCESORIES</p>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Middle;