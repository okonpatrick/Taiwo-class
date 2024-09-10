// AuthContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut as firebaseSignOut } from './firebase';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from "firebase/firestore"; // <-- Import Firestore functions
import { db } from './firebase'; // <-- Import your Firestore db instance

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/profile');
    } catch (error) {
      console.error(error);
    }
  };

  const signUp = async (email, password, userData) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save additional user info to Firestore
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        ...userData,
        email,
      });

      navigate('/profile');
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
