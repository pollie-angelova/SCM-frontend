import axios from 'axios'

import { CONFIG } from '../_constants'
import { authHeader } from '../_helpers'

export const userService = {
    getAllUsers,
    getAvailableDrivers,
    getAllDrivers,
}

async function getAllUsers() {
    const users = await axios.get(`${CONFIG.API_BASE}/users`, {
        headers: authHeader(),
    });
    // TODO: filter by role === user | admin
    return users.data.data
}

async function getAvailableDrivers() {
    const users = await axios.get(`${CONFIG.API_BASE}/users`, {
        headers: authHeader(),
    });
    // TODO: filter by role === driver | admin
    return users.data.data
}

async function getAllDrivers() {
    const users = await axios.get(`${CONFIG.API_BASE}/users`, {
        headers: authHeader(),
    });
    // TODO: filter by role === driver | admin
    return users.data.data
}
