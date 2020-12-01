import React, { useState } from "react";
import CommentUpdateForm from "./CommentUpdateForm";

function CommentCard({userComment, onUpdateClick, onDeleteClick, userData}) {
    const [isUpdating, setIsUpdating] = useState(false);
    
    const handleUpdateClick = () => {
        setIsUpdating(true);
    };


    
    return ( isUpdating ? 
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
                </div>
            )}
export default CommentCard;