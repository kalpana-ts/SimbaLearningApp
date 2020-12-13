import React, { useState } from "react";

function QuizUpdate({ oldQuiz, onUpdateClick }) {
  const [question, setQuestion] = useState(oldQuiz.question);
  const [option1, setOption1] = useState(oldQuiz.option1);
  const [option2, setOption2] = useState(oldQuiz.option2);
  const [option3, setOption3] = useState(oldQuiz.option3);
  const [answer, setAnswer] = useState(oldQuiz.answer);
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Update Quiz</h4>
        <div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="QUESTION?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />

            <textarea
              type="text"
              className="form-control"
              placeholder="Whats is your option1"
              value={option1}
              onChange={(e) => setOption1(e.target.value)}
            />

            <textarea
              type="text"
              className="form-control"
              placeholder="Whats is your option2"
              value={option2}
              onChange={(e) => setOption2(e.target.value)}
            />

            <textarea
              type="text"
              className="form-control"
              placeholder="Whats is your option3"
              value={option3}
              onChange={(e) => setOption3(e.target.value)}
            />

            <textarea
              type="text"
              className="form-control"
              placeholder="Whats is your announce"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button
              className="btn btn-primary"
              onClick={() =>
                onUpdateClick({ ...oldQuiz, option1, option2, option3, answer })
              }
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizUpdate;
