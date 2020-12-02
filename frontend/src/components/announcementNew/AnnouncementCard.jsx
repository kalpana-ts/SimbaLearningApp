import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

function AnnouncementCard({ announce }) {
    console.log(announce.user.name);

  return (
    
    
    <div class="col-md-7 announcement-post">
            <section class="widget">
                <div class="widget-body">
                    <div class="widget-top-overflow text-white">
                        {announce.imageUrl.match('.jpg' || '.png') ?
                        <img src={announce.imageUrl} class="img-fluid" alt="Responsive image"/> : 
                        <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src={announce.imageUrl} allowfullscreen></iframe>
                        </div>
                        }
                            
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



  );
}

export default AnnouncementCard;
