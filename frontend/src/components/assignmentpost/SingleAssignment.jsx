import React, { Component, useState } from 'react';
//import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ErrorScreen from '../tempscreens/ErrorScreen';
import ChatApi from '../../api/ChatApi';
import Api from '../../api/Api';
import Auth from '../../services/Auth';

//delete for user
//Assingmentsubmission linked to this post

function SingleAssignment() {
  const currentUserEmail = window.sessionStorage.getItem('userEmail');
  const { state } = useLocation();
  const passedAssignment = state === undefined ? null : state.assignment;
  //console.log("PassedAssignment:",passedAssignment.assignment);
  const [assignment, setAssignment] = useState(passedAssignment.assignment);
 // console.log("set Assignment:",assignment);
  //const history = useHistory();
  const isOwner = currentUserEmail === assignment.user.email;
  const User_Email_ID = assignment.user.email;
  const User_Name = assignment.user.name;

  
  try {
    return (
        
      <div class="row d-flex align-items-center justify-content-center">
        <div class="col-md-7 assignment-post">
            <div class="single-assignment-card">
            <div className="card-title bg-secondary text-white m-0 p-1 ">
        {assignment.assignmentTitle + " ... "}
        Posted By: 
        {assignment.user.name}    
        </div>
        <div className="card-body">
              Description: 
              {assignment.assignmentDescription} <br />
              Grade:
              {assignment.grade}
              <br />
              Subject: 
              {assignment.subject}
              <br />
              Last Date to Submit:
              {assignment.submissionDate}

            </div>
            <div class="widget-body">
            <div class="widget-top-overflow text-white">
            {assignment.fileUrl && (assignment.fileUrl.match('.jpg' || '.png') ?
                        <img src={assignment.fileUrl} class="img-fluid" alt="Responsive image"/> : 
                        <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src={assignment.fileUrl} allowfullscreen></iframe>
                        </div>)
                        }
            </div>
            
          </div>
                      
    
                   

                    <hr/>
                    
                    <div class="assignments-submitted">
                        
                        <h1>Assignments submitted</h1>
                        
                    </div>
                </div>
            </div>
        </div>
        
    );
  } catch (e) {
    console.log(e);
    return <ErrorScreen />;
  }
}
export default SingleAssignment;
