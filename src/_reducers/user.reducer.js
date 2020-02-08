import { userConstants } from '../_constants'


const initialState = {
    loading: false,
    users: [],
    availableDrivers: [],
}

export function user(state = initialState, action) {

    switch (action.type) {

        // ============================
        // USERS
        // ============================

        case userConstants.ALL_USERS_REQUEST:
            return { ...state, loading: true, }

        case userConstants.ALL_USERS_SUCCESS:
            return {
                ...state,
                users: action.users,
                loading: false,
            }

        case userConstants.ALL_USERS_FAILURE:
            return { ...state, loading: false, }


        // ============================
        // AVAILABLE DRIVERS
        // ============================

        case userConstants.AVAILABLE_DRIVERS_REQUEST:
            return { ...state, loading: true, }

        case userConstants.AVAILABLE_DRIVERS_SUCCESS:
            return {
                ...state,
                availableDrivers: action.availableDrivers,
                loading: false,
            }

        case userConstants.AVAILABLE_DRIVERS_FAILURE:
            return { ...state, loading: false, }


        default:
            return state
    }

}
