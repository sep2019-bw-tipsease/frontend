import { LOADING, SUCCESS } from './actions'

const initialState = {
    workers: [],
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true,
            }
        case SUCCESS:
            return {
                ...state,
                workers: action.payload
            }
        default:
            return state;
    }
}