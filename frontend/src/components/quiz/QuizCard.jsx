import React ,{useState} from 'react'
import QuizUpdate from './QuizUpdate';
// import { FaRegUserCircle } from "react-icons/fa";
// import { RiDeleteBin5Line } from "react-icons/ri";


function QuizCard({quiz, onUpdateClick, onDeleteClick}) {

    const [isUpdating, setIsUpdating] = useState(false);
    
    const handleUpdateClick = () => {
        setIsUpdating(true);
    };

    return isUpdating ?
        <QuizUpdate oldQuiz={quiz} onUpdateClick={(updatedQuiz) => { setIsUpdating(false); onUpdateClick(updatedQuiz); }} />
        :
        <div className="card">
            <div className="card-body">
                <div>
                    {/* <FaRegUserCircle /> */}
                    {quiz.user.name}

                </div>
                <div className="card-title">
                    
                    {quiz.question}
                </div>
                
                <div>
                    {quiz.option1}
                </div>

                <div>
                    {quiz.option2}
                </div>

                <div>
                    {quiz.option3}
                </div>

                <div>
                    {quiz.title}
                </div>

                
                <div className="form-group">
                    
                    <button

                        className="btn-update" onClick={handleUpdateClick}>              
                        Update
                    </button>
                    
                    <button
                        className="btn-delete" onClick={() => onDeleteClick(quiz.id)}>
                        Delete
                    </button>
                   
                
                    
                </div>
        </div>
    </div>
    
}

export default QuizCard
