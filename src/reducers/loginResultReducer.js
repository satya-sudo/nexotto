
// login verification reducer

const  INITIAL_STATE = {
    loginResult:null,
    user:null,
}

export default (state=INITIAL_STATE,action) => {
    switch (action.type){
        case 'LOGIN_VARIFY_ASYNC':
            return {...state,user:action.payload.user,loginResult:action.payload.loginResult};
        default: return state;    
    }
};