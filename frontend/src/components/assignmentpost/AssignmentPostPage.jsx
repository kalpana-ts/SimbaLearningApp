import React, { useEffect, useState } from "react";
//import { useHistory } from "react-router-dom";

import AssignmentPostApi from '../../api/AssignmentPostApi';
//import AssignmentPostForm from '../../components/assignmentpost/AssignmentPostForm';
//import NewAssignment from '../assignmentpost/NewAssignment';
import AssignmentCard from '../assignmentpost/AssignmentCard';


function AssignmentPostPage(){
    const [assignments, setAssignments]= useState([]);
    useEffect(()=>{
        
        const fetchPosts = async() => {
            const response = await AssignmentPostApi.getAllAssignmentsPosts();
            setAssignments(response.data);
        };
        fetchPosts();
    },[]);
 console.log(assignments);
    const assignmentList = assignments.map(assignment => <AssignmentCard key={assignment.id} assignment={assignment}/>);

    return assignments ===[]? 'No Assignments to show' : <div className="row">{assignmentList}</div>;
}

export default AssignmentPostPage;