import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const ADD = 'ADD';

export const getWorkers = () => dispatch => {
    dispatch({ type: LOADING });
    axiosWithAuth()
        .get('/workers')

        .then(res => {
            // console.log(res, 'api request')
            dispatch({ type: SUCCESS, payload: res })
        })
        .catch(err => {
            console.log(err, 'error on get workers')
        })
}