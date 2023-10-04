import React from 'react';
// import { ReactDOM } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App.jsx';
import store from './app/store.js';
import './index.css';
import ToggleColorMode from './utils/ToggleColorMode.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <ToggleColorMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToggleColorMode>
  </Provider>,
);
