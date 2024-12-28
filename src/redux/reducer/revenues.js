const initialState = {
    storerevenue: {
        id: null,
        revenue_dt: '',
        revenue_name: '',
        revenue_amount: '',
        revenue_description: '',
        revenue_saving_percentaje: '',
        revenue_user: '',
    },
    showrevenue: {
        id: null,
        revenue_dt: '',
        revenue_name: '',
        revenue_amount: '',
        revenue_description: '',
        revenue_saving_percentaje: '',
        revenue_user: '',
    },
    indexrevenue: []
}

function revenues(state = initialState, action) {
    switch (action.type) {
        case 'SET_REVENUE_INDEX':
            return { ...state, indexrevenue: action.payload }
        case 'SET_REVENUE_STORE':
            return { ...state, storerevenue: action.payload }
        default:
            return state;
    }
}
export default revenues