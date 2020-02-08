import { deliveryConstants } from '../_constants'
import { deliveryService } from '../_services'

// export actions
export const deliveryActions = {
    getAllDeliveries,
    createNewDelivery,
}


/**
 * Get all deliveries
 * @return {Function}
 */
function getAllDeliveries() {
    return dispatch => {
        dispatch(request())

        // perform async operation
        deliveryService.getAllDeliveries()
            .then(delivery => {
                dispatch(success(delivery))
            })
            .catch(error => {
                dispatch(failure(error))
            })
    }

    function request() { return { type: deliveryConstants.ALL_DELIVERIES_REQUEST } }
    function success(delivery) { return { type: deliveryConstants.ALL_DELIVERIES_SUCCESS, delivery } }
    function failure(error) { return { type: deliveryConstants.ALL_DELIVERIES_FAILURE, error } }
}


/**
 * Create a new delivery
 * @return {Function}
 */
function createNewDelivery() {
    return dispatch => {
        dispatch(request())

        // perform async operation
        deliveryService.createNewDelivery()
            .then(delivery => {
                dispatch(success(delivery))
            })
            .catch(error => {
                dispatch(failure(error))
            })
    }

    function request() { return { type: deliveryConstants.CREATE_NEW_DELIVERY_REQUEST } }
    function success(delivery) { return { type: deliveryConstants.CREATE_NEW_DELIVERY_SUCCESS, delivery } }
    function failure(error) { return { type: deliveryConstants.CREATE_NEW_DELIVERY_FAILURE, error } }
}

