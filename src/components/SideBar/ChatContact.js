import ProfileIcon from "../ChatRoom/ProfileIcon";
const ChatContact = () => {
    return (<div className="flex flex-row w-full h-auto items-center  bg-gray-600 hover:bg-gray-700">
        <div className="flex flex-col">
            <ProfileIcon />
        </div>
        <div className="flex flex-col h-auto w-full text-slate-50 ml-2">
            <div className="flex flex-row w-full justify-start items-center">
                <h1 className="font-semibold text-sm ml-1">Dilshan</h1>
                <p className="text-sm text-slate-400 ml-1" style={{ fontSize: "0.6em" }}>9.00AM 20/01/2020</p>
            </div>
             <p className="text-sm text-slate-50 ml-1">Meet me at the gym</p>
         

        </div>
        <div className="flex flex-col bg-blue-500 px-1  rounded-full mr-2 text-sm text-slate-50">
            10
        </div>

    </div>);
}

export default ChatContact;