import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AnnounceApi from '../../api/AnnounceApi';
import AnnounceCreateForm from './AnnounceCreateForm';

function NewAnnounce() {
  const [Announce, setAnnounce] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const createAnnounce = async () => {
      try {
        if (Announce !== null) {
          const response = await AnnounceApi.createAnnounce(Announce); // We need to check response success before redirecting.
          history.push('/announce');
        }
      } catch (error) {
        console.log(error);
      }
    };
    createAnnounce();
  }, [history, Announce]);

  return <AnnounceCreateForm setPost={setAnnounce} />;
}

export default NewAnnounce;
