import React, {useState, useEffect} from "react";


import Api from "../../api/Api";
import CommentsPage from "../comment/CommentsPage";
import AnnounceCard from "./AnnounceCard";
import AnnounceCreateForm from "./AnnounceCreateForm";


function AnnouncePage() {

    const [announces, setAnnounces] = useState([]);
    const [userData, setUserData] = useState([]);
    const [email, setEmail] = useState("")

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
                const email = response.data
                setEmail(email);
            });
    }, []);

    const deleteAnnounce = (announce) => {
        if (announce.user.email === email) {
            
            Api.delete("/announce/" + announce.id)
                .then(r => getAll());

        }else{
            alert("you can't delete the announce");
        }
    
    }


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