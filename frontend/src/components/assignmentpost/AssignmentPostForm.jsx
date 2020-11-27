import React, { useState } from "react";

//user is still saving as null
//Image upload
//last date submission

function AssignmentPostForm({setAssignment}){
    
  const [assignmentTitle, setAssignmentTitle] = useState('');
  const [assignmentDescription, setAssignmentDescription] = useState('');
  //const [fileUrl, setFileUrl] = useState('');
  const [grade, setGrade] = useState('');
  const [subject, setSubject] = useState('');
  const [user, setUser] = useState(null);
  const submitHandler = event => {
    event.preventDefault();
    setAssignment({
        assignmentTitle: assignmentTitle,
        assignmentDescription: assignmentDescription,
        grade: grade,
        subject: subject,
        user: user
    });
  };
return (
    <form style={{ width: '100%' }} onSubmit={submitHandler}>
            <h1>Assignment Post</h1>
            <div className="form-group">
            <label htmlFor="formGroupExampleInput">Assignment Title</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Assignment Title"
              onChange={e => setAssignmentTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Assignment Description</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Assignment Decription..."
              onChange={e => setAssignmentDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Grade</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Grade..."
              onChange={e => setGrade(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Subject</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Subject..."
              onChange={e => setSubject(e.target.value)}
            />
            <button
            
            type="submit"
            className="btn-newPost">
              Submit
            </button>
          </div>
     </form>
    );
}

export default AssignmentPostForm;