import React, { useState, useEffect } from "react";
import Auth from '../../services/Auth';
import UserApi from '../../api/UserApi';

import composeGif from '../../images/02.gif';
import inboxGif from '../../images/inbox.gif';
import sentGif from '../../images/Send_success.gif';

// Components
import Inbox from './Inbox';
import SentMessages from './SentMessages';
import NewMessageForm from "./NewMessageForm";

function ChatPage() {
    const [user, setUser] = useState({});
    const userMail = Auth.getUserMail();

    useEffect(() => {
        function getUserByMail() {
            UserApi.getUserByMail(userMail)
                .then((res) => {
                    setUser(res.data)
                })
        }

        userMail !== null && getUserByMail();
    }, [userMail])

    const [newMessageComponentOn, setNewMessageComponentOn] = useState(false);
    const [inboxComponentOn, setInboxComponentOn] = useState(true);
    const [sentMessagesComponentOn, setSentMessagesComponentOn] = useState(false);

    const handleClickCompose = () => {
        setNewMessageComponentOn(!newMessageComponentOn)
        setInboxComponentOn(false)
        setSentMessagesComponentOn(false)
    }
    const handleClickInbox = () => {
        setNewMessageComponentOn(false)
        setInboxComponentOn(!inboxComponentOn)
        setSentMessagesComponentOn(false)
    }
    const handleClickSent = () => {
        setNewMessageComponentOn(false)
        setInboxComponentOn(false)
        setSentMessagesComponentOn(!sentMessagesComponentOn)
    }

    return (

        <div className="row ChatPage">
        
            <div className="col-md-9 message-frame">
            <div className="messaging">
            <div className="inbox_msg">
                <div className="mesgs">
                    <div className="msg_history">
                    {newMessageComponentOn && <NewMessageForm user={user} />}
                    {inboxComponentOn && <Inbox user={user} />}
                    {sentMessagesComponentOn && <SentMessages user={user} />}
                    </div>
                </div>
            </div>
            </div>

        </div>

            <div className="col-md-3 btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-secondary btn-chat">
                    <img className="chat-page-icon" src={composeGif} alt="mail" />
                    <input type="radio" name="options" id="option1" autocomplete="off" checked onClick={handleClickCompose} /> New Messages
                </label>
                
                <label class="btn btn-secondary btn-chat active">
                    <img className="chat-page-icon" src={inboxGif} alt="mail" />
                    <input type="radio" name="options" id="option2" autocomplete="off" onClick={handleClickInbox} /> Your Messages
                </label>
                
                <label class="btn btn-secondary btn-chat">
                    <img className="chat-page-icon" src={sentGif} alt="mail" />  
                    <input type="radio" name="options" id="option3" autocomplete="off" onClick={handleClickSent} /> Sent Messages
                </label>
            </div>

        </div>


        // <div className="ChatPage">
        //     <div class="container d-flex justify-content-around mb-4 btn-group btn-group-toggle" data-toggle="buttons">
        //         <label class="btn btn-secondary">
        //             <input type="radio" name="options" id="option1" autocomplete="off" checked onClick={handleClickCompose} /> Compose
        //         </label>
        //         <label class="btn btn-secondary active">
        //             <input type="radio" name="options" id="option2" autocomplete="off" onClick={handleClickInbox} /> Inbox
        //         </label>
        //         <label class="btn btn-secondary">
        //             <input type="radio" name="options" id="option3" autocomplete="off" onClick={handleClickSent} /> Sent
        //         </label>
        //     </div>

        //     <div>
        //         {newMessageComponentOn && <NewMessageForm user={user} />}
        //         {inboxComponentOn && <Inbox user={user} />}
        //         {sentMessagesComponentOn && <SentMessages user={user} />}
        //     </div>

        // </div>
    );
}

export default ChatPage;