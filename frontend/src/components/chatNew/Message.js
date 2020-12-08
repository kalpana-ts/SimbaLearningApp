import React, { useState } from "react";
import MessageApi from '../../api/MessageApi';


function Message({message, inbox, getAllAgain, deleteMessage, user}) {

    const [ bodyIsOpen, setBodyIsOpen ] = useState(false)

    const handleOpenMessage = () => { 
        setBodyIsOpen(!bodyIsOpen);

        if (inbox) {
            if (!message.readByRecipient) {

                const newMessage = {...message}
                newMessage.readByRecipient = true;

                MessageApi.updateMessage(newMessage)
                .then(() => {
                    getAllAgain(message.recipient.id);
                })
            }
        } else {
            if (!message.readBySender) {

                const newMessage = {...message}
                newMessage.readBySender = true;

                MessageApi.updateMessage(newMessage)
                .then(() => {
                    getAllAgain(message.sender.id);
                })
            }           
        }
    }

    return (

    
                    <div className="incoming_msg" style={{cursor: 'pointer'}} >

                        { inbox ? 
                        
                        <div className="received_msg">
                            <div className="received_withd_msg">
                                <span className="sender-name">{message.sender.name}</span>
                                <p>{message.msgBody}</p>
                                <span className="time_date"> 11:01 AM    |    June 9</span>
                            </div>
                        </div>
                        
                        :

                        <div className="outgoing_msg">
                            <div className="sent_msg">
                                <span className="sender-name">{message.recipient.name}</span>
                                <p>{message.msgBody}</p>
                                <span className="time_date"> 11:01 AM    |    Today</span> 
                            </div>
                        </div>

                        }  

                    </div>



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