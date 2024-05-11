import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase-config";
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  where,
  query,
  orderBy,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import Cookies from 'universal-cookie'

const Room = ({ roomName , setToken, setRoom}) => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messageRef = collection(db, "messages");
  const cookie= new Cookies();

  useEffect(() => {
    const queryMessages = query(messageRef, where("room", "==", roomName),(orderBy("createdAt")));
   const unsubscribe= onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });

      setMessages(messages);
    });
    return ()=> unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage === "") return;
    await addDoc(messageRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room: roomName,
    });
    setNewMessage("");
  };


const Signout=()=>{
    signOut(auth);
cookie.remove("auth-token");
setToken(false);
setRoom(false)

}

  return (
    <>
      <h1>{roomName}</h1>
      <form onSubmit={handleSubmit}>
        {messages.map((message, i) => {
          return <div key={i}>
           <h3>{message.user}</h3> 
           <h4>{message.text}</h4>
            </div>;
        })}

        <input
          type="text"
          name="message"
          placeholder="message..."
          onChange={(e) => {
            setNewMessage(e.target.value);
          }}
          value={newMessage}
        />
        <button type="submit">send</button>
      </form>
      <br />  
      <button onClick={Signout}>SignOut</button>
    </>
  );
};

export default Room;
