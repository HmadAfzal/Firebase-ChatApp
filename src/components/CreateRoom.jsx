import React, {useRef} from 'react'
import { signOut } from "firebase/auth";
import Cookies from 'universal-cookie'
import { auth } from "../firebase-config";

const CreateRoom = ({setRoom, setToken}) => {
    const inputRef=useRef();
    const cookie= new Cookies();

    const Signout=()=>{
        signOut(auth);
    cookie.remove("auth-token");
    setToken(false);
    setRoom(false)
    
    }

  return (
    <>
    <h1>Create / Enter room</h1>
    <input type="text" placeholder='room name' ref={inputRef} /> <br /> <br />
    <button onClick={()=>{setRoom(inputRef.current.value)}} >Save</button> <br />
    <button onClick={Signout}>SignOut</button>

    </>
  )
}

export default CreateRoom