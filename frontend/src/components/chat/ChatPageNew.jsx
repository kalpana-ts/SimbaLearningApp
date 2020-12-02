import React from 'react';

function ChatPageNew() {
  return (
    /* <div classNameName="card border-primary mb-3">
      <div classNameName="card-header">Message Box</div>
      <div classNameName="card-body text-dark">
        <div classNameName="card text-white bg-primary mb-3">test</div>
        <div classNameName="card text-white bg-success mb-3">test</div>
        <form>
          <div classNameName="form-group">
            <input classNameName="form-control" id="chatInput" />
          </div>
          <button type="submit" classNameName="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </div> */

    <div className="messaging">
      <div className="inbox_msg">

      <div className="inbox_people">
        <div className="headind_srch">
        <div className="recent_heading">
          <h4>Recent</h4>
        </div>
        <div className="srch_bar">
          <div className="stylish-input-group">
          <input type="text" className="search-bar"  placeholder="Search" />
          </div>
        </div>
        </div>
        <div className="inbox_chat scroll">
        <div className="chat_list active_chat">
          <div className="chat_people">
          <div className="chat_img"> <img src="/images/sender.jpeg" alt="sunil"/> </div>
          <div className="chat_ib">
            <h5>Sameena <span className="chat_date">Dec 25</span></h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          </div>
        </div>
        <div className="chat_list">
          <div className="chat_people">
          <div className="chat_img"> <img src="/images/sender.jpeg" alt="sunil"/> </div>
          <div className="chat_ib">
            <h5>Snehal <span className="chat_date">Dec 25</span></h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          </div>
        </div>
        </div>
	    </div>


        <div className="mesgs">
          <div className="msg_history">
            <div className="incoming_msg">
              <div className="incoming_msg_img"> <img src="/images/sender.jpeg" alt="sunil"/> </div>
              <div className="received_msg">
              <div className="received_withd_msg">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus sodales dui in vulputate.</p>
                <span className="time_date"> 11:01 AM    |    June 9</span></div>
              </div>
            </div>
            <div className="outgoing_msg">
              <div className="sent_msg">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <span className="time_date"> 11:01 AM    |    Today</span> </div>
            </div>
            <div className="incoming_msg">
              <div className="incoming_msg_img"> <img src="/images/sender.jpeg" alt="sunil"/> </div>
              <div className="received_msg">
              <div className="received_withd_msg">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus sodales dui in vulputate. 
                  Nullam et metus et lacus vulputate viverra eu sed libero. Sed suscipit porttitor dui ut bibendum</p>
                <span className="time_date"> 11:01 AM    |    Today</span></div>
              </div>
            </div>
          </div>
          <div className="type_msg">
          <div className="input_msg_write">
            <input type="text" className="write_msg" placeholder="Type a message" />
            <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
          </div>
          </div>
      </div>


      </div>
    </div>

  );
}

export default ChatPageNew;
