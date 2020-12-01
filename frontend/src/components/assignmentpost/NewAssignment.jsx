import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AssignmentPostApi from '../../api/AssignmentPostApi';
import AssignmentPostForm from '../assignmentpost/AssignmentPostForm';

function NewAssignment(){
    const[assignment,setAssignment]=useState(null);
    const history = useHistory();
    useEffect(() => {
        const createAssignment = async () => {
          try {
            if (assignment !== null) {
              const response = await AssignmentPostApi.createAssignment(assignment); // We need to check response success before redirecting.
              history.push('/assignmentPost');
              setAssignment(null);
            }
          } catch (error) {
            console.log(error);
          }
        };
        createAssignment();
      }, [history, assignment]);


   return (
       <AssignmentPostForm setAssignment={setAssignment}/>
   );
}

export default NewAssignment;