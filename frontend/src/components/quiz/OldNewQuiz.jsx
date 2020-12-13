import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import QuizApi from "../../api/QuizApi";
import QuizCreateForm from "./QuizCreateForm";

function NewQuiz() {
  const [quiz, setQuiz] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const createNewQuiz = async () => {
      try {
        if (quiz !== null) {
          const response = await QuizApi.createQuiz(quiz); // We need to check response success before redirecting.
          history.push("/quizs");
        }
      } catch (error) {
        console.log(error);
      }
    };
    createNewQuiz();
  }, [history, quiz]);

  return (
    <div>
      <QuizCreateForm setQuiz={setQuiz} />
    </div>
  );
}

export default NewQuiz;

/* import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import QuizApi from '../../api/QuizApi';
import QuizCreateForm from './QuizCreateForm';

function NewQuiz() {
  const [quiz, setQuiz] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const createQuiz = async () => {
      try {
        if (quiz!== null) {
          const response = await QuizApi.createQuiz(quiz); // We need to check response success before redirecting.
          history.push('/quizs');
        }
      } catch (error) {
        console.log(error);
      }
    };
    createQuiz();
  }, [history, quiz]);

  return <QuizCreateForm setQuiz={setQuiz} />;
}

export default NewQuiz; */
