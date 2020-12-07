import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

import AssignmentPostApi from '../../api/AssignmentPostApi';

import AssignmentCard from '../assignmentpost/AssignmentCard';


function AssignmentList(){
    const { state } = useLocation();
    const grade = state === undefined ? null : state.grade;
    const subject = state === undefined ? null : state.subject;
    console.log("grade from list:",grade);
    console.log("Subject from list:",subject);
    const [assignments, setAssignments]= useState([]);
    
    useEffect(()=>{
        const fetchPosts = async() => {
            const response = await AssignmentPostApi.getAllAssignmentsByGradeAndSubject(grade,subject);
            setAssignments(response.data);
        };
        fetchPosts();
    },[]);

    console.log(assignments);
    const assignmentList = assignments.map(assignment => <AssignmentCard key={assignment.id} assignment={assignment}/>);

    return(
        <div>
            
            <div>
                <h1>Assignment List by subject wise</h1>
            {assignments ===[]? 'No Assignments to show' : <div className="row">{assignmentList}</div>}
            
            </div>
        </div>
        
    );
}

export default AssignmentList;