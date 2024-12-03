import { createContext, useContext, useState } from "react";
import { app } from "../../firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
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

  const obj = {
    user,
    setUser,
    loading,
    setLoading,
    signUp,
    logIn,
  };
  return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

export const useAuthContext = () => {
  const data = useContext(AuthContext);
  return data;
};
