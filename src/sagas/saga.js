import { takeEvery,put,all } from 'redux-saga/effects';

// email verification saga
// get request to the url using fetch
function* emailAsync() {
    const payload =  yield fetch('https://run.mocky.io/v3/386baee0-3694-4384-b69a-8e9798aac3a2') .then(response => response.json());
    yield put({type: "EMAIL_VARIFY_ASYNC",payload:payload});
}

// password post request
function* loginAsync(action) {
    const payload =  yield fetch('https://run.mocky.io/v3/e9fbbabc-ef69-4bf1-9628-f3c9fe991119',{
        method:"POST",
        body: JSON.stringify(action.userDetail)
    }) .then(response => response.json());
    yield put({type: "LOGIN_VARIFY_ASYNC",payload:payload});
}


// combined saga watchers
export default function* watchRequests() {
    yield all([
        takeEvery('EMAIL_VARIFY',emailAsync),
        takeEvery('LOGIN_VARIFY',loginAsync),
    ])
}