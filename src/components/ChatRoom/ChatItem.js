import ProfileIcon from "./ProfileIcon";

const ChatItem = () => {
    return (
        <div className="flex flex-row w-full h-auto items-center my-5 ">
            <div className="flex flex-col">
                <ProfileIcon />
            </div>
            <div className="flex flex-col h-auto w-full text-slate-50 ml-2">
                <div className="flex flex-row w-full justify-start items-center">
                <h1 className="font-semibold text-sm">Dilshan</h1>
                <p className="text-sm text-slate-400 ml-2" style={{fontSize:"0.6em"}}>9.00AM 20/01/2020</p>
                </div>
             
                <p className="text-sm w-4/5">Meet me at the gym </p>
               
            </div>
        </div>);
}

export default ChatItem;