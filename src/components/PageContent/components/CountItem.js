import React from "react";
import "./Counts.css";


function CountItem({ icon, value, unit, label }) {
    return (
        <div className="count">
            {icon && <img className="count-icon" src={icon} alt={`Icone ${label}`} />}
            <div className="count-column">
                <p className="count-value">{value}{unit}</p>
                <p className="count-type">{label}</p>
            </div>
        </div>
    );
}

export default CountItem;