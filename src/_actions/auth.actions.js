import { authConstants } from '../_constants'
import { authService } from '../_services'
import { history } from '../_helpers'

export const authActions = {
    login,
    logout,
}

function login(username, password) {
    return async dispatch => {
        try {
            dispatch(request())
            const user = await authService.login({ username, password })
            dispatch(success(user))
            history.push('/')
        } catch (err) {
            dispatch(failure())
        }
    }

    function request() { return { type: authConstants.LOGIN_REQUEST } }
    function success(user) { return { type: authConstants.LOGIN_SUCCESS, user } }
    function failure() { return { type: authConstants.LOGIN_FAILURE } }
}

function logout() {
    authService.logout()
    history.push('/login')
    return { type: authConstants.LOGOUT }
}



