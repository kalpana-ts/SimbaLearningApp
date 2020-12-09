
import React, { useState } from 'react'
// import { FaRegUserCircle } from "react-icons/fa";


function QuizCreateForm({ onCreateQuizClick, userData }) {

    const [question, setQuestion] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [answer, setAnswer] = useState("");
    const[title,setTitle]=useState("");

    

    const onCreatClick= () => {
        const quizData = {question, option1,option2,option3,answer, title};
        onCreateQuizClick(quizData)
            .then(() => {
                setQuestion("");
                setOption1("");
                setOption2("");
                setOption3("");
                setAnswer("");
                setTitle("");
            })
    }

   

    return (
        
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title" >
                    
                    {/* <FaRegUserCircle /> */}
                    {userData.name}
                    
                    </h4>
                    <div>
                        <div className="form-group">
                            
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Type the question"
                            value={question}
                            onChange={e => setQuestion(e.target.value)} />

                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="What is your option1"
                            value={option1}
                            onChange={e => setOption1(e.target.value)} />
                       

                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="What is your option2"
                            value={option2}
                            onChange={e => setOption2(e.target.value)} />
                       


                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="What is your option3"
                            value={option3}
                            onChange={e => setOption3(e.target.value)} />

                         <textarea
                            type="text"
                            className="form-control"
                            placeholder="What is your answer"
                            value={answer}
                            onChange={e => setAnswer(e.target.value)} />

                            <textarea
                            type="text"
                            className="form-control"
                            placeholder="What is your title"
                            value={title}
                            onChange={e => setTitle(e.target.value)} />


                        </div>

                        <div className="form-group">
                            <button
                                className="btn btn-info"
                            onClick={onCreatClick}>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
    
}

export default QuizCreateForm