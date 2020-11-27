import React, {useState, useEffect} from "react";


import Api from "../../api/Api";
import CommentsPage from "../comment/CommentsPage";
import AnnounceCard from "./AnnounceCard";
import AnnounceCreateForm from "./AnnounceCreateForm";


function AnnouncePage() {

    const [announces, setAnnounces] = useState([]);
    const [userData, setUserData] = useState([]);
    const [Email, setEmail] = useState("")

    const getAll = () => {
        Api.get("/announce")
            .then((response) => setAnnounces(response.data));
    };
    

    const createAnnounce = (announceData) => {
           return  Api.post("/announce/new", announceData)
            .then((response) => {setAnnounces([...announces, response.data])});

    }

    useEffect (() => {
        Api.get("/user/me")
            .then(response => {
                const userData = response.data
                setUserData(userData)
            
            });
    },[]);

    useEffect (() => {
        Api.get("/user/")
            .then(response => {
                const Email = response.data
                setEmail(Email);
            });
    }, []);

    const deleteAnnounce = id => {
        Api.delete('/announce/' + id)
            .then(response => getAll());
};
            
        
    
    


    const updateAnnounce = (updatedAnnounce) => {
        Api.put("/announce/", updatedAnnounce)
            .then(response => getAll());
    };

    useEffect(() => {
        getAll();
    },[]);

    
    return (
       
        <div className="card">
            

            <AnnounceCreateForm userData={userData}  onCreateClick={createAnnounce} />

            

            {
                announces.map(announce => (<AnnounceCard
                    key={announce.id}
                    announce={announce}
                    
                    onUpdateClick={updateAnnounce}
                    onDeleteClick={deleteAnnounce}
                     />))
            }           
            
        </div>
    );
}

export default AnnouncePage;



// import React, { useEffect, useState } from 'react';
// import AnnounceApi from '../../api/AnnounceApi';
// import AnnounceCard from './AnnounceCard';

// function AnnouncePage() {
//   const [Announces, setAnnounces] = useState([]);
//   useEffect(() => {
//     const fetchAnnounces = async () => {
//       const response = await AnnounceApi.getAllAnnouncement();
//       setAnnounces(response.data);
//     };
//     fetchAnnounces();
//   }, []);

//   const AnnounceList = Announces.map(Announce=> <AnnounceCard key={Announce.id} Announce={Announce} />);

//   return Announces === [] ? 'Loading....' : <div className="row">{AnnounceList}</div>;
// }

// export default AnnouncePage;

// // import React, {useState, useEffect} from "react";


// // import Api from "../../api/Api";
// // import CommentsPage from "../comment/CommentsPage";
// // import AnnounceCard from "./AnnounceCard";
// // import AnnounceCreateForm from "./AnnounceCreateForm";


// // function AnnouncePage() {

// //     const [announces, setAnnounces] = useState([]);
// //     const [userData, setUserData] = useState([]);
// //     const [email, setEmail] = useState("")

// //     const getAll = () => {
// //         Api.get("/announce")
// //             .then((response) => setAnnounces(response.data));
// //     };
    

// //     const createAnnounce = (announceData) => {
// //            return  Api.post("/announce/new", announceData)
// //             .then((response) => {setAnnounces([...announces, response.data])});

// //     }

// //     useEffect (() => {
// //         Api.get("/user/me")
// //             .then(response => {
// //                 const userData = response.data
// //                 setUserData(userData)
            
// //             });
// //     },[]);

// //     useEffect (() => {
// //         Api.get("/user/")
// //             .then(response => {
                
// //                 setEmail(response.data);
                
// //             });
// //     }, []);

// //     const deleteAnnounce = (announce) => {
// //         console.log(announce);
// //         console.log(email);
// //         if (announce.email === email) {
            
// //             Api.delete("/announce/" + announce.id)
// //                 .then(r => getAll());

// //         }else{
// //             alert("you can't delete the announce");
// //         }
    
// //     }


// //     const updateAnnounce = (updatedAnnounce) => {
// //         Api.put("/announce/", updatedAnnounce)
// //             .then(response => getAll());
// //     };

// //     useEffect(() => {
// //         getAll();
// //     },[]);

    
// //     return (
       
// //         <div className="card">
            

// //             <AnnounceCreateForm userData={userData}  onCreateClick={createAnnounce} />

            

// //             {
// //                 announces.map(announce => (<AnnounceCard
// //                     key={announce.id}
// //                     announce={announce}
                    
// //                     onUpdateClick={updateAnnounce}
// //                     onDeleteClick={deleteAnnounce}
// //                      />))
// //             }           
            
// //         </div>
// //     );
// // }

// // export default AnnouncePage;