import { createContext, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, FacebookAuthProvider, signOut, signInWithPopup  } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import { useEffect } from "react";


export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()
const fbProvider = new FacebookAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signinWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const fbLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, fbProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, crntUser =>{
            setUser(crntUser)
            setLoading(false)
        })
        return ()=>unSubscribe();
    },[])

    const info = {createUser, loginUser, signinWithGoogle, user, logOut, loading, fbLogin}
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;