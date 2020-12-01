import React, {useEffect, useState} from 'react';
import CommentsCreateForm from './CommentsCreateForm';
import Api from '../../api/Api';
import CommentCard from './CommentCard';
import { useHistory, useLocation } from 'react-router-dom';

export default function CommentsPage({announceForComment}){

 /* Save the response from useEffect in a variable using state variables */
const [userComment, setUserComment] = useState([]);
const [email, setEmail] = useState(null);

/*We want all the comments to be displayed when the page is loaded,
so we use useEffect */

    useEffect (() => {
        getAll()
    },[]);

    const getAll =() => {
        Api.get("/comments")
            .then((resp) => setUserComment(resp.data)
            )};
    

    useEffect (() => {
        Api.get("/test")
            .then(response => {
                setEmail(response.data);
            });
    },[]);

    const createComment =(commentData) => {
            Api.post("/comments", commentData)
            .then((resp)=> {setUserComment([...userComment, resp.data])})
        };
    
    const updateComment =(updatedComment) => {
          Api.put("/comments/", updatedComment)
                .then(res=> getAll());
        };

    const deleteComment = (delComment) => {
                Api.delete("/comments/" + delComment.id)
                    .then(r => getAll());
       };
        
    return (
        <div>
            <CommentsCreateForm onSubmit={createComment}/>
             {/* { <CommentList key={userComment.id}
                     userComment = {userComment} 
                    // onCommentUpdate={updateComment}
                     onUpdateClick={updateComment}
                     onDeleteClick={deleteComment}
                     /> }  */}
                {userComment.map(eachuserComment=> 
                <CommentCard key={eachuserComment.id}
                 userComment={eachuserComment}
                 onUpdateClick={updateComment}
                 onDeleteClick={deleteComment}/>)}
                
        </div>
    );
}
