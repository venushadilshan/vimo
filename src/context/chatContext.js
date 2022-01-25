import React, { createContext, useState, useEffect } from "react";
const chatData = [
    {
        "_id": "5454",
        "chatName": "Venusha",
        "time": "9.00 AM",
        "date": "20/01/2022",
        "lastMessage": "Hello! How you doing?",
        "unreadCount": "0",
        "imageUrl": "https://images.unsplash.com/photo-1627087820883-7a102b79179a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
        "_id": "5454",
        "chatName": "Resistance",
        "time": "9.00 AM",
        "date": "20/01/2022",
        "lastMessage": "Hello! How you doing?",
        "unreadCount": "04",
        "imageUrl": "https://images.unsplash.com/photo-1611175140153-bfd26338ff0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
    },
    {
        "_id": "5454",
        "chatName": "Kumara",
        "time": "9.00 AM",
        "date": "20/01/2022",
        "lastMessage": "Hello! How you doing?",
        "unreadCount": "01",
        "imageUrl": "https://images.unsplash.com/photo-1611175140153-bfd26338ff0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
    },
    {
        "_id": "5454",
        "chatName": "Gayan",
        "time": "9.00 AM",
        "date": "20/01/2022",
        "lastMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis facilisis enim quis accumsan. Morbi nec augue a nulla accumsan fringilla eget vel mi. Sed eu enim sollicitudin, hendrerit nunc efficitur, ",
        "unreadCount": "10",
        "imageUrl": "https://images.unsplash.com/photo-1611175140153-bfd26338ff0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
    },
]
const ChatContext = createContext(chatData);
const ChatContextProvider = ({ children }) => {
    return (
      
        <ChatContext.Provider value={chatData}>
            {children}
        </ChatContext.Provider>
    )
}
export { ChatContext, ChatContextProvider };