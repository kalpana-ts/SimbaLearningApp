import React, { Component, useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ErrorScreen from '../tempscreens/ErrorScreen';
import ChatApi from '../../api/ChatApi';
import Api from '../../api/Api';
import Auth from '../../services/Auth';
import CommentPage from '../newComment/CommentsPage';

function SingleAnnouncement() {
  const userEmail = window.sessionStorage.getItem('userEmail');
  const { state } = useLocation();
  const passedPost = state === undefined ? null : state.announce;
  const [announce, setAnnounce] = useState(passedPost);
  const history = useHistory();
  const isPoster = userEmail === announce.user.email;
  const User_Email_ID = announce.user.email;
  const User_Name = announce.user.name;

  // try to fetch token value
  // useEffect(() => {
  //   Api.get("/announce/:id")
  //     .then(r => {
  //       const email = r.data;
  //       setEmail(email);
  // })
  // }, []);

  const messageHandler = () => {
    const createOrDirect = async () => {
      try {
        const response = await ChatApi.createThread(announce.email, {});
        const thread = response.data;
        history.push({ pathname: `/chat/${thread.id}`, state: { thread } });
      } catch (e) {
        console.log(e);
      }
    };
    createOrDirect();
  };

  try {
    return (

        <div class="col-md-9 announcement-post">
            <div class="single-announcement-card">
                <div class="d-flex justify-content-between p-2 px-3">
                    <div class="d-flex flex-row align-items-center"> 
                    <img  src="https://i.imgur.com/UXdKE3o.jpg" width="50" class="rounded-circle"/>
                        <div class="d-flex flex-column ml-2"> 
                          <span class="font-weight-bold">{User_Email_ID}</span> 
                        <small class="text-primary">{User_Name}</small> </div>
                    </div>
                </div> 
                <div class="d-flex justify-content-center">
                      {announce.imageUrl.match('.jpg' || '.png' || '.gif') ?
                        <img src={announce.imageUrl} class="img-fluid" alt="Responsive image"/> : 
                        <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src={announce.imageUrl} allowfullscreen></iframe>
                        </div>
                      }
                </div>
                <div class="p-2">
                    <h3 className="product-title">{announce.title}</h3>
                    <p class="text-justify">{announce.body}</p>
                    
                    {isPoster ? null : (
                      <button
                        className="btn btn-outline-info my-2 my-sm-0"
                        onClick={messageHandler}
                        type="button">
                        Message Poster
                      </button>
                    )}
                   

                    <hr/>
                    
                    <div class="comments">
                        
                        <CommentPage />
                        
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
export default SingleAnnouncement;
