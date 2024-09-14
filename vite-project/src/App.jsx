import { PrimeReactProvider } from "primereact/api";
import { ChatList } from "react-chat-elements";
import { MessageList } from "react-chat-elements";
messageListReferance = React.createRef();

const hulk = `data:image/jpeg;base64,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`;

const chat = [
  {
    avatar: hulk,
    alt: "Reactjs",
    title: "Facebook",
    subtitle: "What are you doing?",
    date: new Date(),
    unread: 0,
  },
  {
    avatar: hulk,
    alt: "Reactjs",
    title: "Instagram",
    subtitle: "See you again?",
    date: new Date(),
    unread: 0,
  },
  {
    avatar: hulk,
    alt: "Reactjs",
    title: "Youtube",
    subtitle: "I'll sue you!",
    date: new Date(),
    unread: 0,
  },
];

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
            ]}
          />
        </div>
      </div>
    </PrimeReactProvider>
  );
}
