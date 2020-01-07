import { authConstants } from '../_constants'

let user = null
if (localStorage.getItem('token')) {
    const encodedValue = localStorage.getItem('token').split('.')[1];
    user = JSON.parse(atob(encodedValue));
}
const initialState = { loading: false, user }

/**
 * {
 *   ...
 *   auth: { user: null, loading: false }
 *   ...
 * }
 */
export function auth(state = initialState, action) {

    switch (action.type) {

        case authConstants.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case authConstants.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user,
                loading: false,
            }

        case authConstants.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
            }

        case authConstants.LOGIN:
            return {
                ...state,
                user: action.user,
                loading: false,
            }
        
        case authConstants.LOGOUT:
            return {
                ...state,
                user: null,
                loading: false,
            }

        default:
            return state
    }

}
