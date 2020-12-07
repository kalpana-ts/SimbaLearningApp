import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react'
import ChatApi from '../../api/ChatApi';
import ChatPage from './ChatPage';
import Thread from './Thread';

function ThreadPage() {
  const [threads, setThreads] = useState([]);
  const { id } = useParams();
  const { state } = useLocation();
  const locationState = state === null || state === undefined ? '' : state.thread;
  const [messageBox, setMessageBox] = useState({ threadId: id, thread: locationState });

  useEffect(() => {
    const getThreads = async () => {
      const response = await ChatApi.getAllThread();
      setThreads(response.data);
    };
    getThreads();
  }, []);

  const listOfThreads = threads.map(thread => (
    <Thread key={thread.id} setMessageBox={setMessageBox} thread={thread} />
  ));

  return (
    <div>

{/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" 
  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">{threads === [] ? 'loading...' : listOfThreads}</button>
  </div>
</div> */}

     
      <Dropdown className="chat-inbox-people" placeholder="Select teacher.."
      clearable options={threads === [] ? 'loading...' : listOfThreads} selection />


      <div className="messaging">
        <div className="inbox_msg">
          {/* <div className="inbox_people shadow-lg p-3 mb-5 bg-white rounded">
            <div className="headind_srch">
              <div className="recent_heading">
                <h4>Recent</h4>
              </div>
              <div className="srch_bar">
                <div className="stylish-input-group">
                  <input type="text" className="search-bar" placeholder="Search" />
                </div>
              </div>
            </div>
            <div className="inbox_chat scroll">
              <div className="chat_list active_chat">
                {threads === [] ? 'loading...' : listOfThreads}
              </div>
            </div>
          </div> */}
          
            {messageBox.thread === '' ? null : (
              <ChatPage id={messageBox.threadId} thread={messageBox.thread} />
            )}
          
        </div>
      </div>
    </div> 

  );
}

export default ThreadPage;
