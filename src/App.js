import logo from './logo.svg';
import './App.css';
import ChatRoom from './components/ChatRoom/ChatRoom';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <>
      <div className='container'>
        <div className='flex flex-row w-screen h-screen'>
          <div className='flex flex-col w-1/4 h-screen'>
           <SideBar/>
          </div>
          <div className='flex flex-col w-3/4 h-screen'>
           <ChatRoom/>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
