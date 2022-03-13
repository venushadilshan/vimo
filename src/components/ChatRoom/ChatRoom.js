import ChatContainer from "./ChatContainer";
import ChatItem from "./ChatItem";
import SendMessage from "./SendMessage";
import { useState } from "react";
import TitleBar from "./TitleBar";
const ChatRoom = (props) => {
    const [messageList, setMessageList] = useState([])
    const [users, setUsers] = useState([])
    return (
    <div className="container w-full relative">
        <TitleBar room={props.room} users={users} messageList={messageList} username={props.username} isNewUser={props.isNewUser} setIsNewUser={props.setIsNewUser} exitRoom={props.exitRoom} />
        <ChatContainer messageList={messageList} setMessageList={setMessageList} username={props.username} messageAutho/>
        <SendMessage messageList={messageList} setMessageList={setMessageList} room={props.room} socket={props.socket} username={props.username} setUsers={setUsers} users={users}/>
    </div>);
}

export default ChatRoom;