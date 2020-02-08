import { userConstants } from '../_constants'
import { userService } from '../_services'

// export actions
export const userActions = {
    getAllUsers,
    getAvailableDrivers,
}

/**
 * Get all users who can send and receive deliveries.
 * @return {Function}
 */
function getAllUsers() {
    return dispatch => {
        dispatch(request())

        // perform async operation
        userService.getAllUsers()
            .then(users => {
                dispatch(success(users))
            })
            .catch(error => {
                dispatch(failure(error))
            })
    }

    function request() { return { type: userConstants.ALL_USERS_REQUEST } }
    function success(users) { return { type: userConstants.ALL_USERS_SUCCESS, users } }
    function failure(error) { return { type: userConstants.ALL_USERS_FAILURE, error } }
}

/**
 * Get all available drivers who can make deliveries.
 * @return {Function}
 */
function getAvailableDrivers() {
    return dispatch => {
        dispatch(request())

        // perform async operation
        userService.getAvailableDrivers()
            .then(availableDrivers => {
                dispatch(success(availableDrivers))
            })
            .catch(error => {
                dispatch(failure(error))
            })
    }

    function request() { return { type: userConstants.AVAILABLE_DRIVERS_REQUEST } }
    function success(availableDrivers) { return { type: userConstants.AVAILABLE_DRIVERS_SUCCESS, availableDrivers } }
    function failure(error) { return { type: userConstants.AVAILABLE_DRIVERS_FAILURE, error } }
}
