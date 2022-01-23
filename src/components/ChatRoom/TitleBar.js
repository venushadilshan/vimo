import ProfileIcon from "./ProfileIcon";

const TitleBar = () => {
    return (
    <div className="flex flex-row w-full bg-gray-800 items-center absolute justify-between px-2">
        <div className="flex flex-row items-center">
        <ProfileIcon/>
        <div className="flex flex-col items-start ">
        <h1 className="text-lg text-slate-50 ml-2">Venusha Dilshan</h1>
        <p className="text-sm text-slate-400 ml-3" style={{fontSize:"0.6em"}}>Venusha, Dilshan</p>
        </div>
        </div>
       
        <input type="text" className="mr-3 w-50 rounded-full bg-gray-500 outline-none text-slate-50 text-sm p-1" placeholder="Search this chat"/>
       
    </div>);
}

export default TitleBar;