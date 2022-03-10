import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthContext } from "./providers/authcontext";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

export const useFirebase = () => {
  const [state, setState] = useState({ firebase });
  useEffect(() => {
    const app = firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth(app);
    const firestore = firebase.firestore(app);
    setState({ app, auth, firebase, firestore });
  }, []);
  return state;
};

export const useCollection = (path) => {
  const [data, setData] = useState([]);
  const { firestore } = useFirebase();
  useEffect(() => {
    if (firestore) {
      firestore.collection(path).onSnapshot((querySnapshot) => {
        var cities = [];
        querySnapshot.forEach((doc) => {
          cities.push({ id: doc.id, ...doc.data() });
        });
        setData(cities);
      });
    }
  }, [path, firestore]);
  return { data };
};
