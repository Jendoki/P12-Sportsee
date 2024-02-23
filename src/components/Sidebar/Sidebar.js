import React from "react";
import "./Sidebar.css"
import Icon from "./components/Icon"
import icon1 from "../../assets/images/icon1.png"
import icon2 from "../../assets/images/icon2.png"
import icon3 from "../../assets/images/icon3.png"
import icon4 from "../../assets/images/icon4.png"


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="icons">
                <Icon img={icon1} />
                <Icon img={icon2} />
                <Icon img={icon3} />
                <Icon img={icon4} />
            </div>
            <div>
                <p className="copyright">Copyright, SportSee 2020</p>
            </div>
        </div>
    )
}

export default Sidebar