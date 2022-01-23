import ProfileIcon from "./ProfileIcon";

const ChatItem = () => {
    return (
        <div className="flex flex-row w-full h-auto items-center my-5 ">
            <div className="flex flex-col">
                <ProfileIcon />
            </div>
            <div className="flex flex-col h-auto w-fill text-slate-50">
                <h1 className="font-semibold font-md">Dilshan</h1>
                <p className="text-md">Meet me at the gym</p>
                <p className="text-sm">9.00AM 20/01/2020</p>
            </div>
        </div>);
}

export default ChatItem;