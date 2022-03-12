import NewRoom from "../NewRoom/NewRoom";
import ChatContactContainer from "./ChatContactContainer";
import NavBar from "./NavBar";

const SideBar = () => {
    return ( <div className="flex flex-col bg-gary-800 w-full h-full relative bg-gray-600">
        <NavBar/>
        <NewRoom/>
        <ChatContactContainer/>
    </div> );
}
 
export default SideBar;