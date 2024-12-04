import { createContext, useContext, useEffect, useState } from "react";
import { app } from "../../firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function signUp(email, password) {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logIn(email, password) {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  console.log(user);

  const obj = {
    user,
    setUser,
    loading,
    setLoading,
    signUp,
    logIn,
    updateUser,
  };
  return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

export const useAuthContext = () => {
  const data = useContext(AuthContext);
  return data;
};
