import React, {useState, useEffect} from "react";


import Api from "../../api/Api";

import QuizCard from "./QuizCard";
import QuizCreateForm from "./QuizCreateForm";


function QuizPage() {

    const [quizs, setQuizes] = useState([]);
    const [userData, setUserData] = useState([]);
    const [email, setEmail] = useState("")

    const getAll = () => {
        Api.get("/quizs")
            .then((response) => setQuizes(response.data));
    };
    

    const createQuiz = (quizData) => {
           return  Api.post("/quizs/new", quizData)
            .then((response) => {setQuizes([...quizs, response.data])});

    }

    useEffect (() => {
        Api.get("/user/me")
            .then(response => {
                const userData = response.data
                setUserData(userData)
            
            });
    },[]);

    useEffect (() => {
        Api.get("/user/")
            .then(response => {
                const email = response.data
                setEmail(email);
            });
    }, []);

//     const deleteAnnounce = id => {
//         Api.delete('/announce/' + id)
//             .then(response => getAll());
// };

    const deleteQuiz = (quiz) => {
        console.log(quiz);
        console.log(email);
        console.log(quiz.email);
       
        if ( quiz.email === email) {
            
            Api.delete("/quizs/" + quiz.id)
                .then(r => getAll());

        }else{
            alert("you can't delete the quiz");
        }
    
    }
            
        
    
    


    const updatedQuiz= (updatedQuiz) => {
        Api.put("/quizs/", updatedQuiz)
            .then(response => getAll());
    };

    useEffect(() => {
        getAll();
    },[]);

    
    return (
       
        <div className="card">
            

            <QuizCreateForm userData={userData}  onCreateQuizClick={createQuiz} />

            

            {
                quizs.map(quiz => (<QuizCard
                    key={quiz.id}
                    announce={quiz}
                    
                    onUpdateClick={updatedQuiz}
                    onDeleteClick={deleteQuiz}
                     />))
            }           
            
        </div>
    );
}

export default QuizPage;