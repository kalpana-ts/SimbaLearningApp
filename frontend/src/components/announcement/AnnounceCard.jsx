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
                        className="btn-delete" onClick={() => onDeleteClick(announce.id)}>
                        Delete
                    </button>
                
                    <CommentsPage />
                </div>
        </div>
    </div>
    
}

export default AnnounceCard




// import React from 'react';
// import { Link } from 'react-router-dom';

// function AnnounceCard({ Announce }) {
//   return (
//     <div className="col-md-3 col-sm-6">
//       <div className="product-grid4">
//         {/* <div className="product-image4">
//           <a href={post.imageUrl}>
//             <img
//               className={post.claimed ? 'claimed pic-1' : 'pic-1'}
//               src={post.imageUrl}
//               alt=""
//             />
//             <img
//               className={post.claimed ? 'claimed pic-2' : 'pic-2'}
//               src={post.imageUrl}
//               alt=""
//             />
//           </a>
//           {post.claimed ? (
//             <span className="product-new-label">Claimed</span>
//           ) : (
//             <span className="product-new-label">Available</span>
//           )}
//         </div> */}
//         <div className="product-content">
//           <h3 className="title">
//             <a href={Announce.title}>{Announce.title}</a>
//             <a href={Announce.body}>{Announce.body}</a>
//           </h3>
//           <div className="info">
//             <span>{Announce.date}</span>
//             <br />
//           </div>
//           <Link className="claim" to={{ pathname: `/announce/${Announce.id}`, state: { Announce } }}>
//             View Announcement
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AnnounceCard;



// // import React ,{useState} from 'react'
// // import CommentsPage from '../comment/CommentsPage';
// // import AnnounceUpdateForm from "./AnnounceUpdateForm"
// // // import { FaRegUserCircle } from "react-icons/fa";
// // // import { RiDeleteBin5Line } from "react-icons/ri";


// // function AnnounceCard({announce, onUpdateClick, onDeleteClick}) {

// //     const [isUpdating, setIsUpdating] = useState(false);
    
// //     const handleUpdateClick = () => {
// //         setIsUpdating(true);
// //     };

// //     return isUpdating ?
// //         <AnnounceUpdateForm oldAnnounce={announce} onUpdateClick={(updatedAnnounce) => { setIsUpdating(false); onUpdateClick(updatedAnnounce); }} />
// //         :
// //          <div className="card">        
// //             <div className="card-body">
// //                 <div>

                    
                    
                    
                    
// //                  </div>
// //                  <div className="card-title">
                    
// //                     {announce.title}
// //                 </div>
// //                  <div>
// //                     {announce.body}               
// //                       </div>
// //                 <div className="form-group">
// //              <button  className="btn-update" onClick={handleUpdateClick}>              
// //                          Update
// //                      </button>
                    
// //                      <button
// //                         className="btn-delete" onClick={() => onDeleteClick(announce)}>                         Delete
// //                      </button>
// //                                      <CommentsPage />      
// //               </div>
// //         </div>
// //    </div>
    
// //  }


// // export default AnnounceCard
