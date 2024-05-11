import './App.css';
import React, { useState, useRef } from 'react';
import Auth from './components/Auth';
import Cookies from 'universal-cookie';
import Room from './components/Room';
import CreateRoom from './components/CreateRoom';

function App() {
  const cookies = new Cookies();

  const [token, setToken] = useState(cookies.get('auth-token'));
  const [room, setRoom] = useState(null);

  if (!token) {
    return (
      <Auth setToken={setToken} />
    );
  } else {
    return (
      <>
        {room ? <Room roomName={room} setToken={setToken} setRoom= {setRoom}/> : <CreateRoom setRoom= {setRoom} setToken={setToken}/>}
      </>
    );
  }
}

export default App;
