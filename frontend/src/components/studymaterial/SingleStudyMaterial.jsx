import React, { useState, useEffect } from "react";
import Auth from "../../services/Auth";
import { useLocation, Link } from "react-router-dom";
import ErrorScreen from "../tempscreens/ErrorScreen";
import UserApi from "../../api/UserApi";


function SingleStudyMaterial() {
  
  const { state } = useLocation();
  const passedMaterial = state === undefined ? null : state.material;
  const [material, setMaterial] = useState(passedMaterial.material);
 
  const url = material.fileUrl;

  try {
    return (
        
      <div className="single-assignment-submitted-frm">
          <div class="col-md-7 assignment-post">
              <div class="single-assignment-card">
              <p>
        <button
          class="btn student-info-tab"
          type="button"
          aria-controls="multiCollapseExample1 multiCollapseExample2"
        >  
          {material.title + " ... "}
          Posted By: 
          {material.user.name}
          </button>
          </p>    
          
          <div className="card-body">
                Description: 
                {material.description} <br />
                Grade:
                {material.grade}
                <br />
                Subject: 
                {material.subject}
                <br />
                Download Attachment: {material.fileUrl ? 
                <a href={material.fileUrl} target="_blank">{material.title} file</a>: 'No attachment'}
                
  
              </div>
              <div class="widget-body">
              <div class="widget-top-overflow text-white">
              {material.fileUrl && (url.match('.jpg') || url.match('.png') || url.match(".jpeg") || url.match(".gif") ?
                          <img src={material.fileUrl} class="img-fluid" alt="Responsive image"/> : 
                          <div class="embed-responsive embed-responsive-16by9">
                          <iframe class="embed-responsive-item" src={material.fileUrl} allowfullscreen></iframe>
                          </div>)
                          }
              </div>
              
            </div>
                   
            
                  </div>
              </div>
          </div>
          
      );
    } catch (e) {
      console.log(e);
      return <ErrorScreen />;
    }
  }
  export default SingleStudyMaterial;
  