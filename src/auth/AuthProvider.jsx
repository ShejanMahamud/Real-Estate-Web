import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import auth from './config/firebase.config';
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null);

  const emailPassRegister = (auth,email,password) => {
   return createUserWithEmailAndPassword(auth,email,password)
  }

  const emailPassLogin = (auth,email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }

  const googleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth,googleProvider);
  }

  const githubLogin = () => {
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth,githubProvider)
  }

  const logOut = () => {
    return signOut(auth)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false)
    })
    return () => unsubscribe();
  },[])

  const authInfo = {user,emailPassRegister,logOut,emailPassLogin,googleLogin,githubLogin,loading}
    
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
        <Toaster
  position="top-right"
  reverseOrder={true}
/>
    </AuthContext.Provider>
  )
}

export default AuthProvider