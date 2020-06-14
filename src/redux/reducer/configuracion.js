const initialState = {
    configuracionUsuario: {
        modalActiva:true
    },
}

function configuracion(state = initialState, action) {
    switch (action.type) {
        case 'SET_CONFIGURACION':
            return { configuracionUsuario: action.payload }
        default:
            return state;
    }
}
export default configuracion