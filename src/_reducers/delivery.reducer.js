import { deliveryConstants, deliveryControlConstants } from '../_constants'


const initialState = {
    loading: false,
    availableSources: [],
    availableDestinations: [],
    price: 0,
    duration: 0,
    delivery: null, // tracked delivery
    deliveries: [],
    transits: [],
}

export function delivery(state = initialState, action) {

    switch (action.type) {

        // ============================
        // TRACK
        // ============================

        case deliveryConstants.TRACK_REQUEST:
            return { ...state, loading: true, }

        case deliveryConstants.TRACK_SUCCESS:
            return {
                ...state,
                delivery: action.delivery,
                loading: false,
            }

        case deliveryConstants.TRACK_FAILURE:
            return { ...state, loading: false, }

        // ============================
        // SOURCES
        // ============================

        case deliveryConstants.AVAILABLE_SOURCES_REQUEST:
            return { ...state, loading: true, }

        case deliveryConstants.AVAILABLE_SOURCES_SUCCESS:
            return {
                ...state,
                availableSources: action.sources,
                loading: false,
            }

        case deliveryConstants.AVAILABLE_SOURCES_FAILURE:
            return { ...state, loading: false, }

        // ============================
        // DESTINATIONS
        // ============================

        case deliveryConstants.AVAILABLE_DESTINATIONS_REQUEST:
            return { ...state, loading: true, }

        case deliveryConstants.AVAILABLE_DESTINATIONS_SUCCESS:
            return {
                ...state,
                availableDestinations: action.destinations,
                loading: false,
            }

        case deliveryConstants.AVAILABLE_DESTINATIONS_FAILURE:
            return { ...state, loading: false, }

        // ============================
        // PRICE CALCULATION
        // ============================

        case deliveryConstants.DELIVERY_PRICE_REQUEST:
            return { ...state, price: 0, duration: 0, loading: false }

        case deliveryConstants.DELIVERY_PRICE_SUCCESS:
            return {
                ...state,
                duration: action.duration,
                price: action.price,
                loading: false,
            }

        case deliveryConstants.DELIVERY_PRICE_FAILURE:
            return { ...state, price: 0, duration: 0, loading: false }

        // ============================
        // ALL DELIVERIES
        // ============================

        case deliveryControlConstants.ALL_DELIVERIES_REQUEST:
            return { ...state, loading: true }

        case deliveryControlConstants.ALL_DELIVERIES_SUCCESS:
            return {
                ...state,
                deliveries: action.deliveries,
                loading: false,
            }

        case deliveryControlConstants.ALL_DELIVERIES_FAILURE:
            return { ...state, loading: false }

        // ============================
        // UPDATE DELIVERY
        // ============================

        case deliveryControlConstants.UPDATE_DELIVERY_REQUEST:
            return { ...state, loading: true }

        case deliveryControlConstants.UPDATE_DELIVERY_SUCCESS:
            return {
                ...state,
                deliveries: state.deliveries.map(d => d.id === action.delivery.id ? action.delivery : d),
                loading: false,
            }

        case deliveryControlConstants.UPDATE_DELIVERY_FAILURE:
            return { ...state, loading: false }


        // ============================
        // TRANSITS
        // ============================

        case deliveryControlConstants.ALL_TRANSITS_REQUEST:
            return { ...state, loading: true }

        case deliveryControlConstants.ALL_TRANSITS_SUCCESS:
            return {
                ...state,
                transits: action.transits,
                loading: false,
            }

        case deliveryControlConstants.ALL_TRANSITS_FAILURE:
            return { ...state, loading: false }

        default:
            return state
    }

}
