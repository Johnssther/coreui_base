const initialState = {
    expensestype:[]
}

function expensestype(state = initialState, action) {
    switch (action.type) {
        case 'SET_EXPENSES_TYPE':
            return { ...state, expensestype: action.payload }
        default:
            return state;
    }
}
export default expensestype