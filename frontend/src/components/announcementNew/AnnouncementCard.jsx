import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import CommentApi from "../../api/CommentApi";
import AnnouncementApi from "../../api/AnnouncementApi";

//use to display all announcements to both login
function AnnouncementCard({ announcement, user }) {
  const [announce, setAnnounce] = useState(announcement);
  const history = useHistory();
  const url = announce.imageUrl;

  const [userComment, setUserComment] = useState([]);
  useEffect(() => {
    getAllComments();
  }, []);

  function getAllComments() {
    CommentApi.getAllCommentsByAnnouncementId(announce.id).then((c) => {
      setUserComment(c.data);
    });
  }

  const updateLike = (e) => {
    e.preventDefault();
    const newAnnounce = {
      id: announce.id,
      title: announce.title,
      body: announce.body,
      date: announce.date,
      email: announce.email,
      imageUrl: announce.imageUrl,
      user: announce.user,
      likes: announce.likes + 1, // like click calculation
    };
    AnnouncementApi.updatePost(newAnnounce);
    setAnnounce(newAnnounce);
    history.push("/announce");
  };

  const deletePost = (e) => {
    e.preventDefault();
    AnnouncementApi.deletePost(announce.id).then(() => {
      AnnouncementApi.getAllPosts();
      // to refresh the list immediately
      // history.push('/announce');
      window.location.reload(true);
      //history.goBack();
    });
  };

  return (
    <div className="col-md-6 announcement-post">
      <section className="widget">
        <div className="widget-body">
          <div className="widget-top-overflow text-white">
            {url &&
              (url.match(".gif") ||
              url.match(".jpg") ||
              url.match(".png") ||
              url.match(".jpeg") ? (
                <image
                  src={announce.imageUrl}
                  className="img-fluid"
                  alt="Responsive image"
                />
              ) : (
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe title="announcement1"
                    className="embed-responsive-item"
                    src={announce.imageUrl}
                    allowfullscreen
                  ></iframe>
                </div>
              ))}
          </div>
          <div className="post-user mt-sm">
            <span className="thumb pull-left mr">
              <img className="img-circle" src={announce.user.imgUrl} alt="..." />
            </span>
            <h5 className="poster-detail">
              <span className="fw-semi-bold">{announce.user.name}</span>{" "}
            </h5>
            <h6>
              <span className="fw-semi-bold">{announce.user.email}</span>{" "}
            </h6>
          </div>
          <br />
          <h5 className="mb-xs mt-xs">
            <span className="fw-semi-bold">{announce.title}</span>{" "}
          </h5>
          <p className="fs-mini m txt-color">{announce.body} </p>
        </div>
        <footer className="bg-body-light">
          <ul className="post-links no-separator">
            <li classNameName="cmt-like">
              <button onClick={updateLike}>
                <i className="fa fa-heart"></i> {announce.likes}
              </button>
            </li>

            {user.email === announce.user.email ? (
              <button classNameName="btn btn-light mr-s" onClick={deletePost}>
                <i className="fas fa-trash"></i>
              </button>
            ) : null}
            <li classNameName="cmt-like">
              <a href="#">
                <i className="fa fa-comment"></i> {userComment.length}{" "}
              </a>
            </li>
            <li classNameName="btn-view">
              <Link
                classNameName="btn btn-outline-info"
                to={{
                  pathname: `/announce/${announce.id}`,
                  state: { announce },
                }}
              >
                View
              </Link>
            </li>
          </ul>
        </footer>
      </section>
    </div>
  );
}

export default AnnouncementCard;
