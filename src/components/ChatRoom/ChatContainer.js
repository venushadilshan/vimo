import { useState } from "react";
import ChatItem from "./ChatItem";

const ChatContainer = (props) => {
    console.log(props.messageList)
   
    return (<div className="container bg-gray-700 px-5 h-screen py-10 overflow-y-scroll hide-scroll ">
        {props.messageList.map((item) => {
            return <ChatItem message={item.message} username={props.username} messageAuthor={item.author} datetime={item.time}/>;
        })}


    </div>);
}

export default ChatContainer;