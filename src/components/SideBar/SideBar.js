import NewRoom from "../NewRoom/NewRoom";
import ChatContactContainer from "./ChatContactContainer";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";

const SideBar = () => {
    return ( <div className="flex flex-col bg-gary-800 w-full h-full relative bg-gray-600">
       
        <NavBar/>
        <Routes>
        <Route path="/" element={<ChatContactContainer />} />
        <Route path="/new" element={<NewRoom />} />
      </Routes>
    </div> );
}
 
export default SideBar;