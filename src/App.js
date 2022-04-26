import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import MyProvider from './MyContext/MyProvider';

function App() {
  return (
    <BrowserRouter>
      <MyProvider>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/notfound" component={ NotFound } />
        </Switch>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
