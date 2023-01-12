import { 
    GET_ALL_DOGS, 
    GET_ALL_TEMPERAMENTS, 
    FILTER_BY_TEMPERAMENTS, 
    FILTER_CREATED, 
    ORDER_BY_NAME
} from './actions';

const inicialState = {
    allDogs: [],
    dogs: [],
    allTemperaments: [],
    error: {}
}

const rootReducer = (state = inicialState, action) => {
    switch (action.type) {
        case GET_ALL_DOGS:
            return {
                ...state,
                allDogs: action.payload,
                dogs: action.payload
            }

        case GET_ALL_TEMPERAMENTS:
            return {
                ...state,
                allTemperaments: action.payload
            }
        
        case FILTER_BY_TEMPERAMENTS:
            const totalDogs = state.dogs;
            const temperamentsFilter = action.payload === 'temp' ? totalDogs : totalDogs?.filter(dog => dog.temperament?.includes(action.payload))
            return {
                ...state,
                allDogs: temperamentsFilter
            }

        case FILTER_CREATED:
            const totaldogs = state.dogs;
            const filterByCreated = action.payload === 'bds' ? totaldogs.filter(dog => dog.created) : totaldogs.filter(dog => !dog.created)

            return {
                ...state,
                allDogs: action.payload === 'all' ? totaldogs : filterByCreated
            }

        case ORDER_BY_NAME:
            const orderByName = action.payload === 'asc' ? 
                state.allDogs.sort((a,b) => {
                    if (a.name > b.name) return 1
                    if (a.name < b.name) return -1
                    return 0
                }) :
                state.allDogs.sort((a,b) => {
                    if (a.name > b.name) return -1
                    if (a.name < b.name) return 1
                    return 0
                })
            return {
                ...state,
                orderByName
            }

        default:
            return {
                ...state
            }
    }
}

export default rootReducer;