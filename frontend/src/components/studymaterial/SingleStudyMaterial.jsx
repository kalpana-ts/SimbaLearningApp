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
        
        <div class="row d-flex align-items-center justify-content-center">
          <div class="col-md-7 assignment-post">
              <div class="single-assignment-card">
              <div className="card-title bg-secondary text-white m-0 p-1 ">
          {material.title + " ... "}
          Posted By: 
          {material.user.name}    
          </div>
          <div className="card-body">
                Description: 
                {material.description} <br />
                Grade:
                {material.grade}
                <br />
                Subject: 
                {material.subject}
                <br />
                
  
              </div>
              <div class="widget-body">
              <div class="widget-top-overflow text-white">
              {material.fileUrl && (url.match('.jpg') || url.match('.png') ?
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
  