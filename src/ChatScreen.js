import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
    const [input, setInput] = useState('');
  const [message, setMessages] = useState([
    {
      name: "Jeff",
      image:
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455",
      message: "Whats Up",
    },
    {
      name: "Jeff",
      image:
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455",
      message: "I am Rich",
    },
    {
      name: "Jeff",
      image:
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455",
      message: "I own Amazon",
    },
    {
      message: "so what?",
    },
  ]);

  const handleSend = e => {
      e.preventDefault();
      setMessages([...message, {message: input }]);
      setInput("");
  }

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">YOU MATCHED WITH JEFF ON 10/10/20</p>
      {message.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__images"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text"> {message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser"> {message.message} </p>
          </div>
        )
      )}

        <form className="chatScreen__input">
          <input
            value = {input}
            onChange={e => setInput(e.target.value)}
            className="chatScreen__inputField"
            placeholder="Type a Message..."
            type="text"
          />
          <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
        </form>
      </div>
  );
}

export default ChatScreen;
