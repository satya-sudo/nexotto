import  React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,compose}  from 'redux';

import reducers from './reducers';
import App from './components/App';

import createSagaMiddleware from 'redux-saga';
import saga from './sagas/saga';

// redux saga middle ware 
const  sagaMiddleware =  createSagaMiddleware();

// redux dev tool 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

// redux store creation
const  store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

// saga middle ware
sagaMiddleware.run(saga);

// mounting the react components
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.querySelector('#root')
);