import axios from 'axios';

export const GET_ALL_DOGS = 'GET_ALL_DOGS';
export const GET_NAME_DOGS = 'GET_NAME_DOGS';
export const GET_DETAIL = 'GET_DETAIL';
export const POST_DOGS = 'POST_DOGS';
export const GET_ALL_TEMPERAMENTS = 'GET_ALL_TEMPERAMENTS';
export const FILTER_BY_TEMPERAMENTS = 'FILTER_BY_TEMPERAMENTS';
export const FILTER_CREATED = 'FILTER_CREATED';
export const ORDER_BY = 'ORDER_BY';
export const ERROR = 'ERROR';

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
            return {
                type: ERROR,
                payload: error
            }
        }
    }
}

export const getNameDogs = (name) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/dogs?name=${name}`);
            const nameDogs = response.data;

            return dispatch({
                type: GET_NAME_DOGS,
                payload: nameDogs
            })
        } catch(error) {
            console.log(error.message);
        }
    } 
}

export const getDetail = (id) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/dogs/${id}`);
            const dog = response.data;

            return dispatch({
                type: GET_DETAIL,
                payload: dog
            })
        } catch(error) {
            console.log(error.message);
        }
    }
}

export const postDogs = (payload) => {
    return async function () {
        try {
            const response = await axios.post('http://localhost:3001/dogs', payload);
            console.log(response);
            return response;
        } catch(error) {
            console.log(error.message);
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
            console.log(error.message);
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
        console.log(error.message);
    }
    
}

export const filterCreated = (created) => {
    try {
        return {
            type: FILTER_CREATED,
            payload: created
        }
    } catch(error) {
        console.log(error.message);
    }
}

export const orderBy = (order) => {
    try {
        return {
            type: ORDER_BY,
            payload: order
        }
    } catch(error) {
        console.log(error.message);
    }
}