import ChatContainer from "./ChatContainer";
import ChatItem from "./ChatItem";
import SendMessage from "./SendMessage";
import TitleBar from "./TitleBar";
const ChatRoom = () => {
    return (
    <div className="container w-full relative">
        <TitleBar/>
        <ChatContainer/>
        <SendMessage/>
    </div>);
}

export default ChatRoom;