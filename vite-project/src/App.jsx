import { PrimeReactProvider } from "primereact/api";
import { ChatList } from "react-chat-elements";
import { MessageList } from "react-chat-elements";
import React from "react";
const messageListReferance = React.createRef();
import { chat } from "./data";

export default function App() {
  return (
    <PrimeReactProvider>
      <div className="app">
        <div className="left">
          <ChatList className="chat-list" dataSource={chat} />
        </div>
        <div className="right"></div>
      </div>
    </PrimeReactProvider>
  );
}
