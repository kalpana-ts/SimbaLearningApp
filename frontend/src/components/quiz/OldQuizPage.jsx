import React, { useEffect, useState } from "react";
import QuizApi from "../../api/QuizApi";
import QuizCard from "./QuizCard";

function QuizPage() {
  const [quiz, setQuiz] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await QuizApi.getAllQuizs();
      setQuiz(response.data);
    };
    fetchPosts();
  }, []);

  const quizList = quiz.map((quiz) => <QuizCard key={quiz.id} quiz={quiz} />);

  const subjectName = quiz.map((qu) => qu.subject);

  return quiz === [] ? (
    "Loading...."
  ) : (
    <div>
      <h3>{subjectName[0]}</h3>
      
        {quizList}
      
    </div>
  );
}

export default QuizPage;
