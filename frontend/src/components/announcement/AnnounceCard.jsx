import React ,{useState} from 'react'
import CommentsPage from '../comment/CommentsPage';
import AnnounceUpdateForm from "./AnnounceUpdateForm"
// import { FaRegUserCircle } from "react-icons/fa";
// import { RiDeleteBin5Line } from "react-icons/ri";


function AnnounceCard({announce, onUpdateClick, onDeleteClick}) {

    const [isUpdating, setIsUpdating] = useState(false);
    
    const handleUpdateClick = () => {
        setIsUpdating(true);
    };

    return isUpdating ?
        <AnnounceUpdateForm oldAnnounce={announce} onUpdateClick={(updatedAnnounce) => { setIsUpdating(false); onUpdateClick(updatedAnnounce); }} />
        :
        <div className="card">
            <div className="card-body">
                <div>
                    {/* <FaRegUserCircle /> */}
                    {/* {announce.user.name} */}
                    
                    
                    
                    
                </div>
                <div className="card-title">
                    
                    {announce.title}
                </div>
                <div>
                    {announce.body}
                </div>
                <div className="form-group">
                    
                    <button

                        className="btn-update" onClick={handleUpdateClick}>              
                        Update
                    </button>
                    
                    <button
                        className="btn-delete" onClick={() => onDeleteClick(announce)}>
                        Delete
                    </button>
                
                    <CommentsPage />
                </div>
        </div>
    </div>
    
}

export default AnnounceCard
