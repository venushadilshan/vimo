import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ChatRoom from './components/ChatRoom/ChatRoom';
import SideBar from './components/SideBar/SideBar';
import io from "socket.io-client"
import {ChatContext, ChatContextProvider} from './context/chatContext';


const socket = io.connect("http://localhost:3005")
function App() {
  

 
  return (
    <ChatContextProvider>
    <>
   
      <div className='container'>
        <div className='flex flex-row w-screen h-screen'>
          <div className='flex flex-col w-1/4 h-screen'>
           <SideBar socket={socket}/>
          </div>
          <div className='flex flex-col w-3/4 h-screen'>
           <ChatRoom/>
          </div>
        </div>

      </div>
     
    </>
    </ChatContextProvider>
  );
}

export default App;
