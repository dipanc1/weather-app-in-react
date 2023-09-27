const AppReducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_ON':
            return {
                ...state,
                searchOn: !state.searchOn
            }
        case 'RESULTS':
            return {
                ...state,
                results: action.payload
            }
        case 'SEARCH_QUERY':
            return {
                ...state,
                searchQuery: action.payload
            }
        default:
            return state;
    }
}

export default AppReducer;