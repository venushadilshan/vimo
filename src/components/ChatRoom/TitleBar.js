import ProfileIcon from "./ProfileIcon";
import { MdSearch,MdAccountCircle } from "react-icons/md";
import {Link} from "react-router-dom"
const TitleBar = (props) => {
    console.log(props.users)
    return (
        <div className="flex flex-row w-full bg-gray-800 h-14 items-center absolute justify-between px-2">
            <div className="flex flex-row items-center">
                <ProfileIcon imageUrl={"https://cdn.iconscout.com/icon/free/png-256/chat-2130787-1794829.png"}/>
                <div className="flex flex-col items-start ">
                    <h1 className="text-lg text-slate-50 ml-2">{props.room}</h1>
                    <p className="text-sm text-slate-400 ml-3" style={{ fontSize: "0.8em" }}>You:{props.username} </p>
                </div>
            </div>

          
                {/*<input type="text" className=" rounded-full bg-gray-500 w-20 focus:w-full outline-none text-slate-50 text-sm p-1 pl-3 duration-300" />*/}
                
                {props.isNewUser===true ?
    (null):(

        <button className="bg-blue-500 rounded-full p-1 px-2 text-sm text-slate-50 duration-300" onClick={props.exitRoom}>Exit Room</button>
    )}
               
            

        </div>);
}

export default TitleBar;