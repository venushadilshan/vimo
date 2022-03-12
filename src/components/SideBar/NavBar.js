import {MdSearch,MdInsertComment} from "react-icons/md";
import { useState } from "react";
const NavBar = () => {
    
    return ( <div className="flex flex-row w-full bg-gray-700 items-center absolute justify-between px-2 h-14">
  
    
   
    <h1 className="text-lg text-slate-50 ml-2 font-bold mr-3">VIMO</h1>
   <div className="flex flex-row items-center justify-end bg-blue-500 rounded-full p-2 text-lg text-slate-50 duration-300"> 
   {/* <input type="text" className=" rounded-full bg-gray-500 w-20 focus:w-full outline-none text-slate-50 text-sm p-1 pl-3 duration-300"  />
    <MdSearch/> */}
    <button><MdInsertComment/></button>
 
    </div>
   
   
    
   
</div> );
}
 
export default NavBar;