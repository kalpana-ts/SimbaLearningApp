import React, { useState } from "react";
import MessageApi from "../../api/MessageApi";
import { useHistory, Link } from "react-router-dom";

function Message({ message, inbox, getAllAgain, deleteMessage, user }) {
  const history = useHistory();
  //  console.log('user:',user);

  return (
    <>
      {inbox ? (
        <div className="incoming_msg" style={{ cursor: "pointer" }}>
          <div className="received_msg">
            <div className="received_withd_msg">
              <span className="sender-name">{message.sender.name}</span>

              {message.fileUrl === null ? (
                <p>{message.msgBody}</p>
              ) : (
                <div>
                  <p>{message.msgBody}</p>
                  <Link
                    className="reply-class"
                    to={{
                      pathname: "/replymessage",
                      state: { replyTo: message.sender },
                    }}
                  >
                    Reply
                  </Link>

                  <a
                    href={message.fileUrl}
                    className={
                      message.fileUrl === "" ? "show-msg" : "show-files-msg"
                    }
                  >
                    {message.fileUrl.match(".jpg" || ".png") ? (
                      <img
                        src={message.fileUrl}
                        class="img-fluid"
                        alt="Responsive image"
                      />
                    ) : (
                      <div class="embed-responsive embed-responsive-16by9">
                        <iframe
                          class="embed-responsive-item"
                          src={message.fileUrl}
                          allowfullscreen
                        ></iframe>
                      </div>
                    )}
                  </a>
                </div>
              )}

              <span className="time_date"> {message.date} </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="outgoing_msg">
          <div className="sent_msg">
            <span className="sender-name">{message.recipient.name}</span>

            {message.fileUrl === null ? (
              <p>{message.msgBody}</p>
            ) : (
              <div>
                <p>{message.msgBody}</p>
                <a
                  href={message.fileUrl}
                  className={
                    message.fileUrl === "" ? "show-msg" : "show-files-msg"
                  }
                >
                  {message.fileUrl.match(".jpg" || ".png") ? (
                    <img
                      src={message.fileUrl}
                      class="img-fluid"
                      alt="Responsive image"
                    />
                  ) : (
                    <div class="embed-responsive embed-responsive-16by9">
                      <iframe
                        class="embed-responsive-item"
                        src={message.fileUrl}
                        allowfullscreen
                      ></iframe>
                    </div>
                  )}
                </a>
              </div>
            )}

            <span className="time_date"> {message.date} </span>
          </div>
        </div>
      )}
    </>

    // <div className="d-flex align-items-center justi">
    //     <div className={`p-2 rounded-circle mr-3 mt-2 text-white
    //             ${inbox
    //                 ? (message.readByRecipient ? "bg-success" : "bg-danger")
    //                 : message.readBySender ? "bg-success" : "bg-danger"}`
    //             }>
    //     </div>
    //     <div className="card msg-tab mt-3 w-100">
    //         <div className="card-title m-0 p-1 d-flex justify-content-between">
    //             <div
    //                 className="mw-75"
    //                 onClick={handleOpenMessage}
    //                 style={{cursor: 'pointer'}}
    //             >
    //                 { inbox ? message.sender.name + ' : ' :
    //                 ' Sent to : ' + message.recipient.name + ' | ' } {message.msgSubject}
    //             </div>
    //             <button
    //                 className="btn btn-danger btn-sm align-self-start"
    //                 onClick={() => deleteMessage(message.id)}
    //             >
    //                 <i class="fas fa-trash"></i>
    //             </button>
    //             {/* { ((inbox && message.recipient.email === user.email) ||
    //             (!inbox && message.sender.email === user.email)) ?
    //             <button
    //                 className="btn btn-danger btn-sm align-self-start"
    //                 onClick={() => deleteMessage(message.id)}
    //             >Delete</button>
    //             : null} */}
    //         </div>
    //         {
    //             bodyIsOpen &&
    //             <div className="card-body">
    //                     {message.msgBody} <br/>
    //             </div>
    //         }
    //     </div>
    // </div>
  );
}

export default Message;
