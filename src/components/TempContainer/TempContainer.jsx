import React from "react";
import './tempContainer.css';

const TempContainer = ({ temp, tempMax, tempMin, humidity, feelsLike, cityName, main, description, icon }) => {

    return (
        <div className="tempContainer">
            <div className="topMost">
                <div className="items">
                    <p>
                        <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="" />
                    </p>
                </div>
                <div className="items">
                    <h1>{temp}</h1>
                </div>
                <div className="items">
                    <h3>{cityName}</h3>
                </div>
            </div>
            <div className="middle">
                <div className="minmax">
                    <p>{tempMin}/{tempMax}°</p>
                    <p>low high</p>
                </div>
                <div className="feelslike">
                    <p>{feelsLike}°</p>
                    <p>feels like</p>
                </div>
                <div className="humidity">
                    <p>{humidity}%</p>
                    <p>humidity</p>
                </div>
            </div>
            <ul className="list">

                <li className='listComponents'>{main}</li>

            </ul>
        </div>
    )
}

export default TempContainer
