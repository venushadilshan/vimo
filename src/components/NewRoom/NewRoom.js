import React from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import { useState } from "react";



export default function NewRoom(props) {
    const [username, setUsername] = useState("")
    const [room, setRoom] = useState("")
    const [showChat, setShowChat] = useState(false)

    const joinRoom = () => {
        const newSocket = props.socket;
        if(username!=""&&room!="")
        {
            newSocket.emit("join_room", room)
            
        }

        else
        {
            alert("Username or room cannot be empty")
        }

    }
    return (
        <div className="flex flex-col mt-20 w-full p-5 pt-0">
            <div className="flex flex-row">
                <h3 className="text-slate-50 mb-2 text-md font-semibold">New Chat</h3>
            </div>
            <div className="flex flex-row items-center justify-center">
                <input type="text" placeholder="Your Name" className="w-full text-md rounded-md bg-gray-500 text-slate-50 px-2 outline-none" 
                 onChange={(e) => { setUsername(e.target.value) }}/>

            </div>
            <div className="flex flex-row my-2 items-center justify-center">

                <input type="text" placeholder="Room ID" className="w-full text-md rounded-md bg-gray-500 text-slate-50 px-2 outline-none" 
                onChange={(e) => { setRoom(e.target.value) }} />
            </div>

            <div className="flex flex-row my-2 items-center justify-center">

                <button className="bg-blue-500 text-slate-50 px-2 py-1 text-sm rounded-md" onClick={joinRoom}>Join Room</button>
                <Link to="/"><button className="bg-red-500 text-slate-50 px-2 py-1  text-sm rounded-md ml-2">Cancel</button></Link>
            </div>
        </div>
    )
}