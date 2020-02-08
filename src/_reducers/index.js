import { combineReducers } from 'redux'

import { auth } from './auth.reducer'
import { delivery } from './delivery.reducer'
import { user } from './user.reducer'

const rootReducer = combineReducers({
    auth,
    delivery,
    user,
})

export default rootReducer
