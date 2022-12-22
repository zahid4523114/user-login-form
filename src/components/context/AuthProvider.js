import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  //create user
  const userRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login user
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //verify email
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  //reset password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  //update user profile
  const userProfileUpdate = (userData) => {
    return updateProfile(auth.currentUser, userData);
  };

  // current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    userRegister,
    userLogin,
    verifyEmail,
    resetPassword,
    userProfileUpdate,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
