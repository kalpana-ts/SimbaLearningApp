import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import CommentApi from "../../api/CommentApi";
import AnnouncementApi from "../../api/AnnouncementApi";

function AnnouncementCard({ announcement , user}) {
  const [announce, setAnnounce] = useState(announcement);
  const history = useHistory();

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
      user: announce.user,
      likes: announce.likes + 1,
    };
    const response = AnnouncementApi.updatePost(newAnnounce);
    setAnnounce(newAnnounce);
    history.push("/announce");
  }

  const deletePost = (e)=>{
        e.preventDefault();
        AnnouncementApi.deletePost(announce.id)
          .then(() => {
            AnnouncementApi.getAllPosts(); // to refresh the list immediately
          // history.push('/announce');
          window.location.reload(true);
          //history.goBack();
         })
    }

  return (
    <div class="col-md-6 announcement-post">
      <section class="widget">
        <div class="widget-body">
          <div class="widget-top-overflow text-white">
            {announce.imageUrl &&
              (announce.imageUrl.match(
                ".jpg" || ".png" || ".jpeg" || ".gif"
              ) ? (
                <img
                  src={announce.imageUrl}
                  class="img-fluid"
                  alt="Responsive image"
                />
              ) : (
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe
                    class="embed-responsive-item"
                    src={announce.imageUrl}
                    allowfullscreen
                  ></iframe>
                </div>
              ))}
          </div>
          <div class="post-user mt-sm">
            <span class="thumb pull-left mr">
              <img
                class="img-circle"
                src={announce.user.imgUrl}
                alt="..."
              />
            </span>
            <h5 class="poster-detail">
              <span class="fw-semi-bold">{announce.user.name}</span>{" "}
            </h5>
            <h6>
              <span class="fw-semi-bold">{announce.user.email}</span>{" "}
            </h6>
          </div>
          <br />
          <h5 class="mb-xs mt-xs">
            <span class="fw-semi-bold">{announce.title}</span>{" "}
          </h5>
          <p class="fs-mini m txt-color">{announce.body} </p>
        </div>
        <footer class="bg-body-light">
          <ul class="post-links no-separator">
            <li className="cmt-like">
              {/* <a href="#"><span class="text-danger"><i class="fa fa-heart"></i> {announce.likes} </span></a> */}
              <button onClick={updateLike}>
                <i class="fa fa-heart"></i> {announce.likes}
              </button>
            </li>
            {user.email === announce.user.email ? (
              <button
                className="btn btn-light mr-s"
                onClick={deletePost}
              >
                <i class="fas fa-trash"></i>
              </button>
            ) : null}
            <li className="cmt-like">
              <a href="#">
                <i class="fa fa-comment"></i> {userComment.length}{" "}
              </a>
            </li>
            <li className="btn-view">
              <Link
                className="btn btn-outline-info"
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
