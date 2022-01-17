import React from "react";


const TempContainer = ( { temp, tempMax, tempMin, humidity, feelsLike }) => {

    return (
        <div className="tempContainer">
            <ul>
                <li>{temp}</li>
                <li>{tempMax}</li>
                <li>{tempMin}</li>
                <li>{humidity}</li>
                <li>{feelsLike}</li>
            </ul>
        </div>
    )
}

export default TempContainer
