import actions from './actions';

const initialState = {
    loading: false,
}

const authReducer = ( state = initialState, action ) => {
    switch(action.type){
        case actions.SET_STATE :
            return { loading: false, ...action.payload }
        case actions.REGISTER:
            return { loading: true }
        default :
            return state
    }
}

export default authReducer;