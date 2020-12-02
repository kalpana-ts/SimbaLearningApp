import React, { useState,useEffect } from "react";
import Auth from '../../services/Auth';
import UserApi from '../../api/UserApi';
import FileUploader from '../assignmentpost/FileUploader';


//File upload
//last date submission

function AssignmentPostForm({setAssignment}){
    
  const [assignmentTitle, setAssignmentTitle] = useState('');
  const [assignmentDescription, setAssignmentDescription] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [grade, setGrade] = useState('');
  const [subject, setSubject] = useState('');
  const [uploading, setUploading] = useState(true);

  const [user, setUser] = useState({});
  const userMail = Auth.getUserMail();

    // Store user informations when logged: can acces user mail, name, Id
    useEffect(() => {
        function getUserByMail() {
            UserApi.getUserByMail(userMail)
                .then((res) => {
                    setUser(res.data)
                })
        }
        userMail !== null && getUserByMail();
    }, [userMail])

  const submitHandler = event => {
    event.preventDefault();
    setAssignment({
        assignmentTitle: assignmentTitle,
        assignmentDescription: assignmentDescription,
        grade: grade,
        subject: subject,
        user: user,
        fileUrl: fileUrl
    });
  };
return (
    <form style={{ width: '100%' }} onSubmit={submitHandler}>
      <h1>Assignment Post</h1>
        <div className="row">
          <div className="col-md-6 col-sm-6">
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
          </div>
          <button
            disabled={uploading ? true : false}
            type="submit"
            className="btn-newPost">
            {uploading ? '- - - - -' : 'Submit'}
          </button>
        </div>
          <div className="col-md-6 col-sm-6">
              <FileUploader setUploading={setUploading} setFileUrl={setFileUrl}/>
          </div>
        </div>
     </form>
    );
}

export default AssignmentPostForm;