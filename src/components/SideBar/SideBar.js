import ChatContactContainer from "./ChatContactContainer";
import NavBar from "./NavBar";

const SideBar = () => {
    return ( <div className="flex flex-row bg-gary-800 w-full h-full relative bg-gray-600">
        <NavBar/>
        <ChatContactContainer/>
    </div> );
}
 
export default SideBar;