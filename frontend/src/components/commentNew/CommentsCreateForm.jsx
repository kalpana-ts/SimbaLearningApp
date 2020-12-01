import React, {useState} from 'react';


export default function CommentsCreateForm( {onSubmit}) {
    const [body, setBody] = useState("");
    const [user, setUser] = useState("");

    //Inform parent by calling onSubmit and passing the title and body
  
    return (
        /* <div className="card">
                <div>
                    <div className="form-group">
                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="What would you like to say"
                            value={body}
                            onChange={e => setBody(e.target.value)} />
                        
                            <button
                                className="btn btn-success"
                                onClick={e=>onSubmit( {body})}>
                                            Add Comment 
                            </button>
       
            
                </div>
            </div>
        </div> */

        <div id="create-comment" class="container bootdey">
        <div class="col-md-12 bootstrap snippets">
        <div class="panel">
            <div class="panel-body">
                <textarea class="form-control" rows="2" placeholder="What are you thinking?"
                value={body} onChange={e => setBody(e.target.value)} defaultValue="Reset"></textarea>
                <div class="mar-top clearfix">
                <button class="btn btn-sm btn-primary pull-right" onClick={e=>onSubmit( {body})} type="submit">
                    <i class="fa fa-pencil fa-fw"></i> Share
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
