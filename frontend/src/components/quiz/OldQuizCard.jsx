import React ,{useState} from 'react'

function OldQuizCard({quiz}) {
  const [option, setOption] = useState("");
  
  return (
      <div className="row">
      <br/>
        <div class="card quiz-card shadow p-3 mb-5 bg-white rounded">
          <div className="card-header">
            {quiz.id + ". "} {quiz.q}
          </div>

          <div class="card-body">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name={'opt'+ quiz.id}
                id={'opt'+ quiz.id}
                value="option 1"
                onChange={(e) => setOption(e.target.value)}
                checked
              />
              <label class="form-check-label" for={'opt'+ quiz.id}>
                {quiz.option1}
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name={'opt'+ quiz.id}
                id={'opt'+ quiz.id}
                value="option 2"
                onChange={(e) => setOption(e.target.value)}
              />
              <label class="form-check-label" for={'opt'+ quiz.id}>
                {quiz.option2}
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name={'opt'+ quiz.id}
                id={'opt'+ quiz.id}
                value="option 3"
                onChange={(e) => setOption(e.target.value)}
              />
              <label class="form-check-label" for={'opt'+ quiz.id}>
                {quiz.option3}
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name={'opt'+ quiz.id}
                id={'opt'+ quiz.id}
                value="option 4"
                onChange={(e) => setOption(e.target.value)}
              />
              <label class="form-check-label" for={'opt'+ quiz.id}>
                {quiz.option4}
              </label>
            </div>
          </div>
        </div>
    </div>
    );
}

export default OldQuizCard
