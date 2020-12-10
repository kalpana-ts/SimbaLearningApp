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
import AssignmentPostPage from './components/assignmentpost/AssignmentPostPage';
import NewAssignment from './components/assignmentpost/NewAssignment';
import SingleAssignment from './components/assignmentpost/SingleAssignment';
import QuizPage from './components/quiz/QuizPage';
import NewQuiz from './components/quiz/NewQuiz';
import GradeAssignmentPage from './components/home/GradeAssignmentPage';
import AssignmentList from './components/assignmentpost/AssignmentList';
import ChatNewPage from './components/chatNew/ChatPage';
import AssignmentSubmissionForm from './components/assignmentsubmission/AssignmentSubmissionForm';
import SingleAssignmentSubmitted from './components/assignmentsubmission/SingleAssignmentSubmitted';
import Scheduler from "./components/calendar/Scheduler";

function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());

  Auth.bindLoggedInStateSetter(setLoggedIn);

  const loggedInRouter = (
    <Router>
      <Navbar onLogout={() => Auth.logout()} />

      <div className="container mt-5">

        <Switch>
          <Route exact path="/assignmentPost">
            <AssignmentPostPage />
          </Route>

          <Route exact path="/assignmentPost/new">
            <NewAssignment />
          </Route>

          <Route exact path="/assignmentPost/:id">
            <SingleAssignment />
          </Route>

          <Route exact path="/assignmentPost/grade/:grade">
            <GradeAssignmentPage />
          </Route>

          <Route exact path="/assignmentPost/grade/subject/:subject">
            <AssignmentList />
          </Route>

          <Route exact path="/assignmentSubmission/new/:id">
            <AssignmentSubmissionForm />
          </Route>

          <Route exact path="/assignmentSubmission/:id">
            <SingleAssignmentSubmitted />
          </Route>

          <Route exact path="/announce" >
            <AnnouncementPage />
          </Route>


          <Route exact path="/Quizs">
            <QuizPage />
          </Route>

          <Route exact path="/Quizs/new">
            <NewQuiz />
          </Route>

          <Route exact path="/calendar">
            <Scheduler />
          </Route>


          <Route path="/announce/new" exact>
            <NewAnnouncementPage />
          </Route>

          <Route exact path="/announce/:id">
            <SingleAnnouncement />
          </Route>

          <Route path="/comments">
            <CommentPage />
          </Route>

          <Route path="/messages" exact>
            <ChatNewPage />
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
