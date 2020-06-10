import React from 'react';
import { Switch, HashRouter } from 'react-router-dom';
import { Route } from 'react-router';


import './global.css';
import Header from './components/header';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import DragonsPage from './pages/dragonsPage';
import DragonPage from './pages/dragonPage';
import NotFound from './pages/notFound';
import CreateDragonPage from './pages/createDragonPage';
import { ProtectedRoute } from './protected.route';

function App() {
  return (
    <>
      <Header></Header>
      <HashRouter>
        <Switch>
          <Route  
            exact
            path="/"
            component={LoginPage}
          />
          <Route  
            exact
            path="/register"
            component={RegisterPage}
          />
          <ProtectedRoute
            exact
            path="/dragons"
            component={DragonsPage}
          />
          <ProtectedRoute
            exact
            path="/dragon/:id"
            component={DragonPage}
          />
          <ProtectedRoute
            exact
            path="/create"
            component={CreateDragonPage}
          />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
