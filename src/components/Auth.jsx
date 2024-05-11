import React from "react";
import {auth, provider} from '../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import Cookies from 'universal-cookie'

const Auth = ({setToken}) => {
    const cookie= new Cookies();

    const handleSignup =async ()=>{
const result = await signInWithPopup(auth, provider);
cookie.set("auth-token", result.user.accessToken);
setToken(true)
    }

  return (
    <>
      <h1>Sign in with google to continue</h1>
      <button onClick={handleSignup}>Sign In</button>
    </>
  );
};

export default Auth;
