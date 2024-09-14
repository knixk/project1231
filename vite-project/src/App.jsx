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
        <div className="right">
          <MessageList
            referance={messageListReferance}  
            className="message-list"
            lockable={true}
            toBottomHeight={"100%"}
            dataSource={[
              {
                position: "right",
                type: "text",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                date: new Date(),
              },
              {
                position: "right",
                type: "text",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                date: new Date(),
              },
            ]}
          />
        </div>
      </div>
    </PrimeReactProvider>
  );
}
