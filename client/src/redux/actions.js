import axios from 'axios';

export const GET_ALL_DOGS = 'GET_ALL_DOGS';
export const GET_ALL_TEMPERAMENTS = 'GET_ALL_TEMPERAMENTS';

export const getAllDogs = () => {
    return async function (dispatch) {
        const response = await axios.get('http://localhost:3001/dogs');
        const allDogs = response.data;

        return dispatch({
            type: GET_ALL_DOGS,
            payload: allDogs
        })
    }
}

export const getAllTemperaments = () => {
    return async function (dispatch) {
        const response = await axios.get('http://localhost:3001/temperaments');
        const allTemperaments = response.data;

        return dispatch ({
            type: GET_ALL_TEMPERAMENTS,
            payload: allTemperaments
        })
    }
}