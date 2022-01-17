import React from "react";
import './tempContainer.css';

const TempContainer = ( { temp, tempMax, tempMin, humidity, feelsLike }) => {

    return (
        <div className="tempContainer">
            <ul className="list">
                <li className="listComponent">{temp}</li>
                <li className="listComponent">{tempMax}</li>
                <li className="listComponent">{tempMin}</li>
                <li className="listComponent">{humidity}</li>
                <li className="listComponent">{feelsLike}</li>
            </ul>
        </div>
    )
}

export default TempContainer
