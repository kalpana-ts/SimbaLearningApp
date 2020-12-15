import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ErrorScreen from "../tempscreens/ErrorScreen";

function SingleStudyMaterial() {
  const { state } = useLocation();
  const passedMaterial = state === undefined ? null : state.material;
  const [material, setMaterial] = useState(passedMaterial.material);

  const url = material.fileUrl;

  try {
    return (
      <div className="single-study-material">
        <p>
          <button
            class="btn single-study-material-tab"
            type="button"
            aria-controls="multiCollapseExample1 multiCollapseExample2"
          >
            <span className="review-page-user-details">
              {material.user.name}
            </span>
          </button>
        </p>
        <div class="row">
          <div class="col-md-8">
            <div className="card-body">
              <h4 style={{ color: "#1c7293" }}>{material.title}</h4>
              <span className="study-page-span">Subject :</span> &nbsp;{" "}
              {material.subject}
              <hr />
              <span className="study-page-span">Description:</span> &nbsp;{" "}
              {material.description}
              <hr />
            </div>

            <div class="widget-body">
              <a href={material.fileUrl} target="_blank">
                {material.fileUrl &&
                  (url.match(".jpg") ||
                  url.match(".png") ||
                  url.match(".jpeg") ||
                  url.match(".gif") ? (
                    <img
                      src={material.fileUrl}
                      class="img-fluid"
                      alt="Responsive image"
                    />
                  ) : (
                    <div class="embed-responsive embed-responsive-16by9 iframe-border">
                      <iframe
                        class="embed-responsive-item"
                        src={material.fileUrl}
                        allowfullscreen
                      ></iframe>
                    </div>
                  ))}
              </a>
            </div>
          </div>
          <div class="col"></div>
        </div>
      </div>

      /*       <div className="single-assignment-submitted-frm">
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
          </div> */
    );
  } catch (e) {
    console.log(e);
    return <ErrorScreen />;
  }
}
export default SingleStudyMaterial;
