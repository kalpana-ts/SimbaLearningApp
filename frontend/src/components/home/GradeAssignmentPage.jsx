import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from 'react-router-dom';

//setSubject as per the link , can use onclickmethod call and set state.

export default function GradeAssignmentPage() {
    const { state } = useLocation();
    const grade = state === undefined ? null : state.gradeone;
    const [subject,setSubject]=useState("");
   
    const [math,setMath]=useState("Math");

    return(

        <div>
             <Link className="" to={{ pathname: `/assignmentPost/grade/subject/${math}`, state: {math,grade} }} >
            
                <h1>Math</h1>
            </Link>
            <h1>English</h1>
            <h1>Science</h1>
            <h1>General</h1>
            <Link className="" to="/assignmentPost">
                <h1>All Assignments</h1>
            </Link>

        </div>
    );
};