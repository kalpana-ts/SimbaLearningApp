import React, {useState} from 'react';


export default function CommentsCreateForm( {onSubmit}) {
    const [body, setBody] = useState("");
    const [user, setUser] = useState("");

    //Inform parent by calling onSubmit and passing the title and body
  
    function  onClickHandler () {
        document.getElementById("comment-text").value="";
       onSubmit( {body})
    }
    return (
        <div className="card">
                <div>
                    <div className="form-group">
                        <textarea
                            id="comment-text"
                            type="text"
                            className="form-control"
                            placeholder="What would you like to say"
                            value={body}
                            onChange={e => setBody(e.target.value)} />
                        
                            <button
                                className="btn btn-success"
                                onClick={onClickHandler}>
                                            Add Comment 
                            </button>
       
            
                </div>
            </div>
        </div>
    )

}
