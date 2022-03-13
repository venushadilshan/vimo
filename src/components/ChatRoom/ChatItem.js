import { useEffect, useState } from "react";
import ProfileIcon from "./ProfileIcon";

const ChatItem = (props) => {
    const [you,setYou] = useState("justify-start")

    useEffect(()=>{
        if(props.messageAuthor==props.username)
        {
            setYou("justify-start")
        }
        else
        {
            setYou("justify-end")
        }
    },[])
  
    return (
        <div className={`flex flex-row w-full h-auto items-center my-5 duration-1000 fade-anim ${you}`}>
            <div className="flex flex-col">
                <ProfileIcon imageUrl="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"/>
            </div>
            <div className="flex flex-col h-auto  text-slate-50 ml-2 ">
                <div className="flex flex-row  justify-start items-center">
                <h1 className="font-semibold text-sm">{props.messageAuthor}</h1>
                <p className="text-sm text-slate-400 ml-2" style={{fontSize:"0.6em"}}>{props.datetime}</p>
                </div>
             
                <p className="text-sm w-full">{props.message} </p>
               
            </div>
        </div>);
}

export default ChatItem;