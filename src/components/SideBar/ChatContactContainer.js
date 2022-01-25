import ChatContact from "./ChatContact";
import React, { useState, useContext } from "react";
import { ChatContext } from "../../context/chatContext";

const ChatContactContainer = () => {
    const chatData = useContext(ChatContext)
    const [chatContactList, setChatContactList] = useState(chatData);
    
    return ( <div className="container pt-14 overflow-y-scroll hide-scroll divide-y divide-gray-500 ">

        {
            chatContactList.map((item=>{
                return <ChatContact chatData={item}/>
            }))
        }
        
       
    </div>);
}
 
export default ChatContactContainer;