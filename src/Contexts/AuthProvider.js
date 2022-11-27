import React, { createContext, useEffect } from "react";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { app } from "./../firebase/firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// auth context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // create new user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // username
  const updateUser = profile => {
    return updateProfile(auth.currentUser, profile);
  };

  // google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // auth state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // logout user
  const logOutUser = () => {
    setLoading(true);
    localStorage.removeItem("accessToken");
    return signOut(auth);
  };

  // auth info
  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    updateUser,
    googleLogin,
    logOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
