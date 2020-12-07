import React, { useState,useEffect } from "react";
import { format } from 'date-fns';
import Auth from '../../services/Auth';
import UserApi from '../../api/UserApi';
import DatePicker from "../calendar/DatePicker";
import FileUploader from '../announcementNew/FileUploader';

//last date submission

function AssignmentPostForm({setAssignment}){
    
  const [assignmentTitle, setAssignmentTitle] = useState('');
  const [assignmentDescription, setAssignmentDescription] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [grade, setGrade] = useState('1');
  const [subject, setSubject] = useState('Math');
  //const [uploading, setUploading] = useState(true);

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
    document.getElementById("assignment-form").reset();
  };
return (
  <div>

    <form id="assignment-form" style={{ width: '100%' }} onSubmit={submitHandler}>
      <h1>Assignment Post</h1>
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Assignment Title</label>
              <input
              type="text"
            
              className="form-control"
              required
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
            <div class='form-group '>
            <label for='inputType'>Grade</label>
            <select required
              id='grade'
              className='form-control'
              
              onChange={e => setGrade(e.target.value)}>
              <option value='1'>Grade 1</option>
              <option value='2'>Grade 2</option>
              <option value='3'>Grade 3</option>
              <option value='4'>Grade 4</option>
             
            </select>
          </div>
          <div class='form-group '>
            <label for='inputType'>Subject</label>
            <select required
              id='subject'
              className='form-control'
              
              onChange={e => setSubject(e.target.value)}>
              <option value='Math'>Math</option>
              <option value='English'>English</option>
              <option value='Science'>Science</option>
              <option value='GK'>General Knowledge</option>
              
            </select>
            
          </div>
          <div class='form-group '>
          <label for='inputType'>Last Submission Date</label>
        
              
            
              <DatePicker />
              
            
          </div>
            
          <button type="submit" className="btn-newPost"> Submit </button>
        </div>
        </div>
        </form>
        
        <div className="col-md-6 col-sm-6">
            <FileUploader setFileUrl={setFileUrl} />
        </div>
    
     </div>
    );
}

export default AssignmentPostForm;