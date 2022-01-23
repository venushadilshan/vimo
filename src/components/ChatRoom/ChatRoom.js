import ChatContainer from "./ChatContainer";
import ChatItem from "./ChatItem";
import TitleBar from "./TitleBar";
const ChatRoom = () => {
    return (
    <div className="container w-full relative">
        <TitleBar/>
        <ChatContainer/>
    </div>);
}

export default ChatRoom;