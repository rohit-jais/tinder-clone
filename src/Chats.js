import React from "react";
import Chat from "./Chat";
function Chats() {
  return (
  <div className="chats">
    <Chat
      name="Jeff"
      message="Hi I own Amazon!"
      timestamp="40 seconds ago"
      profilePic="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455"
    />
    <Chat
      name="Zaid"
      message="I'm Funny!"
      timestamp="2 mins ago"
      profilePic="https://pbs.twimg.com/profile_images/729909305588207616/7jPdJcht.jpg"
    />
    <Chat
      name="Elon"
      message="Hi My Car Drives itselves!"
      timestamp="14 minutes ago"
      profilePic="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg"
    />
    <Chat
      name="Zayn"
      message="Hi I was one of the One Direction!"
      timestamp="30 minutes ago"
      profilePic="https://media1.popsugar-assets.com/files/thumbor/efbuTJIaNqy0EJ-PRJTYI5wVxZE/8x154:1993x2139/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/02/24/876/n/1922398/46fadbc65e542bc2f40127.90581595_/i/Zayn-Malik.jpg"
    />
  </div>);
}

export default Chats;
