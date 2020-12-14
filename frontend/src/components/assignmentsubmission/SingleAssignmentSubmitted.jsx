import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Auth from "../../services/Auth";
import UserApi from "../../api/UserApi";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReviewByTeacher from "../assignmentsubmission/ReviewByTeacher";
import AssignmentSubmissionApi from "../../api/AssignmentSubmissionApi";

export default function SingleAssignmentSubmitted() {
  const userMail = Auth.getUserMail();
  const [user, setUser] = useState({});
  const { state } = useLocation();
  const passedAssignment =
    state === undefined ? null : state.assignmentSubmitted;
  const [assignment, setAssignment] = useState(
    passedAssignment.assignmentSubmitted
  );

  const studentView = user.userType === "student";
  const teacherView = user.userType === "teacher";
  const url = assignment.fileURL;

  useEffect(() => {
    function getUserByMail() {
      UserApi.getUserByMail(userMail).then((res) => {
        setUser(res.data);
      });
    }
    userMail !== null && getUserByMail();
  }, [userMail]);

  const [status, setStatus] = useState(assignment.status);
  const [comments, setComments] = useState(assignment.comments);

  const handleChange = (e) => {
    setComments(e.target.value);
  };

  const submitReview = () => {
    if (comments === "") {
      return;
    }
    const updateAssignmentSubmission = {
      id: assignment.id,
      assignmentTitle: assignment.assignmentTitle,
      assignmentDescription: assignment.assignmentDescription,
      fileURL: assignment.fileURL,
      grade: assignment.grade,
      subject: assignment.subject,
      dateSubmitted: assignment.dateSubmitted,
      status: status,
      comments: comments,
      reviewedBy: user.name,
      assignmentPost: assignment.assignmentPost,
      user: assignment.user,
    };
    // console.log(updateAssignmentSubmission);
    AssignmentSubmissionApi.updateAssignment(updateAssignmentSubmission).then(
      () => {
        console.log("assignment");
        setShow(false);
      }
    );
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="single-assignment-submitted-frm">
      <p>
        <button
          class="btn student-info-tab"
          type="button"
          aria-controls="multiCollapseExample1 multiCollapseExample2"
        >
          {assignment.user.name}
        </button>
      </p>
      <div class="row">
        <div class="col">
          <div className="card-body">
            <h4>{assignment.assignmentTitle}</h4>
            <span className="review-page-span">Submitted on :</span> &nbsp;{" "}
            {assignment.dateSubmitted}
            <br />
            <span className="review-page-span">Answer:</span> &nbsp;{" "}
            {assignment.assignmentDescription}
            <br />
            <span className="review-page-span">Status :</span> &nbsp;{" "}
            {assignment.status}
            <br />
            <span className="review-page-span">
              Comment by Teacher:
            </span> &nbsp; {assignment.comments}
            <br />
          </div>
          {teacherView && (
            <div>
              <div>
                <button
                  type="button"
                  className="btn btn-review"
                  data-toggle="modal"
                  data-target={`#ReviewByTeacher${assignment.id}`}
                  onClick={handleShow}
                >
                  Review
                </button>
              </div>
              <Modal
                className="Model-top-position"
                show={show}
                onHide={handleClose}
              >
                <Modal.Header closeButton>
                  <Modal.Title>
                    <span
                      style={{
                        color: "#B52B65",
                        fontWeight: "800",
                        fontSize: "16px",
                      }}
                    >
                      {assignment.user.name}
                    </span>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    <span style={{ fontWeight: "800" }}>Title:</span> &nbsp;{" "}
                    {assignment.assignmentTitle}
                  </p>

                  <div className="group radio-btn review-frm-radio-btn">
                    <label for="status"> Status: </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                      type="radio"
                      id="accepted"
                      name="status"
                      value="Accepted"
                      onChange={(e) => setStatus(e.target.value)}
                    />
                    &nbsp;&nbsp;
                    <label for="accepted">Accept </label>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                      type="radio"
                      id="RevertedBack"
                      name="status"
                      value="Reverted Back"
                      onChange={(e) => setStatus(e.target.value)}
                    />
                    &nbsp;&nbsp;
                    <label for="RevertedBack">Revert Back </label>
                  </div>

                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Comments :</label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button className="btn-review-submit" onClick={submitReview}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>

              {/* <div
                  className="modal fade"
                  id={`ReviewByTeacher${assignment.id}`}
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLongTitle"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <div style={{color:'#0b4f6c', fontWeight: '800', fontSize: '16px'}} className="modal-title m-0 p-1 font-weight-bold">
                        {assignment.user.name}
                        </div>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <ReviewByTeacher
                          key={assignment.id}
                          assignment={assignment}
                          user={user}
                        />
                      </div>
                    </div>
                  </div> */}
            </div>
          )}

          <div class="widget-body">
            <div class="widget-top-overflow text-white">
              {url && ((url.match(".gif") ||
              url.match(".jpg") ||
              url.match(".png") ||
              url.match(".jpeg") ? (
                <img
                  src={assignment.fileURL}
                  class="img-fluid"
                  alt="Responsive image"
                  className="assignment-view-img"
                />
              ) : (
                <div class="embed-responsive embed-responsive-16by9 single-assignment-submit-ifram">
                  <iframe
                    class="embed-responsive-item"
                    src={assignment.fileURL}
                    allowfullscreen
                  ></iframe>
                </div>
              )))}
            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>

    /* <div className="single-assignment-submitted-frm">
      <div class="col-md-7">
        <section class="widget">
          <div className="card-title bg-secondary text-white m-0 p-1 ">
            <h3>{assignment.user.name}</h3>
          </div>
          <div className="card-body">
              <h3>{assignment.assignmentTitle}</h3>
            Submitted on : {assignment.dateSubmitted}
            <br />
            Description: {assignment.assignmentDescription}
            <br />
            Status : {assignment.status}
            <br />
            Comment by Teacher: {assignment.comments}
            <br />
          </div>
          {teacherView && (
            <div>
              <div>
                <button
                  type="button"
                  className="btn btn-light"
                  data-toggle="modal"
                  data-target={`#ReviewByTeacher${assignment.id}`}
                >
                  Review
                </button>
              </div>
              <div
                className="modal fade"
                id={`ReviewByTeacher${assignment.id}`}
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLongTitle"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <div className="modal-title m-0 p-1 font-weight-bold">
                        {assignment.assignmentTitle}
                      </div>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <ReviewByTeacher
                        key={assignment.id}
                        assignment={assignment}
                        user={user}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div class="widget-body">
            <div class="widget-top-overflow text-white">
              {assignment.fileURL.match(".jpg" || ".png") ? (
                <img
                  src={assignment.fileURL}
                  class="img-fluid"
                  alt="Responsive image"
                />
              ) : (
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe
                    class="embed-responsive-item"
                    src={assignment.fileURL}
                    allowfullscreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div> */
  );
}
