import React from "react";
import caloriesIcon from "../../../assets/images/calories-icon.png"
import carbsIcon from "../../../assets/images/carbs-icon.png"
import fatIcon from "../../../assets/images/fat-icon.png"
import proteinIcon from "../../../assets/images/protein-icon.png"
import "./Counts.css";


function Counts(props) {
    const data = props.data;
    return (
        <div className="counts">
            {Object.keys(data).map((key, index) => (
                <div className="count" key={index}>
                    {key === "Calories" && <img className="count-icon" src={caloriesIcon} alt="Icone calories" />}
                    {key === "Protéines" && <img className="count-icon" src={proteinIcon} alt="Icone protéines" />}
                    {key === "Glucides" && <img className="count-icon" src={carbsIcon} alt="Icone glucides" />}
                    {key === "Lipides" && <img className="count-icon" src={fatIcon} alt="Icone lipides" />}
                    <div className="count-column">
                        {key === "Calories" ? (
                            <p className="count-value">{data[key]}kCal</p>
                        ) : (
                            <p className="count-value">{data[key]}g</p>
                        )}
                        <p className="count-type">{key}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Counts