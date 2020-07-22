import { combineReducers } from 'redux'

//mis reducers
import configuracion from './configuracion'
import personalexpenses from './personalexpenses'
import expensestype from './expensestype'
import revenues from './revenues'

const rootReducer = combineReducers({
    configuracion,
    personalexpenses,
    expensestype,
    revenues,
})

export default rootReducer