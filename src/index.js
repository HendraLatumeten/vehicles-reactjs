import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './router';
import store from './store'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist';

const persit = persistStore(store)
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persit}>
        <App />
    </PersistGate>
  </Provider>
);

