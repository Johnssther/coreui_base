const initialState = {
    personalexpense: {
        gasto:'',
        cantidad:'',
        precio_unidad:'',
        precio_total:'',
        fecha:'',
        user_id:'',
        tipogasto_id:'',
    },
    personalexpenses:[]
}

function personalexpenses(state = initialState, action) {
    switch (action.type) {
        case 'SET_PERSONALEXPENSE':
            return { ...state, personalexpense: action.payload }
        case 'SET_PERSONALEXPENSES':
            return { ...state, personalexpenses: action.payload }
        default:
            return state;
    }
}
export default personalexpenses