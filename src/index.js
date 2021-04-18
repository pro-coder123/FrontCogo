import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Register from './Register';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
