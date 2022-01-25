import ChatContact from "./ChatContact";
import { useState } from "react";

const ChatContactContainer = () => {
    const [chatContactList, setChatContactList] = useState([
        {
            "_id": "5454",
            "chatName": "Venusha",
            "time": "9.00 AM",
            "date": "20/01/2022",
            "lastMessage": "Hello! How you doing?",
            "unreadCount": "0"
        },
        {
            "_id": "5454",
            "chatName": "Resistance",
            "time": "9.00 AM",
            "date": "20/01/2022",
            "lastMessage": "Hello! How you doing?",
            "unreadCount": "04"
        },
        {
            "_id": "5454",
            "chatName": "Kumara",
            "time": "9.00 AM",
            "date": "20/01/2022",
            "lastMessage": "Hello! How you doing?",
            "unreadCount": "01"
        },
        {
            "_id": "5454",
            "chatName": "Gayan",
            "time": "9.00 AM",
            "date": "20/01/2022",
            "lastMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis facilisis enim quis accumsan. Morbi nec augue a nulla accumsan fringilla eget vel mi. Sed eu enim sollicitudin, hendrerit nunc efficitur, ",
            "unreadCount": "10"
        },
    ]);
    return ( <div className="container pt-14 overflow-y-scroll hide-scroll divide-y divide-gray-500 ">

        {
            chatContactList.map((item=>{
                return <ChatContact chatData={item}/>
            }))
        }
        
       
    </div>);
}
 
export default ChatContactContainer;