import React, { useState, useEffect, createContext, useContext } from "react";
import { useFirebase } from "../firebase";

export const AuthContext = createContext({
  user: {},
  login: () => {},
  loginErr: "",
  signUp: () => {},
  signUpErr: "",
  logOut: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loginErr, setLoginErr] = useState("");
  const [signUpErr, setSignUpErr] = useState("");
  const { auth, firebase } = useFirebase();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);
  const login = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let user = userCredential.user;
      })
      .catch((error) => {
        let errorMessage = error.code;
        setLoginErr(errorMessage);
      });
  };
  const signUp = (email, password) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let user = userCredential.user;
      })
      .catch((error) => {
        let errorMessage = error.code;
        setSignUpErr(errorMessage);
      });
  };
  const logOut = () => {
    auth.signOut();
  };
  return (
    <AuthContext.Provider
      value={{ login, loginErr, signUp, signUpErr, logOut, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};