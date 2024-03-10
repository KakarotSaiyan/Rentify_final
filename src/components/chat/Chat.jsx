import { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Person1</span>
          <p>Want to buy</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Person2</span>
          <p>Want to buy</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Person3</span>
          <p>Want to buy</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Person4</span>
          <p>Want to buy</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Person5</span>
          <p>Want to buy</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Person6</span>
          <p>Want to buy</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
              Vaibhav Saboo
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Yoo</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Yoo</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Yoo</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Yoo</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Yoo</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Yoo</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Yoo</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Yoo</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Yoo</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Yoo</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;