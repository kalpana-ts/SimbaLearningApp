import React from "react";
import { Link } from "react-router-dom";

import Sub_Maths from '../../images/Sub_Maths.png';
import Sub_History from '../../images/Sub_History.png';
import Sub_Science from '../../images/Sub_Science.png';
import Sub_Geo from '../../images/Sub_Geo.png';
import Sub_Language from '../../images/Sub_Language.png';
import Sub_Art from '../../images/Sub_Art.png';

function SubjectPage() {
    
  return (
    <div class="row clearfix">
        <div class="col-lg-4">
            <div class="card subject_item">
                <div class="body">
                    <div class="cp_img">
                        <h2 class="top-left">Math</h2>
                        <img src={Sub_Maths} alt="Product" class="img-fluid"></img>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card subject_item">
                <div class="body">
                    <div class="cp_img">
                        <h2 class="top-left">History </h2>
                        <img src={Sub_History} alt="Product" class="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>    
        <div class="col-lg-4">
            <div class="card subject_item">
                <div class="body">
                    <div class="cp_img">
                        <h2 class="top-left">Science </h2>
                        <img src={Sub_Science} alt="Product" class="img-fluid"/>                       
                    </div>      
                </div>
            </div>
        </div>    



        <div class="col-lg-4">
            <div class="card subject_item">
                <div class="body">
                    <div class="cp_img">
                        <h2 class="top-left">Geography </h2>
                        <img src={Sub_Geo} alt="Product" class="img-fluid"></img>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card subject_item">
                <div class="body">
                    <div class="cp_img">
                        <h2 class="top-left">Language </h2>
                        <img src={Sub_Language} alt="Product" class="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>    
        <div class="col-lg-4">
            <div class="card subject_item">
                <div class="body">
                    <div class="cp_img">
                        <h2 class="top-left">Art </h2>
                        <img src={Sub_Art} alt="Product" class="img-fluid"/>                       
                    </div>      
                </div>
            </div>
        </div>    
        
        
    </div>
  )
}

export default SubjectPage;