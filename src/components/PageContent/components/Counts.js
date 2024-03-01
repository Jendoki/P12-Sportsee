import React from "react";
import CountItem from "./CountItem"
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
                <CountItem
                    key={index}
                    icon={key === "Calories" ? caloriesIcon : key === "Protéines" ? proteinIcon : key === "Glucides" ? carbsIcon : key === "Lipides" ? fatIcon : null}
                    value={data[key]}
                    unit={key === "Calories" ? "kCal" : "g"}
                    label={key}
                />
            ))}
        </div>
    );
}

export default Counts