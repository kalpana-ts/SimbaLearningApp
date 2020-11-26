import React, {useState} from 'react'

function AnnounceUpdateForm({ oldAnnounce, onUpdateClick }) {

    const [title, setTitle] = useState(oldAnnounce.title);
    const [body, setBody] = useState(oldAnnounce.body);

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title" >Update Announce</h4>
                <div>
                    <div className="form-group">
                        
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            value={title}
                            onChange={e => setTitle(e.target.value)} />

                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="Whats is your announce"
                            value={body}
                            onChange={e => setBody(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <button
                            className="btn btn-primary"
                            onClick={() => onUpdateClick ({...oldAnnounce, title, body})}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnnounceUpdateForm
