import { deliveryConstants } from '../_constants'
import { deliveryService } from '../_services'

// export actions
export const deliveryActions = {
    trackDelivery,
    getAvailableSources,
    getAvailableDestinations,
    getDeliveryPrice,
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

/**
 * Get available sources
 * @return {Function}
 */
function getAvailableSources() {
    return dispatch => {
        dispatch(request())

        // perform async operation
        deliveryService.getAvailableSources()
            .then(result => {
                dispatch(success(result))
            })
            .catch(error => {
                dispatch(failure(error))
            })
    }

    function request() { return { type: deliveryConstants.AVAILABLE_SOURCES_REQUEST } }
    function success(sources) { return { type: deliveryConstants.AVAILABLE_SOURCES_SUCCESS, sources } }
    function failure(error) { return { type: deliveryConstants.AVAILABLE_SOURCES_FAILURE, error } }
}

/**
 * Get available destinations
 * @return {Function}
 */
function getAvailableDestinations() {
    return dispatch => {
        dispatch(request())

        // perform async operation
        deliveryService.getAvailableDestinations()
            .then(result => {
                dispatch(success(result))
            })
            .catch(error => {
                dispatch(failure(error))
            })
    }

    function request() { return { type: deliveryConstants.AVAILABLE_DESTINATIONS_REQUEST } }
    function success(destinations) { return { type: deliveryConstants.AVAILABLE_DESTINATIONS_SUCCESS, destinations } }
    function failure(error) { return { type: deliveryConstants.AVAILABLE_DESTINATIONS_FAILURE, error } }
}


/**
 * Get delivery transit price
 * @return {Function}
 */
function getDeliveryPrice(distance, duration, weight=1000) {
    return dispatch => {
        dispatch(request())

        // perform async operation
        deliveryService.getDeliveryPrice(distance, duration, weight)
            .then(({ distance, price, duration }) => {
                dispatch(success(price, duration))
            })
            .catch(error => {
                dispatch(failure(error))
            })
    }

    function request() { return { type: deliveryConstants.DELIVERY_PRICE_REQUEST } }
    function success(price, duration) { return { type: deliveryConstants.DELIVERY_PRICE_SUCCESS, price, duration } }
    function failure(error) { return { type: deliveryConstants.DELIVERY_PRICE_FAILURE, error } }
}
