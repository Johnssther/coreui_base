const initialState = {
    createpersonalexpense: {
        id:null,
        gasto: '',
        justification: '',
        urlfile: '',
        cantidad: '',
        precio_unidad: '',
        precio_total: '',
        fecha: '',
        user_id: '',
        tipogasto_id: '',
        tipogasto: {
            id: '',
            gasto: '',
        }
    },
    personalexpense: {
        id:null,
        gasto: '',
        justification: '',
        urlfile: '',
        cantidad: '',
        precio_unidad: '',
        precio_total: '',
        fecha: '',
        user_id: '',
        tipogasto_id: '',
        tipogasto: {
            id: '',
            gasto: '',
        }
    },
    personalexpenses: []
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