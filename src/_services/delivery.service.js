import axios from 'axios'

import { CONFIG } from '../_constants'
import { authHeader } from '../_helpers'

export const deliveryService = {
    trackDelivery,
    getAvailableSources,
    getAvailableDestinations,
    getDeliveryPrice,
    getAllDeliveries,
    createNewDelivery,
    updateDelivery,

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

async function getDeliveryPrice(distance, duration, weight) {
    const distanceInKm = distance / 1000;
    const durationInDays = (duration / 3600) / 8;
    const weightInKg = weight / 1000;
    const margin = 3; // in local currency
    const transitPrice = 0.0025; // price per km
    const price = margin + (distanceInKm * weightInKg * transitPrice);
    return {
        distance: distanceInKm,
        duration: durationInDays,
        price,
    }
}

async function getAllDeliveries() {
    const delivery = await axios.get(`${CONFIG.API_BASE}/deliveries`, {
        headers: authHeader(),
    })
    return delivery.data.data
}

async function createNewDelivery(newDelivery) {
    const delivery = await axios.post(`${CONFIG.API_BASE}/deliveries`, newDelivery, {
        headers: authHeader(),
    })
    return delivery.data.data
}

async function updateDelivery(deliveryId, updatedDelivery) {
    const delivery = await axios.patch(`${CONFIG.API_BASE}/deliveries/${deliveryId}`, updatedDelivery, {
        headers: authHeader(),
    })
    return delivery.data.data
}
