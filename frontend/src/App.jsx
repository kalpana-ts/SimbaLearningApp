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
import CommentPage from './components/newComment/CommentsPage';
import ThreadPage from './components/chat/ThreadPage';
import AssignmentList from './components/assignmentpost/AssignmentList';
import NewAssignment from './components/assignmentpost/NewAssignment';
import AssignmentCard from './components/assignmentpost/AssignmentCard';


function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());

  Auth.bindLoggedInStateSetter(setLoggedIn);

  const loggedInRouter = (
    <Router>
      <Navbar onLogout={() => Auth.logout()} />

      <div className="container mt-5">
        
        <Switch>
          <Route exact path="/assignmentPost">
           <AssignmentList/>
          </Route>

          <Route exact path="/assignmentPost/new">
            <NewAssignment/>
          </Route>

          <Route exact path="/assignmentPost/:id">
            <AssignmentCard/>
          </Route>

          <Route exact path="/announce" exact>
            <AnnouncementPage />
          </Route>

          <Route  path="/announce/new" exact>
            <NewAnnouncementPage />
          </Route>

          <Route exact path="/announce/:id">
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
