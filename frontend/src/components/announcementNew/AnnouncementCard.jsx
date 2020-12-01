import React from 'react';
import { Link } from 'react-router-dom';

function AnnouncementCard({ announce }) {

  return (
    
    <div class="row">
    <div class="col-md-8 d-flex align-items-center justify-content-center">
                <section class="widget">
                <div class="widget-controls">
                    <a href="#"><i class="fa fa-refresh"></i></a>
                    <a href="#" data-widgster="close"><i class="glyphicon glyphicon-remove"></i></a>
                </div>
                <div class="widget-body">
                    <div class="widget-top-overflow text-white">
                        <img className="post-img" src={announce.imageUrl} alt=""/>
                    </div>
                    <div class="post-user mt-sm">
                        <span class="thumb pull-left mr">
                            <img class="img-circle" src="https://bootdey.com/img/Content/user_1.jpg" alt="..."/>
                        </span>
                        <h5 class="poster-detail"><span class="fw-semi-bold">{announce.email}</span> </h5>
                    </div>
                    <br/>
                    <h5 class="mb-xs mt-xs"><span class="fw-semi-bold">{announce.title}</span> </h5>
                    <p class="fs-mini m txt-color">{announce.body} </p>
                </div>
                <footer class="bg-body-light">
                    <ul class="post-links no-separator">
                        <li className="cmt-like"><a href="#"><span class="text-danger"><i class="fa fa-heart"></i> 427</span></a></li>
                        <li className="cmt-like"><a href="#"><i class="fa fa-comment"></i> 98</a></li>
                        <li className="btn-view">
                            <Link className="btn btn-outline-info" 
                                to={{ pathname: `/announce/${announce.id}`, state: { announce } }}>
                                    View 
                            </Link>
                        </li>
                    </ul>
                </footer>
            </section>   
    </div>
  </div>


  );
}

export default AnnouncementCard;
