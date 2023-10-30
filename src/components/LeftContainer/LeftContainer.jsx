import React, { useEffect } from 'react'
import './LeftContainer.scss'
import Box from '../Box/Box'
import wind from '../../icons/wind.png'
import drop from '../../icons/drop.png'
import { AppContext } from '../../context/AppContext'

function LeftContainer() {
  const { searchOn, dispatch, searchQuery, getWeather, results } = React.useContext(AppContext)
  const days = 7;

  useEffect(() => {
    if (Object.keys(results).length === 0) {
      getWeather(searchQuery, days)
    }
  }, [getWeather, results])

  return (
    (Object.keys(results).length !== 0 || results === undefined) && <div className='left-container'>
      <div className="left-top">
        {searchOn ? <input onBlur={
          () => dispatch({ type: 'SEARCH_ON' })
        } autoFocus={true} type="text" placeholder='Search' onKeyDown={
          (e) => {
            if (e.key === 'Enter') {
              getWeather(searchQuery, days)
              dispatch({ type: 'SEARCH_ON' })
            }
          }
        }
          onChange={(e) => dispatch({ type: 'SEARCH_QUERY', payload: e.target.value })}
        /> :
          <p onClick={
            () => dispatch({ type: 'SEARCH_ON' })
          }>{
              `${results.location.name}, ${results.location.country}`
            }</p>}
        <p>{results.location.localtime.split(" ")[0]}</p>
      </div>
      <div className="left-middle">
        <div className="left-middle-left">
          <span className='temperature'>{results.current.temp_c}<p>°</p></span>
          <p>{results.current.condition.text}</p>
        </div>
        <div className="left-middle-right">
          <span className="left-middle-top">
            <img src={wind} alt="wind" />
            <p>{results.current.wind_mph} mph</p>
          </span>
          <span className="left-middle-bottom">
            <img src={drop} alt="drop" />
            <p>{results.current.humidity} %</p>
          </span>
        </div>
      </div>
      <div className="left-bottom">
        {results.forecast.forecastday.map((item) => {
          return <Box key={item.date} day={String(new Date(item.date)).split(" ")[0]} temperature={item.day.avgtemp_c}
            weather={item.day.condition.text} />
        })}
      </div>
    </div>
  )
}

export default LeftContainer