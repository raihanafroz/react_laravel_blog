import actions from './actions';
var user_data = null
let user = JSON.parse(localStorage.getItem('user'));
if(user){
    var user_data = user.data.user_data
}

const initialState = user_data ? { user_data, loading: false } : {
    name: "", 
    email: "", 
    phone: "", 
    gender: "", 
    image: "", 
    about: "",
    type: "",
    status: "",
    loading: false,
}

const authReducer = ( state = initialState, action ) => {
    switch(action.type){
        case actions.SET_STATE:
            return { ...state, ...action.payload }
        case actions.REGISTER:
            return { loading: true }
        case actions.LOGIN:
            return { loading: true }
        default :
            return state
    }
}

export default authReducer;