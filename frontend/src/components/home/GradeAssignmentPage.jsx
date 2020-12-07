import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from 'react-router-dom';

//setSubject as per the link , can use onclickmethod call and set state.

export default function GradeAssignmentPage() {
    // var getParams = function () {
    //     var url = window.location.href;
    //     var params = {};
    //     var parser = document.createElement('a');
    //     parser.href = url;
    //     var query = parser.search.substring(1);
    //     var vars = query.split('?');
    //     for (var i = 0; i < vars.length; i++) {
    //       var pair = vars[i].split('=');
    //       params[pair[0]] = decodeURIComponent(pair[1]);
    //     }
    //     return params;
    //   };
      //console.log("props",props);

    const { state } = useLocation();
    const grade = state === undefined ? null : state.grade;
  // const[grade,setGrade] = useState('');
   // const temp = getParams();
   //const grade = temp === undefined ? null : temp;
  // console.log("Grade passed from GradeAssignment Page:" ,grade);
    //  temp===undefined?
    //    setGrade(null):
    //   setGrade(temp);
  // const [grade,setGrade] = useState(props.match.params.grade);
   
    const [subject,setSubject]=useState("Math");
   
   // const [math,setMath]=useState("Math");

    return(

        <div>
            <Link className="" to={{ pathname: `/assignmentPost/grade/subject/${subject}`, state: {grade,subject} }} >            
            <h1>Math</h1>
            </Link>
            <Link className="" to={{ pathname: `/assignmentPost/grade/subject/${subject}`, state: {grade,subject:'English'} }} >
            <h1>English</h1>
            </Link>
            <Link className="" to={{ pathname: `/assignmentPost/grade/subject/${subject}`, state: {grade,subject:'Science'} }} >
            <h1>Science</h1>
            </Link>
            <Link className="" to={{ pathname: `/assignmentPost/grade/subject/${subject}`, state: {grade,subject:'GK'} }} >
            <h1>General Knowledge</h1>
            </Link>
            

        </div>
    );
};