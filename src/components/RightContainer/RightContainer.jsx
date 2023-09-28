import React from 'react'
import './RightContainer.scss'
import Box from '../Box/Box'

import wind from '../../icons/wind.png'
import drop from '../../icons/drop.png'
import { AppContext } from '../../context/AppContext'

function RightContainer() {
  const { results } = React.useContext(AppContext)

  return (
    (Object.keys(results).length !== 0 || results === undefined) && <div className='right-container' >
      <div className="right-top">
        <p>{parseInt(results.location.localtime.split(" ")[1].split(":")[0]) < 12 ? 'Good Morning' : parseInt(results.location.localtime.split(" ")[1].split(":")[0]) < 18 ? 'Good Afternoon' : 'Good Evening'}</p>
        <p>{results.location.localtime.split(" ")[1]}</p>
      </div>

      <div className="right-middle">
        <div className="right-middle-top">
          <div className="right-middle-top-left">
            <span className='temperature'>{results.current.temp_c}<p>°</p></span>
          </div>
          <div className="right-middle-top-right">
            <span>
              <img src={wind} alt="wind" width={'20px'} style={{
                filter: 'invert(0.4)'
              }} />
              <p>{results.current.wind_mph} mph</p>
            </span>
            <span>
              <img src={drop} alt="drop" width={'20px'} style={{
                filter: 'invert(0.4)'
              }} />
              <p>{results.current.humidity} %</p>
            </span>
          </div>
        </div>
        <div className="right-middle-bottom">
          <span className='temperature'>Feels like {results.current.feelslike_c}<p>°</p></span>
          <p className='weather'>{results.current.condition.text}</p>
        </div>
      </div>

      <div className="right-bottom">
        <p className='title'>Hourly Forecast</p>
        <div className="box-wrapper">
          {results.forecast.forecastday[0].hour
            .filter((item) => parseInt(item.time.split(" ")[1].split(":")[0]) > new Date().getHours())
            .slice(0, 6)
            .map((item) => {
              return <Box key={item.time} day={item.time.split(" ")[1]} temperature={item.temp_c}
                weather={item.condition.text} />
            })}
        </div>
      </div>
    </div >
  )
}

export default RightContainer