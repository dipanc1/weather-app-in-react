const CityContainer = ({ cityName, main, description, icon }) => {
    return (
        <div>
            <ul>
                <li>{cityName}</li>
                <li>{main}</li>
                <li>{description}</li>
                <li>{icon}</li>
            </ul>
        </div>
    )
}

export default CityContainer
