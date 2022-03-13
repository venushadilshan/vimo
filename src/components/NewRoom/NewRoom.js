import React from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import { useState } from "react";



export default function NewRoom(props) {
console.log(props.isNewUser)

    return (
        <div className="flex flex-col mt-20 w-full p-5 pt-0">
            <div className="flex flex-row">
                <h3 className="text-slate-50 mb-2 text-md font-semibold">New Chat</h3>
            </div>
            <div className="flex flex-row items-center justify-center">
                {props.isNewUser==true? (
                <input type="text" placeholder="Your Name" className="w-full text-md rounded-md bg-gray-500 text-slate-50 px-2 outline-none" 
                 onChange={(e) => { props.setUsername(e.target.value) }} value={props.username}/>):(null)}

            </div>
            <div className="flex flex-row my-2 items-center justify-center">

                <input type="text" placeholder="Room ID" className="w-full text-md rounded-md bg-gray-500 text-slate-50 px-2 outline-none" 
                onChange={(e) => { props.setRoom(e.target.value) }} />
            </div>

            <div className="flex flex-row my-2 items-center justify-center">

                <button className="bg-blue-500 text-slate-50 px-2 py-1 text-sm rounded-md" onClick={props.joinRoom}>Join Room</button>
                <Link to="/"><button className="bg-red-500 text-slate-50 px-2 py-1  text-sm rounded-md ml-2">Cancel</button></Link>
            </div>
        </div>
    )
}