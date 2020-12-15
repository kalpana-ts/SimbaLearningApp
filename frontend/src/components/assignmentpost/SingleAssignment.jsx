import React, { useState, useEffect } from "react";
import Auth from "../../services/Auth";
import { useLocation, Link } from "react-router-dom";
import ErrorScreen from "../tempscreens/ErrorScreen";
import UserApi from "../../api/UserApi";
import AssignmentSubmittedList from "../assignmentsubmission/AssignmentSubmittedList";
import AssignmentSubmissionApi from "../../api/AssignmentSubmissionApi";

//delete for user
//Assingmentsubmission linked to this post

function SingleAssignment() {
  const userMail = Auth.getUserMail();
  console.log("userMail:", userMail);
  const [user, setUser] = useState({});
  const { state } = useLocation();
  const passedAssignment = state === undefined ? null : state.assignment;
  const [assignment, setAssignment] = useState(passedAssignment.assignment);

  const url = assignment.fileUrl;
  const isOwner = userMail === assignment.user.email;
  const User_Email_ID = assignment.user.email;
  const User_Name = assignment.user.name;
  const studentView = user.userType === "student";
  const teacherView = user.userType === "teacher";

  useEffect(() => {
    function getUserByMail() {
      UserApi.getUserByMail(userMail).then((res) => {
        setUser(res.data);
      });
    }
    userMail !== null && getUserByMail();
  }, [userMail]);

  try {
    return (
      <>
        {teacherView && (
          <div class="row assignment-tab">
            <div class="col-md-12">
              <nav>
                <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                  <a
                    class="nav-item nav-link active"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Assignment View
                  </a>
                  <a
                    class="nav-item nav-link"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    href="#nav-profile"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Assignment By Student
                  </a>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <h3>{assignment.assignmentTitle}</h3>
                  <p>{assignment.assignmentDescription}</p>
                  <p>Submission date : {assignment.submissionDate}</p>
                  {studentView && (
                    // <Link
                    //   to={{
                    //     pathname: `/assignmentSubmission/new/${assignment.id}`,
                    //     state: { assignment, user },
                    //   }}
                    // >
                       <Link
                      to={{
                        pathname: '/assignmentSubmission/new',
                        state: { assignment, user },
                      }}
                    >
                      <button>Submit Your Answer</button>
                    </Link>
                  )}
                  <div class="widget-top-overflow text-white">
                    {url.match(".gif") ||
                    url.match(".jpg") ||
                    url.match(".png") ||
                    url.match(".jpeg") ? (
                      <img
                        src={assignment.fileUrl}
                        class="img-fluid"
                        alt="Responsive image"
                        class="assignment-view-img"
                      />
                    ) : (
                      <div class="embed-responsive embed-responsive-16by9 single-assignment-submit-ifram">
                        <iframe
                          class="embed-responsive-item"
                          src={assignment.fileUrl}
                          allowfullscreen
                        ></iframe>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  {/* {studentView && (
                <AssignmentSubmittedList assignment={assignment} user={user} />
              )} */}
                  <AssignmentSubmittedList
                    assignment={assignment}
                    user={user}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {studentView && (
          <AssignmentSubmittedList assignment={assignment} user={user} />
        )}
      </>
    );
  } catch (e) {
    console.log(e);
    return <ErrorScreen />;
  }
}
export default SingleAssignment;
