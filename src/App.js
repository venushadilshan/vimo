import logo from './logo.svg';
import './App.css';
import ChatRoom from './components/ChatRoom/ChatRoom';

function App() {
  return (
    <>
      <div className='container'>
        <div className='flex flex-row w-screen h-screen'>
          <div className='flex flex-col w-1/4 h-screen'>
            <h1>Side bar</h1>
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
