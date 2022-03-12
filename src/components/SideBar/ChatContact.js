import { useState } from "react";
import ProfileIcon from "../ChatRoom/ProfileIcon";
import CountBadge from "./CountBadge";
const ChatContact = (props) => {
    //console.log(props.chatData)
   
    const chatData = props.chatData;
   // const lastMessageLength = chatData.lastMessage.length;
    return (
    
    <div className="flex flex-row w-full h-auto items-center  bg-gray-600 hover:bg-gray-700">
        <div className="flex flex-col">
            <ProfileIcon imageUrl="https://cdn.iconscout.com/icon/free/png-256/chat-2130787-1794829.png"/>
        </div>
        <div className="flex flex-col h-auto w-full text-slate-50 ml-2">
            <div className="flex flex-row w-full justify-start items-center">
                <h1 className="font-semibold text-sm ml-1">{props.room}</h1>
                <p className="text-sm text-slate-400 ml-1" style={{ fontSize: "0.6em" }}>{props.room+  " "+ props.room } </p>
            </div>
          {/*  <p className="text-sm text-slate-50 ml-1">{(lastMessageLength>60) ? props.room.substring(0,60)+"..." : props.room}</p>*/}


        </div>
     {/*   <CountBadge unreadCount={chatData.unreadCount}/>*/}

    </div>);
}

export default ChatContact;