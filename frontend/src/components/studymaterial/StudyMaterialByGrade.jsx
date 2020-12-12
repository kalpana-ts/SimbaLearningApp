import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import mathGif from "../../images/math.gif";
import socialGif from "../../images/history.gif";
import scienceGif from "../../images/science.gif";
import gkGif from "../../images/gk.gif";
import geoGif from "../../images/geo.gif";
import artGif from "../../images/art.gif";

import StudyMaterialApi from "../../api/StudyMaterialApi";
//import AssignmentCard from '../assignmentpost/AssignmentCard';
import StudyMaterialBySubject from "../studymaterial/StudyMaterialBySubject";
import SingleStudyMaterial from "./SingleStudyMaterial";

function StudyMaterialByGrade() {
  const { state } = useLocation();
  const grade = state === undefined ? null : state.grade;
  const subject = state === undefined ? null : state.subject;
  console.log("grade from list:", grade);
  console.log("Subject from list:", subject);
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await StudyMaterialApi.getAllStudyMaterialByGradeAndSubject(
        grade,
        subject
      );
      setMaterials(response.data);
    };
    fetchPosts();
  }, []);

  const materialList = materials.map((material) => (
    <StudyMaterialBySubject key={material.id} material={material}  />
  ));

  const subjectName = materials.map((material) => material.subject);

  console.log("subjectName");

  return (
    materials.length===0 ? <p>No Materials to show</p>
     : 
        <div className="col-lg-10 material-list-table">
        <table class="table">
        <thead class="teacher-material-tbl-row">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Posted By</th>
            <th scope="col">Study Material Title</th>
            <th scope="col">Grade</th>
            <th scope="col">Subject</th>          
            <th scope="col">Action</th>
            </tr>
        </thead>
                {materialList}
        </table>
        </div>);
  
}

export default StudyMaterialByGrade;
