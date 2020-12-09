import React, { useState ,useEffect} from 'react';
import { useLocation ,Link} from 'react-router-dom';

import UserApi from '../../api/UserApi';
import ReviewByTeacher from '../assignmentsubmission/ReviewByTeacher';

export default function SingleAssignmentSubmitted(){
    const userMail = window.sessionStorage.getItem('userEmail');
    const [user,setUser] = useState({});
    const { state } = useLocation();
    const passedAssignment = state === undefined ? null : state.assignmentSubmitted;
    const [assignment, setAssignment] = useState(passedAssignment.assignmentSubmitted);
    const studentView = user.userType === "student";
    const teacherView = user.userType === "teacher";

    useEffect(() => {
        function getUserByMail() {
            UserApi.getUserByMail(userMail)
                .then((res) => {
                    setUser(res.data)
                })
        }
        userMail !== null && getUserByMail();
    }, [userMail]);
    
    return(
        <div class="col-md-7 assignment-card">
            <section class="widget">
            <div className="card-title bg-secondary text-white m-0 p-1 ">
                {assignment.assignmentTitle + " ...    "}
                Submitted By: {assignment.user.name}         
            </div>
            <div className="card-body">
                Submitted on: {assignment.dateSubmitted}
                <br />
                Description: {assignment.assignmentDescription}    
                <br /> 
                Status : {assignment.status}
                <br /> 
                Comment by Teacher: {assignment.comments}
                <br /> 
            </div>
            {teacherView && 
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
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <div className="modal-title m-0 p-1 font-weight-bold">
                                        { assignment.assignmentTitle}
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
            }

        <div class="widget-body">
          <div class="widget-top-overflow text-white">
            {assignment.fileURL &&
              (assignment.fileURL.match(".jpg" || ".png") ? (
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
              ))}
          </div>
        </div>
      </section>
    </div>
    );


}