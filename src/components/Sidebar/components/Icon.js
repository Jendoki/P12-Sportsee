import React from "react";
import "./Icon.css"


function Icon(props) {
    return (
        <div className="Icon">
            <img src={props.img} />
        </div>
    )
}

export default Icon;