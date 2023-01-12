import axios from 'axios';

export const GET_ALL_DOGS = 'GET_ALL_DOGS';
export const GET_ALL_TEMPERAMENTS = 'GET_ALL_TEMPERAMENTS';
export const ERROR = 'ERROR';
export const FILTER_BY_TEMPERAMENTS = 'FILTER_BY_TEMPERAMENTS';
export const FILTER_CREATED = 'FILTER_CREATED';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';

export const getAllDogs = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get('http://localhost:3001/dogs');
            const allDogs = response.data;

            return dispatch({
                type: GET_ALL_DOGS,
                payload: allDogs
            })
        } catch(error) {
            console.log(error.message)
        }
        
    }
}

export const getAllTemperaments = () => {
    return async function (dispatch) {
        try{
            const response = await axios.get('http://localhost:3001/temperaments');
            const allTemperaments = response.data;

            return dispatch ({
                type: GET_ALL_TEMPERAMENTS,
                payload: allTemperaments
            })
        } catch(error) {
            console.log(error.message)
        }
    }
}

export const filterTemperaments = (payload) => {
    try {
        return {
            type: FILTER_BY_TEMPERAMENTS,
            payload
        }
    } catch(error) {
        console.log(error.message)
    }
    
}

export const filterCreated = (payload) => {
    try {
        return {
            type: FILTER_CREATED,
            payload
        }
    } catch(error) {
        console.log(error.message)
    }
}

export const orderByName = (payload) => {
    try {
        return {
            type: ORDER_BY_NAME,
            payload
        }
    } catch(error) {
        console.log(error.message)
    }
}