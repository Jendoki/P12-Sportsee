import React from "react";
import "./Greeting.css"

function Greeting(props) {
    return (
        <>
            <div className="greeting">
                <p>Bonjour </p>
                <p className="user-name">{props.name}</p>
            </div>
            <p className="previous-day-status">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </>
    )
}

export default Greeting