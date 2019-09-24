import axios from 'axios';

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const ADD = 'ADD';

export const getWorkers = () => dispatch => {
    dispatch({ type: LOADING });
    axios
        .get('https://5d8947bcb2568e0014d87a57.mockapi.io/people')
        .then(res => {
            console.log(res, 'api request')
            dispatch({ type: SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err, 'error on get workers')
        })
}