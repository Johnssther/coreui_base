import { combineReducers } from 'redux'

//mis reducers
import configuracion from './configuracion'
import personalexpenses from './personalexpenses'

const rootReducer = combineReducers({
    configuracion,
    personalexpenses,
})

export default rootReducer