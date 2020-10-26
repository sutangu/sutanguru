import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import { Provider } from 'mobx-react';
import SutanguStore from './stores/SutanguStore';

const Root = (
  <Provider SutanguStore={ SutanguStore }>
    <App/>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
