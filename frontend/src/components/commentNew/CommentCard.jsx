import React, { useState } from "react";
import CommentUpdateForm from "./CommentUpdateForm";

function CommentCard({userComment, onUpdateClick, onDeleteClick, userData}) {
    const [isUpdating, setIsUpdating] = useState(false);
    
    const handleUpdateClick = () => {
        setIsUpdating(true);
    };


    
    return ( 
        
                /* isUpdating ? 
                    <CommentUpdateForm 
                    initialComment={userComment}
                        onUpdateClick={(updComment) =>
                        { setIsUpdating(false);
                        onUpdateClick(updComment); 
                    }} />    
                        :
                    <div className="mt-3">
                    <div className="card-body">
                    {userComment.body}
                    </div>
                    <div>
                
                </div>

                <div className="mt-3">
                    <button className="btn btn-warning" onClick={handleUpdateClick}>
                        Update Comment
                    </button>
                    <button
                        className="btn btn-info" onClick={() => onDeleteClick(userComment)}>
                        Delete Comment
                    </button>
                </div>
                <div></div>
                </div> */

     isUpdating ?

                <CommentUpdateForm 
                initialComment={userComment}
                    onUpdateClick={(updComment) =>
                    { setIsUpdating(false);
                    onUpdateClick(updComment); 
                }} /> 
                :

        <div className="media-block">
            <a className="media-left" href="#">
                <img className="img-circle img-sm" alt="Profile Picture" 
                src="https://bootdey.com/img/Content/avatar/avatar1.png" />
            </a>
            <div className="media-body">
                <div className="mar-btm">
                    <a href="#" class="btn-link text-semibold media-heading box-inline">Lisa</a>
                    <p className="text-muted text-sm"><i class="fa fa-mobile fa-lg"></i> - From Mobile - 11 min ago</p>
                </div>
                  <p>{userComment.body}</p>
                <div class="pad-ver">
                    <div className="btn-group">
                      <a className="btn btn-sm btn-default btn-hover-success" href="#" onClick={handleUpdateClick}>
                        <i class="fas fa-edit"></i></a>
                      <a className="btn btn-sm btn-default btn-hover-danger" href="#" onClick={() => onDeleteClick(userComment)}>
                        <i class="fas fa-trash-alt"></i></a>
                    </div>
                    <a className="btn btn-sm btn-default btn-hover-primary" href="#create-comment"><i class="fas fa-comment-alt"></i></a>
                </div>
                <hr/>
            </div>
        </div>   
           
)}
export default CommentCard;