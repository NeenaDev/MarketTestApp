import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { withRouter } from "react-router";
import { BrowserRouter } from 'react-router-dom';
import store from './Reducers';

//import * as serviceWorker from './serviceWorker';

const WithRouterApp = withRouter(App);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <WithRouterApp />
        </BrowserRouter>
    </Provider>
);


ReactDOM.render(app  , document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
