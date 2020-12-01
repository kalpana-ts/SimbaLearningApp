import React, { useEffect, useState } from 'react';
import AnnounceApi from '../../api/AnnouncementApi';
import AnnounceCard from './AnnouncementCard';

function AnnouncementPage() {
  const [announce, setAnnounce] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await AnnounceApi.getAllPosts();
      setAnnounce(response.data);
    };
    fetchPosts();
  }, []);

  const announceList = announce.map(announce => <AnnounceCard key={announce.id} announce={announce} />);

  return announce === [] ? 'Loading....' : <div className="row">{announceList}</div>;
}

export default AnnouncementPage;
