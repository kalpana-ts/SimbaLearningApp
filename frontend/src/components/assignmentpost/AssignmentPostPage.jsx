import React, { useEffect, useState } from "react";
//import { useHistory } from "react-router-dom";

import AssignmentPostApi from '../../api/AssignmentPostApi';
//import AssignmentPostForm from '../../components/assignmentpost/AssignmentPostForm';
//import NewAssignment from '../assignmentpost/NewAssignment';
//import AssignmentCard from '../assignmentpost/AssignmentCard';
import AssignmentByTeacher from '../assignmentpost/AssignmentByTeacher';


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
    const assignmentList = assignments.map(assignment => 
    <AssignmentByTeacher key={assignment.id} assignment={assignment}/>    
    );

    return (
        assignments === [] ? <p>No Assignments to show</p>
     : 
        <div className="col-lg-10 assignement-list-table">
        <table class="table">
        <thead class="teacher-assignement-tbl-row">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Psted By</th>
            <th scope="col">Assignement</th>
            <th scope="col">Grade</th>
            <th scope="col">Subject</th>
            <th scope="col">Submission Date</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
                {assignmentList}
        </table>
        </div>);
}

export default AssignmentPostPage;