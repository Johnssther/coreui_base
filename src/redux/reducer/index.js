import { combineReducers } from 'redux'

//mis reducers
import configuracion from './configuracion.js'

const rootReducer = combineReducers({
    configuracion,
})

export default rootReducer