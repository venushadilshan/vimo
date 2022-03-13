import ProfileIcon from "./ProfileIcon";
import { MdSearch,MdAccountCircle } from "react-icons/md";

const TitleBar = (props) => {
    console.log(props.users)
    return (
        <div className="flex flex-row w-full bg-gray-800 h-14 items-center absolute justify-between px-2">
            <div className="flex flex-row items-center">
                <ProfileIcon imageUrl={"https://cdn.iconscout.com/icon/free/png-256/chat-2130787-1794829.png"}/>
                <div className="flex flex-col items-start ">
                    <h1 className="text-lg text-slate-50 ml-2">{props.room}</h1>
                    <p className="text-sm text-slate-400 ml-3" style={{ fontSize: "0.6em" }}>{props.users} </p>
                </div>
            </div>

            <div className="flex flex-row items-center justify-end bg-gray-500 rounded-full m-0 px-3 py-1 text-lg text-slate-50 duration-300">
                {/*<input type="text" className=" rounded-full bg-gray-500 w-20 focus:w-full outline-none text-slate-50 text-sm p-1 pl-3 duration-300" />*/}
                <MdAccountCircle className="text-3xl mr-1 "/>
                <p >You: {props.username}</p>
               
            </div>

        </div>);
}

export default TitleBar;