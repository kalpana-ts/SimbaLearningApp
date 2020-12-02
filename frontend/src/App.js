import React, {useState} from 'react';
import QuizTopics from "./components/evaluationModule/QuizTopics";
import QuizPage from "./components/evaluationModule/QuizPage";


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

                        <Route path="/chat">
                            <ChatPage/>
                        </Route>

                        <Route path="/Quiz Topics">
                            <QuizTopics/>
                        </Route>

                        <Route path="/Quiz">
                            <QuizPage/>
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
