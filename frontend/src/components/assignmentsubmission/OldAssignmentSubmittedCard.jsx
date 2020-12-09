import React from "react";
import { Link } from "react-router-dom";

export default function AssignmentSubmittedCard(assignmentSubmitted) {
  console.log(assignmentSubmitted);
  return (
    <div class="col-md-7 assignment-card">
      <section class="widget">
        <div className="card-title bg-secondary text-white m-0 p-1 ">
          {assignmentSubmitted.assignmentSubmitted.assignmentTitle + " ...    "}
          Submitted By:
          {assignmentSubmitted.assignmentSubmitted.user.name}
          <button className="btn-view">
                <Link className="btn btn-outline-info" 
                              to={{ pathname: `/assignmentSubmission/${assignmentSubmitted.assignmentSubmitted.id}`, state: { assignmentSubmitted } }}>
                                  View 
                </Link>
          </button> 
        </div>
        <div className="card-body">
            Submitted on: 
                {assignmentSubmitted.assignmentSubmitted.dateSubmitted}
                <br />
            Description: 
                {assignmentSubmitted.assignmentSubmitted.assignmentDescription} 
                <br /> 
            Status: 
                {assignmentSubmitted.assignmentSubmitted.status}
                <br /> 
            Comment by Teacher: 
                {assignmentSubmitted.assignmentSubmitted.comments}
                <br /> 
        </div>

        <div class="widget-body">
          <div class="widget-top-overflow text-white">
            {assignmentSubmitted.assignmentSubmitted.fileURL &&
              (assignmentSubmitted.assignmentSubmitted.fileURL.match(".jpg" || ".png") ? (
                <img
                  src={assignmentSubmitted.assignmentSubmitted.fileURL}
                  class="img-fluid"
                  alt="Responsive image"
                />
              ) : (
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe
                    class="embed-responsive-item"
                    src={assignmentSubmitted.assignmentSubmitted.fileURL}
                    allowfullscreen
                  ></iframe>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
