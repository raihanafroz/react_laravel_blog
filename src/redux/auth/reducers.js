import actions from './actions';

const initialState = {

}

const authReducer = ( state = initialState, action ) => {
    switch(action.type){
        case actions.SET_STATE :
            return action.payload
        default :
            return state
    }
}

export default authReducer;