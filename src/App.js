import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import MyProvider from './MyContext/MyProvider';
import Profile from './pages/Profile';
import TelaPrincipalComidas from './pages/TelaPrincipalComidas';
import TelaPrincipalBebidas from './pages/TelaPrincipalBebidas';

function App() {
  return (
    <BrowserRouter>
      <MyProvider>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/profile" component={ Profile } />
          <Route exact path="/foods" component={ TelaPrincipalComidas } />
          <Route exact path="/drinks" component={ TelaPrincipalBebidas } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
