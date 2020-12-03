import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';


function AssignmentCard(assignment) {
  
console.log(assignment.assignment);

  return (
    
    
    <div class="col-md-7 assignment-card">
      <section class="widget">
      <div className="card-title bg-secondary text-white m-0 p-1 ">
        {assignment.assignment.assignmentTitle + " ... "}
        Posted By: 
        {assignment.assignment.user.name}                    
            <button className="btn-view">
                  <Link className="btn btn-outline-info" 
                                to={{ pathname: `/assignmentPost/${assignment.assignment.id}`, state: { assignment } }}>
                                    View 
                  </Link>
            </button>                
      </div>
        <div class="widget-body">
            <div class="widget-top-overflow text-white">
            {assignment.assignment.fileUrl && (assignment.assignment.fileUrl.match('.jpg' || '.png') ?
                        <img src={assignment.assignment.fileUrl} class="img-fluid" alt="Responsive image"/> : 
                        <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src={assignment.assignment.fileUrl} allowfullscreen></iframe>
                        </div>)
                        }
            </div>
            <div className="card-body">
              Description: 
              {assignment.assignment.assignmentDescription} <br />
              Grade:
              {assignment.assignment.grade}
              <br />
              Subject: 
              {assignment.assignment.subject}
              <br />
            </div>
          </div>
        </section>
      </div>
  );
}

export default AssignmentCard;
