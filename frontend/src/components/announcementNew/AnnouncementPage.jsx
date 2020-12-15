import React, { useEffect, useState } from "react";
import AnnounceApi from "../../api/AnnouncementApi";
import AnnounceCard from "./AnnouncementCard";
import Auth from '../../services/Auth';
import UserApi from '../../api/UserApi';
import {useHistory } from "react-router-dom";

function AnnouncementPage() {
  const [announcement, setAnnouncement] = useState([]);
  const [user, setUser] = useState({});
  const userMail = Auth.getUserMail();
  const history=useHistory();
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await AnnounceApi.getAllPosts();
      setAnnouncement(response.data);
    };
    fetchPosts();
  }, []);
  useEffect(() => {
    function getUserByMail() {
        UserApi.getUserByMail(userMail)
            .then((res) => {
                setUser(res.data)
            })
    }
    userMail !== null && getUserByMail();
}, [userMail])

// function deletePost(postId) {

//   AnnounceApi.deletePost(postId);
//      // .then(() => {
//        // AnnounceApi.getAllPosts(); // to refresh the list immediately
//        history.push('/announce');
//     //  })
// }

  const announceList = announcement.map((announcement) => (
  //  <AnnounceCard key={announcement.id} announcement={announcement} user={user} deletePost={deletePost}/>
  <AnnounceCard key={announcement.id} announcement={announcement} user={user} />
  ));

  return announcement.length === 0 ? (
    <div className="center-data">
      <p>No Announcement Yet..</p>
    </div>
  ) : (
    <div className="row">{announceList}</div>
  );
}

export default AnnouncementPage;
