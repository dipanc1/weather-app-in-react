import React, { useState } from "react";


const TempContainer = () => {
    const [temp, setTemp] = useState('');
    const [tempMax, setTempMax] = useState('');
    const [tempMin, setTempMin] = useState('');
    const [humidity, setHumidity] = useState('');
    const [feelsLike, setFeelsLike] = useState('');

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
