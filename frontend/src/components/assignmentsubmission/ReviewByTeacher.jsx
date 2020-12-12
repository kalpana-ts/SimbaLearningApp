import React, { useState } from "react";
import AssignmentSubmissionApi from "../../api/AssignmentSubmissionApi";
import Modal from 'react-bootstrap/Modal';

export default function ReviewByTeacher({ assignment, user }) {
  const [status, setStatus] = useState(assignment.status);
  const [comments, setComments] = useState(assignment.comments);
  console.log(assignment);

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
        
      }
    );
  };

  return (
    <div className="Review-form">
      <h4 style={{ color: "#B52B65" }}>Review by teacher</h4>
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
      <button className="btn btn-sm btn-review-submit" onClick={submitReview}>
        Submit
      </button>
    </div>
  );
}
