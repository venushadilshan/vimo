import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ChatRoom from './components/ChatRoom/ChatRoom';
import SideBar from './components/SideBar/SideBar';
import io from "socket.io-client";

import { ChatContext, ChatContextProvider } from './context/chatContext';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import NoChat from './components/NoChat';

const socket = io.connect("http://localhost:3005")
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
          <div className='flex flex-row w-screen h-screen'>
            <div className='flex flex-col w-1/4 h-screen'>
              <SideBar socket={socket} username={username} setUsername={setUsername} room={room} setRoom={setRoom} joinRoom={joinRoom} roomList={roomList}
                setRoomList={setRoomList} isNewUser={isNewUser} setIsNewUser={setIsNewUser} exitRoom={exitRoom} />

            </div>
            <div className='flex flex-col w-3/4 h-screen'>
              <Routes>
                <Route path="/chatroom" element={<ChatRoom socket={socket} username={username} room={room} />} />
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
