import { combineReducers } from 'redux'

import { auth } from './auth.reducer'
import { delivery } from './delivery.reducer'

const rootReducer = combineReducers({
    auth,
    delivery,
})

export default rootReducer
