import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import QuizApi from '../../api/QuizApi';
import QuizCreateForm from './QuizCreateForm';

function NewQuiz() {
  const [Quiz, setQuiz] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const createQuiz = async () => {
      try {
        if (Quiz!== null) {
          const response = await QuizApi.createQuiz(Quiz); // We need to check response success before redirecting.
          history.push('/quizs');
        }
      } catch (error) {
        console.log(error);
      }
    };
    createQuiz();
  }, [history, Quiz]);

  return <QuizCreateForm setPost={setQuiz} />;
}

export default NewQuiz;