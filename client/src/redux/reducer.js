import { GET_ALL_DOGS, GET_ALL_TEMPERAMENTS } from './actions';

const inicialState = {
    allDogs: [],
    allTemperaments: [],
}

const rootReducer = (state = inicialState, action) => {
    switch (action.type) {
        case GET_ALL_DOGS:
            return {
                ...state,
                allDogs: [...action.payload]
            }

        case GET_ALL_TEMPERAMENTS:
            return {
                ...state,
                allTemperaments: action.payload
            }
    
        default:
            return {
                ...state
            }
    }
}

export default rootReducer;