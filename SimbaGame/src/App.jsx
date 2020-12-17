import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import custom styles for our application
import "./css/App.css";
import Auth from "./services/Auth";

// Import pages
import LoginPage from "./components/auth/LoginPage"
import StartPage from "./components/NewQuiz/StartPage";
import QuizTopicPage from "./components/NewQuiz/QuizTopicPage";
import QuizDisplayPage from "./components/NewQuiz/QuizDisplayPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());

  Auth.bindLoggedInStateSetter(setLoggedIn);

  const loggedInRouter = (
    <Router>
        <Switch>
          
          <Route exact path="/topic" >
            <QuizTopicPage />
          </Route>

          <Route exact path="/">
            <StartPage />
          </Route>
          
          <Route exact path="/quiz/:topic" onLogout={() => Auth.logout()}>
            <QuizDisplayPage />
          </Route>

        </Switch>
    </Router>
  );

  return loggedInRouter;
}

export default App;
