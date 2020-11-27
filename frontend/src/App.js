import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// Import custom styles for our application
import './App.css';

import Auth from './services/Auth';
import Navbar from "./components/layout/Navbar";

// Import pages
import LoginPage from "./components/auth/LoginPage";
import HomePage from './components/home/HomePage';
//import PostsPage from "./components/posts/PostsPage";
import AnnouncePage from "./components/announcement/AnnouncePage";
import NewAnnouncePage from "./components/announcement/NewAnnounce";
import SingleAnnounce from "./components/announcement/SingleAnnounce";
//import CommentsPage from "./components/Comment/CommentsPage";
import ChatPage from './components/chat/ChatPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  Auth.bindLoggedInStateSetter(setLoggedIn);
  
  const loggedInRouter = (
            <Router>
                <Navbar onLogout={() => Auth.logout()} />

                <div className="container mt-5">
                    <Switch>
                        <Route path="/announce">
                            <AnnouncePage/>
                        </Route>
                        <Route path="/announce/new">
                            <NewAnnouncePage/>
                        </Route>
                        <Route path="/announce/:id">
                            <SingleAnnounce/>
                        </Route>

                        <Route path="/chat">
                            <ChatPage/>
                        </Route>

                        <Route path="/">
                          <HomePage/>
                        </Route>
                    </Switch>
                </div>
            </Router>
  );

  return (loggedIn ? loggedInRouter : <LoginPage/>);
}

export default App;
