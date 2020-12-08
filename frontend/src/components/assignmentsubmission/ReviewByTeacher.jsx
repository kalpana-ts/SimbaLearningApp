import React, {useState} from 'react';
import AssignmentSubmissionApi from '../../api/AssignmentSubmissionApi';

export default function ReviewByTeacher({assignment,user}){
    const[status,setStatus] = useState(assignment.status);
    const[comments,setComments] = useState(assignment.comments);
    console.log(assignment);

    const handleChange = (e) => {
        setComments(e.target.value);
    };

    const submitReview = () => {
        if (comments === "") { return;}
        const updateAssignmentSubmission = { 
            id: assignment.id,
            assignmentTitle: assignment.assignmentTitle,
            assignmentDescription: assignment.assignmentDescription,
            fileURL: assignment.fileURL,
            grade: assignment.grade,
            subject: assignment.subject,
            dateSubmitted: assignment.dateSubmitted,
            status: status ,
            comments: comments ,
            reviewedBy: user.name,
            assignmentPost: assignment.assignmentPost,
            user: assignment.user
        };
       // console.log(updateAssignmentSubmission);
        AssignmentSubmissionApi.updateAssignment(updateAssignmentSubmission).then(() => {
            console.log('assignment');
        })
     }

    return(
        <div className="Review-form">
            <h1>Review by teacher</h1> 
            <h2>Title:{assignment.assignmentTitle}</h2>
            <div className="group radio-btn">
                <label for="status"> Status: </label>
                <input type="radio" id="accepted" name="status" value="Accepted" onChange={e => setStatus(e.target.value)}/>
                <label for="accepted">Accept </label>
                <input type="radio" id="RevertedBack" name="status" value="Reverted Back" onChange={e => setStatus(e.target.value)}/>
                <label for="RevertedBack">Revert Back </label>
            </div>
            <label for="comments"> Comments: </label>
            <textarea rows = "5" cols = "60" name = "comments" onChange={handleChange}>
            </textarea>
            <button className="btn btn-sm btn-secondary" onClick={submitReview}>Submit</button>
        </div>
   );
}