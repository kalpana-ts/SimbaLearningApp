import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
//import ErrorScreen from '../tempscreens/ErrorScreen';
import AnnounceApi from '../../api/AnnounceApi';
////import ChatApi from '../../api/ChatApi';
//import CommentsPage from '../comments/CommentsPage';

function SingleAnnounce() {
  const userEmail = window.sessionStorage.getItem('userEmail');
  const { state } = useLocation();
  const passedAnnounce = state === undefined ? null : state.post;
  const [Announce, setAnnounce] = useState(passedAnnounce);
  const history = useHistory();
  const isAnnouncer = userEmail === Announce.email;

  const handleClaim = () => {
    const setClaimed = async () => {
      try {
        const response = await AnnounceApi.updateAnnounce({ ...Announce, });
        setAnnounce(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    setClaimed();
  };

// //   const messageHandler = () => {
// //     const createOrDirect = async () => {
// //       try {
// //         const response = await ChatApi.createThread(Announce.email, {});
// //         const thread = response.data;
// //         history.push({ pathname: `/chat/${thread.id}`, state: { thread } });
// //       } catch (e) {
// //         console.log(e);
// //       }
// //     };
//     createOrDirect();
//   };
  try {
    return (
      <div className="singlePost-card">
        <div className="container-fliud">
          <div className="wrapper row">
            <div className="preview col-md-6">
              <div className="preview-pic tab-content">
                <div className="tab-pane active" id="pic-1">
                <h3 className="product-title">{Announce.title}</h3>
                </div>
              </div>
            </div>
            <div className="details col-md-6">
              <h3 className="product-title">{Announce.body}</h3>
              <div className="rating">
                <div className="stars">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star unchecked"></span>
                  <span className="fa fa-star unchecked"></span>
                </div>
                <span className="review-no">41 reviews</span>
              </div>
              <p className="product-description">{Announce.body}</p>

              {/* <CommentsPage />

              <div className="action">
                {isAnnouncer ? (
                  <button
                    className="singlePost-btn btn btn-default"
                    onClick={handleClaim}
                    type="button">
                    {Announce.claimed ? 'Set Available' : 'Set Claimed'}
                  </button>
                ) : null}

                {isAnnouncer ? null : (
                  <button
                    className="singlePost-btn btn btn-default"
                    onClick={messageHandler}
                    type="button">
                    Message Poster
                  </button> */}
                {/* )} */}

                <button className="like btn btn-default" type="button">
                  <span className="fa fa-heart"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
    //   </div>
    );
  } catch (e) {
    console.log(e);
    //return <ErrorScreen />;
  }
}
export default SingleAnnounce;
