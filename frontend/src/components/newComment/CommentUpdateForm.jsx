import React, {useState} from 'react';


export default function CommentUpdateForm( {initialComment, onUpdateClick }) {
    const [body, setBody] = useState(initialComment.body);

    const [user, setUser] = useState("");


    return (
/*         <div className="card">
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
        </div>  */

        <div id="create-comment" class="container bootdey">
        <div class="col-md-12 bootstrap snippets">
        <div class="panel">
            <div class="panel-body">
                <textarea class="form-control" rows="2"
                    value={body} onChange={e => setBody(e.target.value)}></textarea>
                <div class="mar-top clearfix">
                <button class="btn btn-sm btn-primary pull-right" 
                    onClick={() => onUpdateClick ({...initialComment, body})} type="submit">
                    <i class="fa fa-pencil fa-fw"></i> Save
                </button>
                <a class="btn btn-trans btn-icon fa fa-video-camera add-tooltip" href="#"></a>
                <a class="btn btn-trans btn-icon fa fa-camera add-tooltip" href="#"></a>
                <a class="btn btn-trans btn-icon fa fa-file add-tooltip" href="#"></a>
            </div>
        </div>
        </div>
       
        </div>
        </div> 

    )
}

