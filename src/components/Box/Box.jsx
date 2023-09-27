import React from 'react'
import './Box.scss'

const Box = ({ day, temperature, weather }) => {

    return (
        <div className='box' style={{
            backgroundColor: '#fff',
            border: '1px solid #ddd',
        }}>
            <p className='day'>{day}</p>
            <p>{temperature}°</p>
            <p className='weather'>{weather}</p>
        </div>
    )
}

export default Box