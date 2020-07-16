import { all, takeEvery, put, call } from 'redux-saga/effects';
import actions from './actions';
import { push } from 'connected-react-router';
import { register, login } from './api';

export function* REGISTER({ payload }){
    yield call( register, payload );
    yield put({
        type: "user/SET_STATE",
        payload: {
            loading: false
        }
    })
}

export function* LOGIN({ payload }){
    const response = yield call( login, payload );
    if(response !== undefined){
        const {id, name, email, phone, gender, image, about, type, status} = response.data.user_data
        yield put({
            type: "user/SET_STATE",
            payload: {
                id, name, email, phone, gender, image, about, type, status
            }
        })
        yield put(push('/'))
    }
    yield put({
        type: "user/SET_STATE",
        payload: {
            loading: false
        }
    }) 
}

export default function* rootSaga(){
    yield all([
        takeEvery(actions.LOGIN, LOGIN),
        takeEvery(actions.REGISTER, REGISTER),
    ])
}