import React, {useState} from 'react';


export default function CommentUpdateForm( {initialComment, onUpdateClick }) {
    const [body, setBody] = useState(initialComment.body);

    const [user, setUser] = useState("");


    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title" >Update Comment</h4>
                <div>
                    <div className="form-group">
                        
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            value={body}
                            onChange={e => setBody(e.target.value)} />

                       </div>

                    <div className="form-group">
                        <button
                            className="btn btn-primary"
                            onClick={() => onUpdateClick ({...initialComment, body})}>
                              Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

