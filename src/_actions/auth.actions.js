import { authConstants } from '../_constants'
import { history } from '../_helpers'

export const authActions = {
    handleToken,
    loginWithGoogle,
    logout,
}

function handleToken() {
    if (window.location.hash.startsWith('#/token?token=')) {
        const token = window.location.hash.replace('#/token?token=', '');
        localStorage.setItem('token', token);
        history.push('/');
        const encodedValue = token.split('.')[1];
        const parsedValue = JSON.parse(atob(encodedValue));
        return { type: authConstants.LOGIN, user: parsedValue }
    }
    return { type: authConstants.PASS }
}

function logout() {
    localStorage.removeItem('token')
    return { type: authConstants.LOGOUT }
}

function loginWithGoogle() {
    const OAUTH_URL = 'https://accounts.google.com/o/oauth2/v2/auth';
    const CLIENT_ID = '383745169524-jblc96764rptfm9cb8itu3kgn6arj34m.apps.googleusercontent.com'
    const REDIRECT_URL = 'http://localhost:3000/api/oauth/code'
    const params = new URLSearchParams({
        client_id: CLIENT_ID,
        redirect_uri: REDIRECT_URL,
        scope: 'profile email',
        access_type: 'online',
        response_type: 'code',
        state: Math.round(Math.random() * 10000000),
    })
    window.location = `${OAUTH_URL}?${params.toString()}`;
}
