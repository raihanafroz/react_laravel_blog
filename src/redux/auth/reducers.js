import actions from './actions';

const initialState = {

}

const authReducer = ( state = initialState, action ) => {
    switch(action.type){
        case actions.SET_STATE :
            console.log(action.payload)
            return action.payload
        default :
            return state
    }
}

export default authReducer;