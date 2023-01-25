import { 
    GET_ALL_DOGS, 
    GET_NAME_DOGS,
    GET_DETAIL,
    POST_DOGS,
    GET_ALL_TEMPERAMENTS, 
    FILTER_BY_TEMPERAMENTS, 
    FILTER_CREATED, 
    ORDER_BY,
    RESET,
} from './actions';

const inicialState = {
    allDogs: [],
    dogs: [],
    detail: [],
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

        case GET_NAME_DOGS:
            return {
                ...state,
                allDogs: action.payload
            }

        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            }

        case RESET:
            return {
                ...state,
                detail: []
            }

        case POST_DOGS:
            return {
                ...state
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

        case ORDER_BY:
            let orderBy = [...state.allDogs];
            orderBy = orderBy.sort((a, b) => {
                switch (action.payload) {
                    case 'desc':
                        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1
                        if (a.name < b.name) return 1 
                        return 0

                    case 'asc':
                        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
                        if (a.name > b.name) return 1
                        return 0

                    case 'min':
                        if (a.weight_min < b.weight_min) return -1
                        if (a.weight_min > b.weight_min) return 1
                        
                        return 0

                    case 'max':
                        if (a.weight_max > b.weight_max) return -1
                        if (a.weight_max < b.weight_max) return 1
                        return 0

                    default:
                        return {...state}
                }
            })

            return {
                ...state,
                allDogs: orderBy
            }

        default:
            return {
                ...state
            }
    }
}

export default rootReducer;