import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import AssignmentPostApi from '../../api/AssignmentPostApi';
import AssignmentPostForm from '../../components/assignmentpost/AssignmentPostForm';

function AssignmentPostPage(){
    const history = useHistory();
    const submitHandler = (event) => {
        event.preventDefault();
        history.push('/assignmentPost/new');   
    };
    
    return(
        <div>
            

        </div>
        
    );
}

export default AssignmentPostPage;