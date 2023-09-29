import React from 'react';
// import { ReactDOM } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';

// ReactDOM.render(<App />, document.getElementById('root'));

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <App />,
);
