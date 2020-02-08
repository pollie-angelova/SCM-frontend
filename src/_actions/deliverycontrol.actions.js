import { deliveryControlConstants } from '../_constants'
import { deliveryService } from '../_services'

// export actions
export const deliveryControlActions = {
    getAllDeliveries,
    createNewDelivery,
    updateDelivery,
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
            .then(deliveries => {
                dispatch(success(deliveries))
            })
            .catch(error => {
                dispatch(failure(error))
            })
    }

    function request() { return { type: deliveryControlConstants.ALL_DELIVERIES_REQUEST } }
    function success(deliveries) { return { type: deliveryControlConstants.ALL_DELIVERIES_SUCCESS, deliveries } }
    function failure(error) { return { type: deliveryControlConstants.ALL_DELIVERIES_FAILURE, error } }
}


/**
 * Create a new delivery
 * @return {Function}
 */
function createNewDelivery(newDelivery) {
    return dispatch => {
        dispatch(request())

        // perform async operation
        deliveryService.createNewDelivery(newDelivery)
            .then(delivery => {
                dispatch(success(delivery))
            })
            .catch(error => {
                dispatch(failure(error))
            })
    }

    function request() { return { type: deliveryControlConstants.CREATE_NEW_DELIVERY_REQUEST } }
    function success(delivery) { return { type: deliveryControlConstants.CREATE_NEW_DELIVERY_SUCCESS, delivery } }
    function failure(error) { return { type: deliveryControlConstants.CREATE_NEW_DELIVERY_FAILURE, error } }
}


/**
 * Create a new delivery
 * @return {Function}
 */
function updateDelivery(deliveryId, updatedDelivery) {
    return dispatch => {
        dispatch(request())

        // perform async operation
        deliveryService.updateDelivery(deliveryId, updatedDelivery)
            .then(delivery => {
                dispatch(success(delivery))
            })
            .catch(error => {
                dispatch(failure(error))
            })
    }

    function request() { return { type: deliveryControlConstants.UPDATE_DELIVERY_REQUEST } }
    function success(delivery) { return { type: deliveryControlConstants.UPDATE_DELIVERY_SUCCESS, delivery } }
    function failure(error) { return { type: deliveryControlConstants.UPDATE_DELIVERY_FAILURE, error } }
}
