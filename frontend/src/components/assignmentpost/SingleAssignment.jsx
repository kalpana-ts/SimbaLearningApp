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
                  <div>
                    {studentView && <div>
                <Link to={{ pathname: `/assignmentSubmission/new/${assignment.id}`, state: { assignment,user } }}>
                      <button>Submit Your Answer</button>
                </Link>
                <AssignmentSubmittedList assignment={assignment} user={user} />
                </div>
                    }
                    
                  </div>
                    {teacherView &&
                       <div class="assignments-submitted">
                        
           
                        <AssignmentSubmittedList assignment={assignment} user={user} />
                        
                    </div> }
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
