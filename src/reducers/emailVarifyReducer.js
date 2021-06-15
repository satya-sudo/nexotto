
// email verification reducer store
// initial state set

const  INITIAL_STATE = {
    user:null,
    companyName:null,
}

export default (state=INITIAL_STATE,action) => {
    switch (action.type){
        case 'EMAIL_VARIFY_ASYNC':
            return {...state,user:action.payload.user,companyName:action.payload.companyName};
        default: return state;    
    }
};