import { deliveryConstants } from '../_constants'


const initialState = {
    loading: false,
    availableSources: [],
    availableDestinations: [],
}

export function delivery(state = initialState, action) {

    switch (action.type) {

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

        default:
            return state
    }

}
