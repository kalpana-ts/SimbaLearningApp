import React from "react";

function AssignmentCard(assignment) {
  return (
    <>
      <p>
        <button
          class="btn question-tab"
          type="button"
          data-toggle="collapse"
          data-target={".multi-collapse" + assignment.assignment.id}
          aria-expanded="false"
          aria-controls={"#multiCollapseExample" + assignment.assignment.id}
        >
          {assignment.assignment.assignmentTitle}
        </button>
      </p>
      <div class="row">
        <div class="col">
          <div
            class="collapse multi-collapse"
            className={"collapse multi-collapse" + assignment.assignment.id}
            id={"#multiCollapseExample" + assignment.assignment.id}
          >
            <div class="card card-body">
              {assignment.assignment.fileUrl.match(
                ".gif" || ".jpg" || ".png" || ".jpeg"
              ) ? (
                <img
                  src={assignment.assignment.fileUrl}
                  class="img-fluid assignment-view-img"
                  alt="Responsive image"
                />
              ) : (
                <div class="embed-responsive embed-responsive-16by9 assignment-view-frm">
                  <iframe
                    class="embed-responsive-item"
                    src={assignment.assignment.fileUrl}
                    allowfullscreen
                  ></iframe>
                </div>
              )}
              <br />
              <p>{assignment.assignment.assignmentDescription}</p>
              <h4>Submission Date: {assignment.assignment.submissionDate}</h4>
              <button type="submit" className="btn-submit-assignment">
                <i class="fas fa-share-square"></i> Submit Your Answer
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample2"></div>
        </div>
      </div>

    </>


    /*     <div class="col-md-7 assignment-card">
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
      <div className="card-body">
              Description: 
              {assignment.assignment.assignmentDescription} <br />
              Grade:
              {assignment.assignment.grade}
              <br />
              Subject: 
              {assignment.assignment.subject}
              <br />
              Last Date to Submit:
              {assignment.assignment.submissionDate}
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
            
          </div>
        </section>
      </div> */
  );
}

export default AssignmentCard;
