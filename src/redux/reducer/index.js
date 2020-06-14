import { combineReducers } from 'redux'

//mis reducers
import configuracion from './configuracion'
import personalexpenses from './personalexpenses'
import expensestype from './expensestype'

const rootReducer = combineReducers({
    configuracion,
    personalexpenses,
    expensestype,
})

export default rootReducer