import ChatContact from "./ChatContact";
import React, { useState, useContext } from "react";
import { ChatContext } from "../../context/chatContext";

const ChatContactContainer = (props) => {
    const chatData = useContext(ChatContext)
    const [chatContactList, setChatContactList] = useState(chatData);
    
    
    return ( <div className="lg:flex hidden flex-col pt-14 overflow-y-scroll hide-scroll divide-y divide-gray-500  ">

        {
            props.roomList.map((item=>{
                return <ChatContact chatData={item} room={props.room}/>
            }))
        }
        
       
    </div>);
}
 
export default ChatContactContainer;