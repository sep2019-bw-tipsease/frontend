
import { axiosWithAuth } from './axiosWithAuth'

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';

export const getWorkers = () => dispatch => {
    dispatch({ type: LOADING });
    axiosWithAuth()
        .get('/workers')

        .then(res => {
            // console.log(res, 'api request')
            dispatch({ type: SUCCESS, payload: res.data })
        })
        .catch(err => {
            // console.log(err, 'error on get workers')
        })
}

export const getOneWorker = id => dispatch => {

    axiosWithAuth()
        .get(`/workers/${id}`)
        .then(res => {
            console.log(res, 'indivdual server api request')
            dispatch({ type: SUCCESS, payload: res.data })
        })
        .catch(err => console.log(err, 'error on id server'))
}

// export const getMyself = () => {
//     .get('')
// }


export const signOut = e => {
    // console.log(e, 'signing out')
    localStorage.removeItem('token')
}

export const toMarketing = e => {
    window.open('https://laughing-bassi-45295e.netlify.com')
}