// actions are functions that return those objects

export const fetchPatterns = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_PATTERNS"})
        return fetch('/patterns') //proxy used 
        .then(res => res.json())
        .then(patterns => dispatch({type: "PATTERNS_LOADED", payload: patterns}))
    }
}