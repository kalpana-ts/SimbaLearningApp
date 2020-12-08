import React, {useState} from 'react';

export default function ReviewByTeacher(assignment,user){
    const[status,setStatus] = useState(assignment.status);
    const[comments,setComments] = useState(assignment.comments);
    
    return(
        <div className="Review-form">
            <h1>Review by teacher</h1> 
            <div className="group radio-btn">
                <label for="status"> Status: </label>
                <input type="radio" id="accepted" name="status" value="Accepted" onChange={e => setStatus(e.target.value)}/>
                <label for="accepted">Accept </label>
                <input type="radio" id="RevertedBack" name="status" value="Reverted Back" onChange={e => setStatus(e.target.value)}/>
                <label for="RevertedBack">Revert Back </label>
            </div>
            <label for="comments"> Comments: </label>
            <textarea rows = "5" cols = "60" name = "comments" onChange={e => setComments(e.target.value)}>
              
            </textarea>
        </div>
   );
}