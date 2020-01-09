import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD

import App from './router/router';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import store from  './store/store'
import 'antd/dist/antd.css'

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root'));
=======
import App from './router/router';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> 78b1ae9ac09f9ee9ddcd245cf8d9c004ba8ac853

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
