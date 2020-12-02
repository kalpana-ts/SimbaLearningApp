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



// //import { format } from 'date-fns';
// import React, { useState } from 'react';
// //import ImageUploader from './ImageUploader';

// function AnnounceCreateForm({ setAnnounce }) {
//   //const [imgUrl, setImgUrl] = useState('');
//   const [AnnounceTitle, setAnnounceTitle] = useState('');
//   const [details, setDetails] = useState('');
//   const [postAs, setPostAs] = useState('');
//   //const [uploading, setUploading] = useState(true);

//   const submitHandler = event => {
//     event.preventDefault();
//     setAnnounce({
//       title: AnnounceTitle,
//       body: details,
      
//       email: postAs
//     });
//   };

//   return (
//     <form style={{ width: '100%' }} onSubmit={submitHandler}>
//       <h1 style={{ textAlign: 'center', color: '#6C6C6C' }}>Announcement</h1>
//       <div className="row">
//         <div className="col-md-6 col-sm-6">
//           <div className="form-group">
//             <label htmlFor="formGroupExampleInput">Post as</label>
//             <input
//               type="text"
//               className="form-control"
//               id="formGroupExampleInput"
//               placeholder="Post as..."
//               onChange={e => setPostAs(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="formGroupExampleInput"> Title</label>
//             <input
//               type="text"
//               className="form-control"
//               id="formGroupExampleInput1"
//               placeholder="What are you publishing"
//               onChange={e => setAnnounceTitle(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="formGroupExampleInput2">Announcement Details:</label>
//             <textarea
//               type="text"
//               className="form-control"
//               id="formGroupExampleInput3"
//               placeholder="Details about the announcement?... date, details or else you would like to share."
//               rows="3"
//               onChange={e => setDetails(e.target.value)}
//             />
//           </div>
          
//         </div>

        
//       </div>
//     </form>
//   );
// }

// export default AnnounceCreateForm;









// // import React, { useState } from 'react'
// // // import { FaRegUserCircle } from "react-icons/fa";


// // function AnnounceCreateForm({  onCreateClick, userData }) {

// //     const [body, setBody] = useState("");
// //     const [title, setTitle] = useState("");
    

// //     const onCreateAnnounceClick = () => {
// //         const announceData = {title, body};
// //         onCreateClick(announceData)
// //             .then(() => {
// //                 setTitle("");
// //                 setBody("");
// //             })
// //     }

   

// //     return (
        
// //             <div className="card">
// //                 <div className="card-body">
// //                     <h4 className="card-title" >
                    
// //                     {/* <FaRegUserCircle /> */}
// //                     {userData.name}
                    
// //                     </h4>
// //                     <div>
// //                         <div className="form-group">
                            
// //                             <input
// //                             type="text"
// //                             className="form-control"
// //                             placeholder="Type the announce title here"
// //                             value={title}
// //                             onChange={e => setTitle(e.target.value)} />

// //                         <textarea
// //                             type="text"
// //                             className="form-control"
// //                             placeholder="What is your announce"
// //                             value={body}
// //                             onChange={e => setBody(e.target.value)} />
// //                         </div>
                        
// //                         <div className="form-group">
// //                             <button
// //                                 className="btn btn-info"
// //                             onClick={onCreateAnnounceClick}>
// //                                 Send
// //                             </button>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //     )
    
// // }

// // export default AnnounceCreateForm
