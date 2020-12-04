import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../services/Auth';
import senderImg from '../../images/women_icon_2.png';

function Thread({ thread, setMessageBox }) {
  //const senderMail = window.sessionStorage.getItem('userEmail');
  const senderMail = Auth.getUserMail();
  const receiverEmail = senderMail === thread.p1Email ? thread.p2Email : thread.p1Email;
  const receiverMessage = thread.receiverMessage;

  const clickHandler = () => {
    setMessageBox({ threadId: thread.id, thread: thread });
  };
  const lastMessage = thread.thread.slice(-1)[0];
  const lastDate = lastMessage === undefined ? null : lastMessage.date;

  // Massive Blue Boxes
  return (
    <div className="chat_people">
      <div className="chat_img">
        {' '}
        <img style={{height:'45px', width:'45px'}} src={senderImg} alt="name" />{' '}
      </div>
      <div className="chat_ib">
        <h5>
          <Link to="/chat" onClick={clickHandler}>
            {receiverEmail}
          </Link>
          <span className="chat_date">{lastDate}</span>
        </h5>
        <p>{receiverMessage}</p>
      </div>
    </div>
  );
}

export default Thread;
