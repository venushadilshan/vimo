import ProfileIcon from "./ProfileIcon";
import { MdSearch } from "react-icons/md";

const TitleBar = () => {
    return (
        <div className="flex flex-row w-full bg-gray-800 h-14 items-center absolute justify-between px-2">
            <div className="flex flex-row items-center">
                <ProfileIcon imageUrl={"https://images.unsplash.com/photo-1611175140153-bfd26338ff0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"}/>
                <div className="flex flex-col items-start ">
                    <h1 className="text-lg text-slate-50 ml-2">Venusha Dilshan</h1>
                    <p className="text-sm text-slate-400 ml-3" style={{ fontSize: "0.6em" }}>Venusha, Dilshan</p>
                </div>
            </div>

            <div className="flex flex-row items-center justify-end bg-gray-500 rounded-full m-0 pr-3 text-lg text-slate-50 duration-300">
                <input type="text" className=" rounded-full bg-gray-500 w-20 focus:w-full outline-none text-slate-50 text-sm p-1 pl-3 duration-300" />
                <MdSearch />
            </div>

        </div>);
}

export default TitleBar;