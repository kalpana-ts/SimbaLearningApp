import React, { useState } from "react";
import CommentUpdateForm from "./CommentUpdateForm";
import user_img from "../../images/user_img_1.jpeg";

function CommentCard({userComment, onUpdateClick, onDeleteClick, userData}) {
    const [isUpdating, setIsUpdating] = useState(false);
    
    const handleUpdateClick = () => {
        setIsUpdating(true);
    };


    
    return ( 

     isUpdating ?

                <CommentUpdateForm 
                initialComment={userComment}
                    onUpdateClick={(updComment) =>
                    { setIsUpdating(false);
                    onUpdateClick(updComment); 
                }} /> 
                :

        <div id="comment" className="media-block">
            <a className="media-left" href="#">
                <img className="img-circle img-sm" alt="Profile Picture" 
                src={user_img} />
            </a>
            <div className="media-body comment-text">
                <div className="mar-btm">
                    <a href="#" class="btn-link text-semibold media-heading box-inline">Lisa {userComment.authorName}</a>
                    <p className="text-muted text-sm"><i class="fa fa-mobile fa-lg"></i> - From Mobile - 11 min ago</p>
                </div>
                  <p>{userComment.body}</p>
                <div class="pad-ver">
                    <div className="btn-group">
                      <a className="btn btn-sm btn-default btn-hover-success" href="#comment" onClick={handleUpdateClick}>
                        <i class="fas fa-edit"></i></a>
                      <a className="btn btn-sm btn-default btn-hover-danger" href="#comment" onClick={() => onDeleteClick(userComment)}>
                        <i class="fas fa-trash-alt"></i></a>
                    </div>
                    <a className="btn btn-sm btn-default btn-hover-primary" href="#create-comment"><i class="fas fa-comment-alt"></i></a>
                </div>
                <hr/>
            </div>
        </div>   
           
)}
export default CommentCard;