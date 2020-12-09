import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AssignmentSubmissionApi from "../../api/AssignmentSubmissionApi";
import AssignmentSubmittedCard from "../assignmentsubmission/AssignmentSubmittedCard";

export default function AssignmentSubmittedList({ assignment, user }) {
  const [assignmentsSubmitted, setAssignmentsSubmitted] = useState([]);
  //const[assignmentsSubmittedByUser,setassignmentsSubmittedByUser] = useState([]);
  const studentView = user.userType === "student";
  const teacherView = user.userType === "teacher";

  function getAllSubmittedForThisAssignment() {
    AssignmentSubmissionApi.getAllSubmittedByAssignmentId(assignment.id).then(
      (res) => {
        setAssignmentsSubmitted(res.data);
      }
    );
  }

  useEffect(() => {
    getAllSubmittedForThisAssignment(assignment.id);
  }, []);

  // function getAllSubmittedForThisAssignmentByUser(){
  //     AssignmentSubmissionApi.getAllSubmittedForAssignmentByUser(assignment.id,user.id)
  //     .then((res)=> {
  //         setassignmentsSubmittedByUser(res.data);
  //     })

  //   }
  // useEffect(()=>{

  //     getAllSubmittedForThisAssignmentByUser(assignment.id,user.id);
  // },[]);

  console.log("assignmentsSubmitted", assignmentsSubmitted);
  const assignmentSubmittedList = assignmentsSubmitted.map((assignsubmit) => (
    <AssignmentSubmittedCard
      key={assignsubmit.id}
      assignmentSubmitted={assignsubmit}
    />
  ));

  const assignmentsSubmittedByUser = assignmentsSubmitted.filter(
    (p) => p.user.id === user.id
  );
  console.log("assignmentsSubmittedByUser", assignmentsSubmittedByUser);
  const assignementSubmittedByUser = assignmentsSubmittedByUser.map(
    (assignsubmit) => (
      <AssignmentSubmittedCard
        key={assignsubmit.id}
        assignmentSubmitted={assignsubmit}
      />
    )
  );

  return (
    <>
      {teacherView && (
        <div>
          <h1>Assigments submitted back by students</h1>
          {assignmentsSubmitted === [] ? (
            "No submissions yet"
          ) : (
            <table class="table" cellspacing="0">
              <thead>
                <tr>
                  <th>Submitted By</th>
                  <th>Submitted on</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Comment by Teacher</th>
                  <th>Action</th>
                </tr>
              </thead>
              {assignmentSubmittedList}
            </table>
          )}
        </div>
      )}

      {studentView && (
        <div>
          <h1>Assigments submitted back by You</h1>
          {assignmentsSubmittedByUser === [] ? (
            "No submissions yet"
          ) : (
            <table class="table" cellspacing="0">
              <thead>
                <tr>
                  <th>Submitted By</th>
                  <th>Submitted on</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Comment by Teacher</th>
                  <th>Action</th>
                </tr>
              </thead>
              {assignementSubmittedByUser}
            </table>
          )}
        </div>
      )}
    </>

    /* <div>
            {teacherView && 
                <div>
            <h1>Assigments submitted back by students</h1>
            {assignmentsSubmitted === [] ? 'No submissions yet' 
            :<div className="row">{assignmentSubmittedList}
            </div>
                }
            </div>}
            {studentView && <div>
            <h1>Assigments submitted back by You</h1>
            {assignmentsSubmittedByUser === [] ? 'No submissions yet' 
            :<div className="row">{assignementSubmittedByUser}</div>
                }
            </div>}

        </div> */
  );
}
