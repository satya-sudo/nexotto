import { combineReducers} from 'redux';
import emailVarifyReducer from './emailVarifyReducer';
import loginResultReducer   from './loginResultReducer';

// root reducer 
export default combineReducers({
    emailVarify: emailVarifyReducer,
    loginResult: loginResultReducer,
});