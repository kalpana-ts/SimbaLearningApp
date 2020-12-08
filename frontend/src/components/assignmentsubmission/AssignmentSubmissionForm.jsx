import React, { useEffect, useState } from 'react';
import { useHistory,useLocation } from 'react-router-dom';
import AssignmentSubmissionApi from '../../api/AssignmentSubmissionApi';
import FileUploader from '../announcementNew/FileUploader';
import { format } from 'date-fns';


export default function AssignmentSubmissionForm(){
   
    const { state } = useLocation();
    const history = useHistory();
    const currentUser = state === undefined ? null : state.user;
    const [user, setUser] = useState(currentUser);
    const passedAssignment = state === undefined ? null : state.assignment;
    const [assignment, setAssignment] = useState(passedAssignment);
   // console.log("YEs",assignment);
    const [assignmentTitle, setAssignmentTitle] = useState(assignment.assignmentTitle);
    const [assignmentDescription, setAssignmentDescription] = useState('');
    const [fileUrl, setFileUrl] = useState('');
    const [grade, setGrade] = useState(assignment.grade);
    const [subject, setSubject] = useState(assignment.subject);
   // const emptySubmission = false;

    function submitAssignment(){
        // if (assignmentDescription === "" && fileUrl === "") { 
        //     emptySubmission=true;
        //     return;
        // }
        const newAssignment = {
            assignmentTitle : assignmentTitle,
            assignmentDescription : assignmentDescription,
            fileURL : fileUrl,
            grade : grade,
            subject : subject,
            dateSubmitted : format(new Date(), 'dd-MMM-yyyy'),
            status : "Waiting for Teacher's Review",
            comments : "No comments Yet",
            assignmentPost : assignment,
            user : user
        }
        AssignmentSubmissionApi.createAssignment(newAssignment);
        history.push('/');
    }

    return(
        <div>
            <h4>Submit Your Answer</h4>
            <h4>Title:{assignment.assignmentTitle}</h4>
            <div className="row">
                <div className="col-md-6 col-sm-6">
                <FileUploader setFileUrl={setFileUrl} />
                <br/>
                </div>
                <form id="assignment-form" style={{ width: '100%' }} >
              <label htmlFor="formGroupExampleInput">Description</label>
              <input
                type="text"
                className="form-control"
                
                id="formGroupExampleInput"
                placeholder="Enter your Answer here...."
                onChange={e => setAssignmentDescription(e.target.value)}
              />
              <button className="btn btn-primary  " onClick={submitAssignment}>Submit</button>
                </form>
                {/* {emptySubmission && <h2>Please submit a valid answer</h2>} */}
            </div>

        </div>

    );
}

