import React, { useEffect, useState } from "react";
import AnnounceApi from "../../api/AnnouncementApi";
import AnnounceCard from "./AnnouncementCard";

function AnnouncementPage() {
  const [announcement, setAnnouncement] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await AnnounceApi.getAllPosts();
      setAnnouncement(response.data);
    };
    fetchPosts();
  }, []);

  const announceList = announcement.map((announcement) => (
    <AnnounceCard key={announcement.id} announcement={announcement} />
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
