import React, { useState ,useEffect} from 'react';
import Auth from '../../services/Auth';
import { useLocation ,Link} from 'react-router-dom';
import ErrorScreen from '../tempscreens/ErrorScreen';
import UserApi from '../../api/UserApi';
import AssignmentSubmittedList from '../assignmentsubmission/AssignmentSubmittedList';
import AssignmentSubmissionApi from '../../api/AssignmentSubmissionApi';

//delete for user
//Assingmentsubmission linked to this post

function SingleAssignment() {
  
  const userMail = Auth.getUserMail();
  console.log("userMail:",userMail);
  const [user,setUser] = useState({});
  const { state } = useLocation();
  const passedAssignment = state === undefined ? null : state.assignment;
  //console.log("PassedAssignment:",passedAssignment.assignment);
  const [assignment, setAssignment] = useState(passedAssignment.assignment);
 // console.log("set Assignment:",assignment);
  //const history = useHistory();

  const isOwner = userMail === assignment.user.email;
  const User_Email_ID = assignment.user.email;
  const User_Name = assignment.user.name;
  const studentView = user.userType === "student";
  const teacherView = user.userType === "teacher";
  console.log(user);
  console.log("teacher: ",teacherView );
  console.log("student",studentView);

  useEffect(() => {
    function getUserByMail() {
        UserApi.getUserByMail(userMail)
            .then((res) => {
                setUser(res.data)
            })
    }
    userMail !== null && getUserByMail();
}, [userMail])
  

  
  try {
    return (
      
      <section id="tabs" class="project-tab">
                  <div class="container">
                      <div class="row">
                          <div class="col-md-12">
                              <nav>
                                  <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                      <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Assignement View</a>
                                      <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Assignement By Student</a>
                                      <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Project Tab 3</a>
                                  </div>
                              </nav>
                              <div class="tab-content" id="nav-tabContent">
                                  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                  <h3>{assignment.assignmentTitle}</h3>
                                  <p>{assignment.assignmentDescription}</p>
                                  <p>Submission date :  {assignment.submissionDate}</p>
                                  <div class="widget-top-overflow text-white">
                                        { assignment.fileUrl.match('.jpg' || '.png' || 'gif' || '.jpeg') ?
                                          <img src={assignment.fileUrl} class="img-fluid" alt="Responsive image"/> : 
                                          <div class="embed-responsive embed-responsive-16by9">
                                            <iframe class="embed-responsive-item" src={assignment.fileUrl} allowfullscreen></iframe>
                                          </div>
                                          }
                                  </div>

                                  </div>
                                  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                      <table class="table" cellspacing="0">
                                          <thead>
                                              <tr>
                                                  <th>Project Name</th>
                                                  <th>Employer</th>
                                                  <th>Time</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <td><a href="#">Work 1</a></td>
                                                  <td>Doe</td>
                                                  <td>john@example.com</td>
                                              </tr>
                                              <tr>
                                                  <td><a href="#">Work 2</a></td>
                                                  <td>Moe</td>
                                                  <td>mary@example.com</td>
                                              </tr>
                                              <tr>
                                                  <td><a href="#">Work 3</a></td>
                                                  <td>Dooley</td>
                                                  <td>july@example.com</td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                                  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                      <label htmlFor="">hi tab3</label>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>



        
     /*  // <div class="row d-flex align-items-center justify-content-center">
      //   <div class="col-md-7 assignment-post">
      //       <div class="single-assignment-card">
      //       <div className="card-title bg-secondary text-white m-0 p-1 ">
      //   {assignment.assignmentTitle + " ... "}
      //   Posted By: 
      //   {assignment.user.name}    
      //   </div>
      //   <div className="card-body">
      //         Description: 
      //         {assignment.assignmentDescription} <br />
      //         Grade:
      //         {assignment.grade}
      //         <br />
      //         Subject: 
      //         {assignment.subject}
      //         <br />
      //         Last Date to Submit:
      //         {assignment.submissionDate}

      //       </div>
      //       <div class="widget-body">
      //       <div class="widget-top-overflow text-white">
      //       {assignment.fileUrl && (assignment.fileUrl.match('.jpg' || '.png') ?
      //                   <img src={assignment.fileUrl} class="img-fluid" alt="Responsive image"/> : 
      //                   <div class="embed-responsive embed-responsive-16by9">
      //                   <iframe class="embed-responsive-item" src={assignment.fileUrl} allowfullscreen></iframe>
      //                   </div>)
      //                   }
      //       </div>
            
      //     </div>
      //             <hr/>
      //             <div>
      //               {studentView && <div>
      //           <Link to={{ pathname: `/assignmentSubmission/new/${assignment.id}`, state: { assignment,user } }}>
      //                 <button>Submit Your Answer</button>
      //           </Link>
      //           <AssignmentSubmittedList assignment={assignment} user={user} />
      //           </div>
      //               }
                    
      //             </div>
      //               {teacherView &&
      //                  <div class="assignments-submitted">
                        
           
      //                   <AssignmentSubmittedList assignment={assignment} user={user} />
                        
      //               </div> }
      //           </div>
      //       </div>
      //   </div>
         */
    );
  } catch (e) {
    console.log(e);
    return <ErrorScreen />;
  }
}
export default SingleAssignment;
