import React , {useState} from  'react';
import { connect } from 'react-redux';


const EmailView = (props) => {

    // input fields state manging 
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    // form input handle 
    // email form handle
    const handleSubmit = (e) =>{

        e.preventDefault();      
        props.emailVerifier(email);

    }

    // form input handle 
    // password form handle
    const handleSubmitTwo = (e) =>{
        e.preventDefault();
        props.loginVerifier({Email:email , Password: password })
    }
    
    // conditional rendering 

    // if user is not defined and login state is null
    // we will render email verification form
    if (props.user === null && props.loginResult ===  null){
        return (
        
            <div className="text-center mt-5 d-block">
                <form  onSubmit={handleSubmit}> 
                <div className="m-2">
                    <input className="input"  type="email" placeholder ="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="m-4">
                    <input className="btn btn-info" type="submit" value="Verify"></input>
                </div>
                </form>    
            </div>
    
        );
    // email verified but password is not     
    } else if (props.loginResult ===  null) {
        return(
            <div className="text-center mt-5 d-block">
                <form  onSubmit={handleSubmitTwo}> 
                    <div className="m-2">
                        <input className="input" type="email" placeholder ="Email" value={email}></input>
                    </div>
                    <div className="m-2">
                        <input type="password" placeholder ="Password" value={password}  onChange={(e)  =>setPassword(e.target.value)}></input>
                    </div>
                    <div className="m-4">
                        <input className="btn btn-info" type="submit" value="Login"></input>
                    </div>
                </form>
            </div>
        )
    // login sucessful    
    } else {
        window.location.href = 'https://nexotto.com';
    }
    
};

// maping store states to the react component
const  mapStateToProps  = state => {
    return {
        user: state.emailVarify.user,
        companyName: state.emailVarify.companyName,
        loginResult: state.loginResult.loginResult,
    };
};

// mapping action dispacher to react component
const mapDispatchToProps = dispatch => {
    return {
        emailVerifier : (user) => {dispatch({type: "EMAIL_VARIFY",user:user})},
        loginVerifier : (userDetail) => {dispatch({type:"LOGIN_VARIFY", userDetail:userDetail})}
    };
};

// connecting redux store and component export 
export  default connect(mapStateToProps,mapDispatchToProps)(EmailView); 