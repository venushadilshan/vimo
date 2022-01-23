import {MdSend} from "react-icons/md";
const SendMessage = () => {
    return (<div className="flex flex-row w-full bg-gray-800 items-center absolute bottom-0 px-5 py-2 ">

        <input type="text" className="text-sm h-8 p-2 w-full outline-none bg-gray-500 text-slate-50 rounded-full" placeholder="Send something" rows={1}/>
        <button className="bg-blue-500 mx-5 h-8 w-auto items-center p-2 text-slate-50 rounded-full flex flex-row"><MdSend/> </button>
    </div>);
}

export default SendMessage;