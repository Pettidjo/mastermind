import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store/store';

// Components
import Game from './components/Game';

// CSS
import './style.css';

const App = () => <Provider store={store}>
        <Game />
    </Provider>

ReactDOM.render( <App />, document.querySelector('#root'));