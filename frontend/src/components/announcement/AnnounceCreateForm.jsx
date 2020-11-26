import React, { useState } from 'react'
// import { FaRegUserCircle } from "react-icons/fa";


function AnnounceCreateForm({  onCreateClick, userData }) {

    const [body, setBody] = useState("");
    const [title, setTitle] = useState("");
    

    const onCreateAnnounceClick = () => {
        const announceData = {title, body};
        onCreateClick(announceData)
            .then(() => {
                setTitle("");
                setBody("");
            })
    }

   

    return (
        
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title" >
                    
                    {/* <FaRegUserCircle /> */}
                    {userData.name}
                    
                    </h4>
                    <div>
                        <div className="form-group">
                            
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Type the announce title here"
                            value={title}
                            onChange={e => setTitle(e.target.value)} />

                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="What is your announce"
                            value={body}
                            onChange={e => setBody(e.target.value)} />
                        </div>
                        
                        <div className="form-group">
                            <button
                                className="btn btn-info"
                            onClick={onCreateAnnounceClick}>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
    
}

export default AnnounceCreateForm
