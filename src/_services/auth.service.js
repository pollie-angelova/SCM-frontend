import axios from 'axios'

import { CONFIG } from '../_constants'

export const authService = {
    login,
    logout,
}

/**
 * Perform basic account authentication.
 * This does not go through the Request helper since it
 * involves more user-friendly handling of errors.
 */
async function login(account) {
    const loginData = await axios.post(`${CONFIG.API_BASE}/auth/v1/basic`, account)
    const tokenData  = await axios.post(`${CONFIG.API_BASE}/auth/v1/token?v=2`,
        { identity: loginData.data.data.userId }, {
        headers: { 'X-API-Key': loginData.data.data.apiKey },
    })
    const result = { ...loginData.data.data, token: tokenData.data.data.token }
    localStorage.setItem('user', JSON.stringify(result))
    return result
}

function logout() {
    localStorage.removeItem('user')
}
