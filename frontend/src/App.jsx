import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import custom styles for our application
import './css/App.css';

import Auth from './services/Auth';
import Navbar from './components/layout/Navbar';

// Import pages

import LoginPage from './components/auth/LoginPage';
import HomePage from './components/home/HomePage';
import AppHomePage from './components/home/AppHomePage';
import PostsPage from './components/posts/PostsPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());

  Auth.bindLoggedInStateSetter(setLoggedIn);

  const loggedInRouter = (
    <Router>
      <Navbar onLogout={() => Auth.logout()} />

      <div className="container mt-5">
        
        <Switch>
          <Route path="/posts" exact>
            <PostsPage />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>

          <Route exact={true} path="/login" component={LoginPage} />

        </Switch>
      
      </div>
    </Router>
  );

  return loggedIn ? loggedInRouter : <LoginPage />;
}

export default App;
