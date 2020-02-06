import axios from 'axios'

import { CONFIG } from '../_constants'
import { authHeader } from '../_helpers'

export const deliveryService = {
    trackDelivery,
    getAvailableSources,
    getAvailableDestinations,
    getDeliveryPrice,
    getTransitDuration
}

async function trackDelivery(deliveryId) {
    const delivery = await axios.get(`${CONFIG.API_BASE}/deliveries/${deliveryId}`, {
        headers: authHeader(),
    })
    return delivery.data.data
}

async function getAvailableSources() {
    return [
        { id: 1, name: 'Sofia', coordinates: [42.698334, 23.319941] },
        { id: 2, name: 'Plovdiv', coordinates: [42.136097, 24.742168] },
        { id: 3, name: 'Varna', coordinates: [43.204666, 27.910543] },
        { id: 4, name: 'Burgas', coordinates: [42.510578, 27.461014] },
        { id: 5, name: 'Stara Zagora', coordinates: [42.43278, 25.64194] },
        { id: 6, name: 'Veliko Turnovo', coordinates: [43.08124, 25.62904] },
    ];
}

async function getAvailableDestinations() {
    return [
        { id: 1, name: 'Sofia', coordinates: [42.698334, 23.319941] },
        { id: 2, name: 'Plovdiv', coordinates: [42.136097, 24.742168] },
        { id: 3, name: 'Varna', coordinates: [43.204666, 27.910543] },
        { id: 4, name: 'Burgas', coordinates: [42.510578, 27.461014] },
        { id: 5, name: 'Stara Zagora', coordinates: [42.43278, 25.64194] },
        { id: 6, name: 'Veliko Turnovo', coordinates: [43.08124, 25.62904] },
    ];
}

async function getDeliveryPrice() {
    return {}
}

async function getTransitDuration() {
    return {};
}