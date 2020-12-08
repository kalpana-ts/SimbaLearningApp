import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'; 
import AssignmentSubmissionApi from '../../api/AssignmentSubmissionApi';
import AssignmentSubmittedCard from '../assignmentsubmission/AssignmentSubmittedCard';

export default function AssignmentSubmittedList({assignment}) {
    const[assignmentsSubmitted,setassignmentsSubmitted] = useState([]);

    function getAllSubmittedForThisAssignment(){
            AssignmentSubmissionApi.getAllSubmittedByAssignmentId(assignment.id)
                .then((res) => {
                    setassignmentsSubmitted(res.data);
                })
    }
    useEffect(() => {
        getAllSubmittedForThisAssignment(assignment.id);
    }, []);
    console.log(assignmentsSubmitted);
    const assignmentSubmittedList = assignmentsSubmitted.map(assignsubmit => <AssignmentSubmittedCard key={assignsubmit.id} assignmentSubmitted={assignsubmit}/>);
    return(
        <div>
            <h1>Assigments submitted back by students</h1>
            {assignmentsSubmitted === [] ? 'No submissions yet' 
            :<div className="row">{assignmentSubmittedList}</div>
                }
        </div>
    );

}
