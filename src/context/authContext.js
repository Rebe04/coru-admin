import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { auth, fireStore } from "../firebase/credenciales";
import React, { createContext, useEffect, useState } from "react";

export const authContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [usersData, setUsersData] = useState([]);
  const [habitsData, setHabitsData] = useState([]);
  const [exersicesData, setexErsicesData] = useState([]);
  const [sessions, setSessions] = useState([]);

  const signUp = async (email, password, role, username) => {
    try {
      const infoUsuario = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const docuRef = doc(fireStore, `users/${infoUsuario.user.uid}`);
      setDoc(docuRef, { username: username, coreo: email, role: role });
    } catch (error) {
      console.log(error);
    }
  };

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => {
    signOut(auth);
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const getDataFirebase = async () => {
    let users = await getDocs(collection(fireStore, "users"));
    let sessions = await getDocs(collection(fireStore, "sessions"));
    let habits = await query(
      collection(fireStore, "sessions"),
      where("type", "==", "session")
    );
    let exercises = await query(
      collection(fireStore, "sessions"),
      where("type", "==", "exercise")
    );
    let listado = [];
    users.forEach((user) => {
      let objeto = user.data();
      objeto.id = user.id;
      listado.push(objeto);
    });
    let sessionsData = [];
    sessions.forEach((session) => {
      let objeto = session.data();
      objeto.id = session.id;
      sessionsData.push(objeto);
    });
    setUsersData(listado);
    setHabitsData(habits);
    setexErsicesData(exercises);
    setSessions(sessionsData);
  };

  const firebaseBuscarDoc = async (coleccion, id) => {
    let consulta = doc(fireStore, coleccion, id);
    let resultado = await getDoc(consulta);
    return resultado;
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      getDataFirebase();
    });
    return () => unSubscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        login,
        user,
        logout,
        signUp,
        loading,
        loginWithGoogle,
        getDataFirebase,
        usersData,
        habitsData,
        exersicesData,
        firebaseBuscarDoc,
        sessions,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
