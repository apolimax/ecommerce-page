import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GLobalStyle from './styles/Global';
import Theme from './styles/Theme';

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <GLobalStyle/>
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);
