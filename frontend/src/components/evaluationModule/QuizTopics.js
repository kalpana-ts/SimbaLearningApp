import React from "react";
import { Link } from "react-router-dom";



function QuizTopics() {

  

    return (

    <div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-4">
            <div class="card">
              <img src="..." class="card-img-top" alt="..."></img>
                   <div class="card-body">
                       <h5 class="card-title">Country and its Capitals</h5>
                           <Link className="button" to="/Quiz">Click</Link>
            </div>
        </div>
    </div>

    <div class="col mb-4">
        <div class="card">
            <img src=" " class="card-img-top" alt="..."></img>
                 <div class="card-body">
                      <h5 class="card-title">History</h5>
                          <p class="card-text">click here</p>
           </div>
       </div>
    </div>

    <div class="col mb-4">
        <div class="card">
            <img src="..." class="card-img-top" alt="..."></img>
                 <div class="card-body">
                      <h5 class="card-title">Geography</h5>
                          <p class="card-text">click here</p>
            </div>
        </div>
    </div>

    <div class="col mb-4">
        <div class="card">
            <img src="..." class="card-img-top" alt="..."></img>
               <div class="card-body">
                 <h5 class="card-title">National Leaders</h5>
                     <p class="card-text">click here</p>
           </div>
        </div>
    </div>
</div>

            )
}
export default QuizTopics;