import logo from './logo.svg';
import './App.css';
import React from 'react';
import ChatRoom from './components/ChatRoom/ChatRoom';
import SideBar from './components/SideBar/SideBar';

import {ChatContext, ChatContextProvider} from './context/chatContext';


function App() {
  

 
  return (
    <ChatContextProvider>
    <>
   
      <div className='container'>
        <div className='flex flex-row w-screen h-screen'>
          <div className='flex flex-col w-1/4 h-screen'>
           <SideBar/>
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
