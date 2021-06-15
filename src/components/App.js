import React from 'react';
import EmailView from './EmailView';


const App = () => {
    return (
        <div style={{"font-family": "'Nunito', sans-serif"}}>
            <h1 className="text-center py-5 bg-info">Welcome to Nexotto</h1>
            <EmailView />
            
        </div>
    );

}

export default App;