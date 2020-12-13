import React, { useEffect, useState } from "react";
import Auth from "../../services/Auth";
import UserApi from "../../api/UserApi";

function QuizCreateForm({ setQuiz }) {
    const [ques, setQues] = useState("");
    const [opt1, setOpt1] = useState("");
    const [opt2, setOpt2] = useState("");
    const [opt3, setOpt3] = useState("");
    const [opt4, setOpt4] = useState("");
    const [ans, setAns] = useState("");
    const [subject, setSubject] = useState("");

    const [user, setUser] = useState({});
    const userMail = Auth.getUserMail();
  
    useEffect(() => {
      function getUserByMail() {
        UserApi.getUserByMail(userMail).then((res) => {
          setUser(res.data);
        });
      }
      userMail !== null && getUserByMail();
    }, [userMail]);
  
    const submitHandler = (event) => {
      event.preventDefault();
      setQuiz({
        q: ques,
        option1: opt1,
        option2: opt2,
        option3: opt3,
        option4: opt4,
        correctanswer: ans,
        subject: subject,
        user: user
      });
    };
    return (
      <div className="assignement-frm">
        <h2 style={{ color: "#006d77" }}>Quiz</h2>
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <br />
            <form
              id="assignment-form"
              style={{ width: "100%" }}
              onSubmit={submitHandler}
            >
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Quize Title</label>
                <input
                  type="text"
                  className="form-control"
                  required
                  id="formGroupExampleInput"
                  placeholder="Enter Subject.."
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Question
                </label>
                <textarea
                  type="text"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="2"
                  placeholder="Enter Question..."
                  onChange={(e) => setQues(e.target.value)}
                ></textarea>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Option 1
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="2"
                  placeholder="Enter option 1..."
                  onChange={(e) => setOpt1(e.target.value)}
                ></input>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Option 2
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="2"
                  placeholder="Enter option 2..."
                  onChange={(e) => setOpt2(e.target.value)}
                ></input>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Option 3
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="2"
                  placeholder="Enter option 3..."
                  onChange={(e) => setOpt3(e.target.value)}
                ></input>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Option 4
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="2"
                  placeholder="Enter option 4..."
                  onChange={(e) => setOpt4(e.target.value)}
                ></input>
              </div> <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Correct Answer
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="2"
                  placeholder="Enter correct answer..."
                  onChange={(e) => setAns(e.target.value)}
                ></input>
              </div>
              
  
              <button type="submit" className="btn-newPost">
                {" "}
                <i class="fas fa-share-square"></i> Submit Assignement
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

export default QuizCreateForm;
