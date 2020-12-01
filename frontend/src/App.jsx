import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import custom styles for our application
import './css/App.css';

import Auth from './services/Auth';
import Navbar from './components/layout/Navbar';

// Import pages

import LoginPage from './components/auth/LoginPage';
import AppHomePage from './components/home/AppHomePage';
import AnnouncementPage from './components/announcementNew/AnnouncementPage';
import NewAnnouncementPage from './components/announcementNew/NewAnnouncement';
import SingleAnnouncement from './components/announcementNew/SingleAnnouncement';
import CommentPage from './components/commentNew/CommentsPage';
import ThreadPage from './components/chat/ThreadPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());

  Auth.bindLoggedInStateSetter(setLoggedIn);

  const loggedInRouter = (
    <Router>
      <Navbar onLogout={() => Auth.logout()} />

      <div className="container mt-5">
        
        <Switch>
          <Route path="/announce" exact>
            <AnnouncementPage />
          </Route>

          <Route path="/announce/new" exact>
            <NewAnnouncementPage />
          </Route>

          <Route path="/announce/:id">
            <SingleAnnouncement />
          </Route>

          <Route path="/comments">
            <CommentPage />
          </Route>

          <Route path="/chat" exact>
            <ThreadPage />
          </Route>

          <Route path="/chat/:id">
            <ThreadPage />
          </Route>


          <Route path="/">
            <AppHomePage />
          </Route>

        </Switch>
      
      </div>
    </Router>
  );

  return loggedIn ? loggedInRouter : <LoginPage />;
}

export default App;
