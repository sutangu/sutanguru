import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import { Provider } from 'mobx-react';
import rootStore from './stores/RootStore';

const Root = (
  <Provider
    RootStore={ rootStore }
    SutanguStore={ rootStore.sutanguStore }
    SocialNetworksStore={ rootStore.socialNetworksStore }
  >
    <App/>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
