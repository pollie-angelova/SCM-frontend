import { deliveryConstants } from '../_constants'
import { deliveryService } from '../_services'

// export actions
export const deliveryActions = {
    trackDelivery,
}

/**
 * Get delivery status
 * @return {Function}
 */
function trackDelivery(deliveryId) {
    return dispatch => {
        dispatch(request())

        // perform async operation
        deliveryService.trackDelivery(deliveryId)
        .then(delivery => {
            dispatch(success(delivery))
        })
        .catch(error => {
            dispatch(failure(error))
        })
    }

    function request() { return { type: deliveryConstants.TRACK_REQUEST } }
    function success(delivery) { return { type: deliveryConstants.TRACK_SUCCESS, delivery } }
    function failure(error) { return { type: deliveryConstants.TRACK_FAILURE, error } }
}