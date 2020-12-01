import React, { useState } from 'react';
import { Redirect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import custom styles for our application
import './css/App.css';

import Auth from './services/Auth';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Import pages
import HomePage from './components/home/HomePage';
import PostsPage from './components/posts/PostsPage';

function App() {

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

          <Route exact path="/login" render={() => (window.location = "https://google.com")} />

        </Switch>
      
      </div>

      <Footer />

    </Router>
  );

  return loggedInRouter;
}

export default App;
