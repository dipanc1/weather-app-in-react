import './cityContainer.css'

const CityContainer = ({ cityName, main, description, icon }) => {
    return (
        <div className='container'>
            <ul className='list'>
                <li className='listComponents'>{cityName}</li>
                <li className='listComponents'>{main}</li>
                <li className='listComponents'>{description}</li>
                <li className='listComponents'>{icon}</li>
            </ul>
        </div>
    )
}

export default CityContainer
