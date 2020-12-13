import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import mathGif from "../../images/math.gif";
import socialGif from "../../images/history.gif";
import scienceGif from "../../images/science.gif";
import gkGif from "../../images/gk.gif";
import languageGif from "../../images/hello-talker.gif";
import artGif from "../../images/art.gif";

import StudyMaterialApi from "../../api/StudyMaterialApi";
//import AssignmentCard from '../assignmentpost/AssignmentCard';
import StudyMaterialBySubject from "../studymaterial/StudyMaterialBySubject";
//import SingleStudyMaterial from "./SingleStudyMaterial";

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
    <div>
      <h1>{subjectName[0]}</h1>
      {subjectName[0] === "Math" ? (
        <img className="subject-view-img" src={mathGif} alt="" srcset="" />
      ) : null}

      {subjectName[0] === "Social Study" ? (
        <img className="subject-view-img" src={socialGif} alt="" srcset="" />
      ) : null}

      {subjectName[0] === "Science" ? (
        <img className="subject-view-img" src={scienceGif} alt="" srcset="" />
      ) : null}

      {subjectName[0] === "General Knowledge" ? (
        <img className="subject-view-img" src={gkGif} alt="" srcset="" />
      ) : null}

      {subjectName[0] === "Language" ? (
        <img className="subject-view-img" src={languageGif} alt="" srcset="" />
      ) : null}

      {subjectName[0] === "Art" ? (
        <img className="subject-view-img" src={artGif} alt="" srcset="" />
      ) : null}

      {materials.length === 0 ? "No Studymaterials to show" : <>{materialList}</>}
    </div>
  );
}

export default StudyMaterialByGrade;
