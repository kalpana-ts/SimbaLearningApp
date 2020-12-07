import React,{useState} from "react";
import { Link } from "react-router-dom";


import AssignmentPost from "../assignmentpost/AssignmentPostPage";
import grade1 from '../../images/abc.png';
import grade2 from '../../images/read.png';
import grade3 from '../../images/classroom.png';
import grade4 from '../../images/human.png';
import gradeAs1 from '../../images/online-learning.png';
import gradeAs2 from '../../images/student-3.png';
import gradeAs3 from '../../images/student-2.png';
import gradeAs4 from '../../images/reading.png';


function AppHomePage({ onLogout }) {
    const [gradeone,setGradeone]=useState("1");
    const [gradetwo,setGradetwo]=useState("2");
    const [gradethree,setGradethree]=useState("3");
    const [gradefour,setGradefour]=useState("4");
    const [grade,setGrade]=useState('1');

    
    
  return (
      <div>
        <span className="Assignement-title">Study Materials</span><br/><br/>
        <div class="row">
        <div class="col-sm-5">
        <div class="card grade grade-1">
            <div class="card-body">
            <h5 class="card-title grade-title"> 
            
                <img className="grade-img" src={grade1} alt="" srcset=""/>&nbsp; Grade - 1
          
            </h5>
            </div>
        </div>
        </div>
        <div class="col-sm-5">
        <div class="card grade grade-2">
            <div class="card-body">
            <h5 class="card-title grade-title"><img className="grade-img" src={grade2} alt="" srcset=""/>&nbsp;Grade - 2</h5>
            </div>
        </div>
        </div>
        <div class="col-sm-5">
        <div class="card grade grade-3">
            <div class="card-body">
            <h5 class="card-title grade-title"><img className="grade-img" src={grade3} alt="" srcset=""/>&nbsp;Grade - 3</h5>
            </div>
        </div>
        </div>
        <div class="col-sm-5">
        <div class="card grade grade-4">
            <div class="card-body">
            <h5 class="card-title grade-title"><img className="grade-img" src={grade4} alt="" srcset=""/>&nbsp;Grade - 4</h5>
            </div>
        </div>
        </div>
    </div>

    <br/><br/>

    <span className="Assignement-title">Assignments</span><br/><br/>
        <div class="row">
        <div class="col-sm-5">
        <div class="card grade gradeAs-1">
            <div class="card-body">
            <h5 class="card-title grade-title">
            
                <Link className=""  to={{ pathname: `/assignmentPost/grade/${grade}`, state: {grade:1} }} >
                    <img className="grade-img" src={gradeAs1} alt="" srcset=""/>&nbsp;Grade - 1
                </Link>
            </h5>
            </div>
        </div>
        </div>
        <div class="col-sm-5">
        <div class="card grade gradeAs-2">
            <div class="card-body">
            <h5 class="card-title grade-title">

            <Link className="" to={{ pathname: `/assignmentPost/grade/${grade}`, state: {grade:2} }} >
                <img className="grade-img" src={gradeAs2} alt="" srcset=""/>&nbsp;Grade - 2
            </Link>  
            </h5>
            </div>
        </div>
        </div>
        <div class="col-sm-5">
        <div class="card grade gradeAs-3">
            <div class="card-body">
            <h5 class="card-title grade-title">
            <Link className="" to={{ pathname: `/assignmentPost/grade/${grade}`, state: {grade:3} }} >
                <img className="grade-img" src={gradeAs3} alt="" srcset=""/>&nbsp;Grade - 3
            </Link>
            </h5>
            </div>
        </div>
        </div>
        <div class="col-sm-5">
        <div class="card grade gradeAs-4">
            <div class="card-body">
            <h5 class="card-title grade-title">
            <Link className="" to={{ pathname: `/assignmentPost/grade/${grade}`, state: {grade:4} }} >
                <img className="grade-img" src={gradeAs4} alt="" srcset=""/>&nbsp;Grade - 4
            </Link>
            </h5>
            </div>
        </div>
        </div>
    </div>
    <br/><br/>
    </div> 
  )
}

export default AppHomePage;