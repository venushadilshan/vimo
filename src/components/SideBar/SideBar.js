import NewRoom from "../NewRoom/NewRoom";
import ChatContactContainer from "./ChatContactContainer";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";

const SideBar = (props) => {
  return (<div className="flex flex-col bg-gary-800 w-full h-full relative bg-gray-600">

    <NavBar />
    <Routes>
      <Route path="/chatroom" element={<ChatContactContainer room={props.room} roomList={props.roomList} setRoomList={props.setRoomList} />} />
      <Route path="/new" element={<NewRoom socket={props.socket} username={props.username} setUsername={props.setUsername} room={props.room}
        setRoom={props.setRoom} joinRoom={props.joinRoom} />} />
    </Routes>
  </div>);
}

export default SideBar;