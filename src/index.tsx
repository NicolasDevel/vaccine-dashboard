import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

//Theme variable
import './theme/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>H1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <p>parrafo</p>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
