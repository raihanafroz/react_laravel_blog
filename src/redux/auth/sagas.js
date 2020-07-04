import { all, takeEvery, put, call } from 'redux-saga/effects';
import actions from './actions';
import { register } from './api';

export function* REGISTER({ payload }){
    // const { name, email, gender, password, confirm_password } = payload;
    const response = yield call( register, payload );
    yield put({
        type: "user/SET_STATE",
        payload: null
    })
}


export default function* rootSaga(){
    yield all([
        takeEvery(actions.REGISTER, REGISTER)
    ])
}