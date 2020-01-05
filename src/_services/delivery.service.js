import axios from 'axios'

import { CONFIG } from '../_constants'
import { authHeader } from '../_helpers'

export const deliveryService = {
    trackDelivery,
}

async function trackDelivery(deliveryId) {
    const delivery = await axios.get(`${CONFIG.API_BASE}/deliveries/${deliveryId}`, {
        headers: authHeader(),
    })
    return delivery.data.data
}
