import {MdSend} from "react-icons/md";
import {React, useEffect, useState} from "react";
import { list } from "postcss";


const SendMessage = (props) => {
    const [currentMessage, setCurrentMessage] = useState("");
    //const [messageList, setMessageList] = useState([])

    const sendMessage=async()=>{
        const messageData={
            room:props.room,
            author:props.username,
            message: currentMessage,
            time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()

        }

        await props.socket.emit("send", messageData)
        props.setMessageList((list)=>[...list, messageData])
    }

    useEffect(() => {
        props.socket.on("get_message",(data)=>{
            console.log(data)
            props.setMessageList((list)=>[...list, data])
            console.log("users :" + props.users)
          
       /*     if (props.users.length==0 || props.users.includes(data.author)!=true)
            {
                props.setUsers((list)=>[...list, data.author])
            }

            else if(props.users.includes(data.author) )
            {
                console.log("user exist in the array")
            }*/
           
        })
    }, [props.socket])


    return (<div className="flex flex-row w-full bg-gray-800 items-center absolute bottom-0 px-5 py-2 ">

        <input type="text" className="text-sm h-8 p-2 w-full outline-none bg-gray-500 text-slate-50 rounded-full" placeholder="Send something" rows={1} 
        onChange={(e)=>{setCurrentMessage(e.target.value)}}/>
        <button className="bg-blue-500 mx-5 h-8 w-auto items-center p-2 text-slate-50 rounded-full flex flex-row" onClick={sendMessage}><MdSend/> </button>
    </div>);
}

export default SendMessage;