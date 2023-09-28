import React from 'react'
import AppReducer from './AppReducer';
import { forecastWeather } from '../api/api';


const INITIAL_STATE = {
    searchOn: false,
    searchQuery: 'Tapa',
    results: {}
}

export const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {

    const [state, dispatch] = React.useReducer(AppReducer, INITIAL_STATE);

    const getWeather = async (searchQuery, days) => {
        const data = await forecastWeather(searchQuery, days);
        if (data !== undefined) {
            dispatch({
                type: 'RESULTS',
                payload: data
            })
        } 
    }

    return (
        <AppContext.Provider value={{
            searchOn: state.searchOn,
            searchQuery: state.searchQuery,
            results: state.results,
            getWeather,
            dispatch
        }}>
            {children}
        </AppContext.Provider>
    )
}
