import React, { useEffect, useState } from "react";
import Auth from "../../services/Auth";
import UserApi from "../../api/UserApi";
// import { FaRegUserCircle } from "react-icons/fa";

function QuizCreateForm({ setQuiz }) {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");
  const [subject, setSubject] = useState("");
  const userMail = Auth.getUserMail();
  const [user, setUser] = useState({});

  // Store user informations when logged: can access user mail, name, Id
  useEffect(() => {
    function getUserByMail() {
      UserApi.getUserByMail(userMail).then((res) => {
        setUser(res.data);
      });
    }
    userMail !== null && getUserByMail();
  }, [userMail]);

  const onCreatClick = (event) => {
    event.preventDefault();
    setQuiz({
      Q: question,
      option1: option1,
      option2: option2,
      option3: option3,
      option4: option4,
      correctanswer: answer,
      subject: subject,
      user: user
    });
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">
          {/* <FaRegUserCircle /> */}
          {user.name}
        </h4>
        <div>
          <div className="form-group">
            <textarea
              type="text"
              className="form-control"
              placeholder="What is your title"
              onChange={(e) => setSubject(e.target.value)}
            />

            <input
              type="text"
              className="form-control"
              placeholder="Type the question"
              onChange={(e) => setQuestion(e.target.value)}
            />

            <textarea
              type="text"
              className="form-control"
              placeholder="What is your option1"
              onChange={(e) => setOption1(e.target.value)}
            />

            <textarea
              type="text"
              className="form-control"
              placeholder="What is your option2"
              onChange={(e) => setOption2(e.target.value)}
            />

            <textarea
              type="text"
              className="form-control"
              placeholder="What is your option3"
              onChange={(e) => setOption3(e.target.value)}
            />

            <textarea
              type="text"
              className="form-control"
              placeholder="What is your option4"
              onChange={(e) => setOption4(e.target.value)}
            />

            <textarea
              type="text"
              className="form-control"
              placeholder="What is your answer"
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-info" onClick={onCreatClick}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizCreateForm;
