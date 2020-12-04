import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import ChatApi from '../../api/ChatApi';
import Auth from '../../services/Auth';
import receiverImg from '../../images/women_icon_1.png';
import senderImg from '../../images/women_icon_2.png';

function ChatPage({ id, thread }) {
  //const loggedInUser = window.sessionStorage.getItem('userEmail');
  const loggedInUser = Auth.getUserMail();
  const receiverEmail = loggedInUser === thread.p1Email ? thread.p2Email : thread.p1Email;
  const [messageText, setMessageText] = useState({ text: '' });
  const [messageArray, setMessageArray] = useState(thread.thread);

  const sendMessage = async () => {
    try {
      const response = await ChatApi.createMessage(id, receiverEmail, {
        messageBody: messageText.text,
        thread: { id: id },
        date: format(new Date(), 'dd-MMM-yyyy HH:MM')
      });
      setMessageArray([...messageArray, response.data]);
      setMessageText({ text: '' });
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = e => {
    e.preventDefault();
    sendMessage();
  };

  useEffect(() => {
    const poll = setInterval(() => {
      const updateThread = async () => {
        const response = await ChatApi.getThreadById(id);
        setMessageArray(response.data.thread);
      };
      updateThread();
    }, 1000);
    return () => clearInterval(poll);
  }, [id]);

  /* const messages =
    messageArray === null
      ? null
      : messageArray.map(message => {
          if (message.senderEmail === loggedInUser) {
            return (
              <div className="outgoing_msg" key={message.id}>
                <div className="sent_msg">
                  <p>{message.messageBody}</p>
                  <span className="time_date"> {message.date}</span>{' '}
                </div>
              </div>
            );
          } else {
            return (
              <div className="incoming_msg" key={message.id}>
                <div className="incoming_msg_img">
                  {' '}
                  <img src="/images/sender.jpeg" alt="name" />{' '}
                </div>
                <div className="received_msg">
                  <div className="received_withd_msg">
                    <p>{message.messageBody}</p>
                    <span className="time_date"> {message.date}</span>
                  </div>
                </div>
              </div>
            );
          }
        }); */


    const messages =
    messageArray === null
      ? null
      : messageArray.map(message => {
          if (message.senderEmail === loggedInUser) {
            return (
              // <div className="outgoing_msg" key={message.id}>
              //   <div className="sent_msg">
              //     <p>{message.messageBody}</p>
              //     <span className="time_date"> {message.date}</span>{' '}
              //   </div>
              // </div>

              <div className="outgoing_msg" key={message.id}>
                <div className="outgoing_msg_img pull-right">
                  {' '}
                  <img src={receiverImg} alt="name" />{' '}
                </div>
                <div className="sent_msg">
                  <p>{message.messageBody}</p>
                  <span className="time_date"> {message.date}</span>{' '}
                </div>
              </div>
    
            );
          } else {
            return (
              <div className="incoming_msg" key={message.id}>
                <div className="incoming_msg_img">
                  {' '}
                  <img src={senderImg} alt="name" />{' '}
                </div>
                <div className="received_msg">
                  <div className="received_withd_msg">
                    <p>{message.messageBody}</p>
                    <span className="time_date"> {message.date}</span>
                  </div>
                </div>
              </div>
            );
          }
        });

  return (
    <form>
      <div className="mesgs shadow-lg p-3 mb-5 bg-white rounded">
      <div className="msg_history">{messages}</div>
      <div className="type_msg">
        <div className="input_msg_write">
          <input
            autoFocus
            value={messageText.text}
            id="chatInput"
            type="text"
            className="write_msg"
            onChange={e => setMessageText({ text: e.target.value })}
            placeholder="Type a message"
          />
          <button className="msg_send_btn" onClick={handleClick} type="submit">
            <i className="fa fa-paper-plane" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      </div>
    </form>
  );
}

export default ChatPage;
