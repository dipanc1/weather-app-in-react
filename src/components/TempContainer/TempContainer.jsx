import React, { useEffect, useState } from "react";
import './TempStyles.css';

const TempContainer = ({ temp, tempMax, tempMin, humidity, feelsLike, cityName, id, icon }) => {

    const [backgroundImg, setBackgroundImg] = useState('https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482930.jpg');

    useEffect(() => {
        if (id >= 801 && id <= 804) {
            setBackgroundImg('https://c1.wallpaperflare.com/preview/923/772/908/air-sky-cloud-background.jpg');
        } else if (id >= 300 && id <= 321) {
            setBackgroundImg('https://images.alphacoders.com/437/thumb-1920-437881.jpg')
        } else if (id >= 500 && id <= 531) {
            setBackgroundImg('https://cdn.wallpapersafari.com/16/27/NQ0vdD.jpg')
        } else if (id >= 600 && id <= 622) {
            setBackgroundImg('https://i.pinimg.com/originals/e6/95/d2/e695d2ec413f6b35e11551efb50897b9.jpg')
        } else if (id >= 700 && id <= 781) {
            setBackgroundImg('https://i.ytimg.com/vi/LJyiTDAWzDA/maxresdefault.jpg')
        } else if (id === 800) {
            setBackgroundImg('https://cdn.pixabay.com/photo/2018/08/06/22/55/sun-3588618__480.jpg')
        }
    },[id])

    return (
        <>
        <div className="tempContainer" style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className="topMost">
                <div className="items">
                    <p>
                        <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="" />
                    </p>
                </div>
                <div className="items">
                    <h1>{temp}°C</h1>
                </div>
                <div className="items">
                    <h2>{cityName}</h2>
                </div>
            </div>
            <div className="middle">
                <div className="items2">
                    <p>{tempMin}/{tempMax}°C</p>
                    <p>low high</p>
                </div>
                <div className="items2">
                    <p>{feelsLike}°C</p>
                    <p>feels like</p>
                </div>
                <div className="items2">
                    <p>{humidity}%</p>
                    <p>humidity</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default TempContainer
