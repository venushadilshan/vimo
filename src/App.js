import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ChatRoom from './components/ChatRoom/ChatRoom';
import SideBar from './components/SideBar/SideBar';
import io from "socket.io-client";
//require('dotenv').config()

import { ChatContext, ChatContextProvider } from './context/chatContext';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import NoChat from './components/NoChat';

const socket = io.connect(process.env.REACT_APP_SERVER_URL,{ transports: ['websocket'] })
function App() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [room, setRoom] = useState("")
  const [showChat, setShowChat] = useState(false)
  const [roomList, setRoomList] = useState([])
  const [isNewUser, setIsNewUser] = useState(true)

  const joinRoom = () => {

    if (username != "" && room != "") {
      socket.emit("join_room", room)
      navigate("/chatroom");
      console.log(username)
      setRoomList([])
      setRoomList((list)=>[...list, room])
      setIsNewUser(false)

    }

    else {
      alert("Username or room cannot be empty")
    }

  }

  const exitRoom=()=>{
    setRoom("")
    //setUsername("")
    setIsNewUser(true)
    alert("You left the room")
    navigate("/");
  }


  return (
    <ChatContextProvider>
      <>

        <div className='container'>
          <div className='flex md:flex-row lg:flex-row flex-col  w-screen h-screen'>
            <div className='flex flex-col md:w-1/4 lg:w-1/4 w-full h-screen'>
              <SideBar socket={socket} username={username} setUsername={setUsername} room={room} setRoom={setRoom} joinRoom={joinRoom} roomList={roomList}
                setRoomList={setRoomList} isNewUser={isNewUser} setIsNewUser={setIsNewUser} exitRoom={exitRoom} />

            </div>
            <div className='flex flex-col md:w-3/4 lg:w-3/4 w-full h-screen'>
              <Routes>
                <Route path="/chatroom" element={<ChatRoom socket={socket} username={username} room={room} isNewUser={isNewUser} setIsNewUser={setIsNewUser} exitRoom={exitRoom}  />} />
                <Route path="/new" element={<NoChat />} />

                <Route path="/" element={<NoChat />}/>



              </Routes>
            </div>
          </div>

        </div>

      </>
    </ChatContextProvider>
  );
}

export default App;
