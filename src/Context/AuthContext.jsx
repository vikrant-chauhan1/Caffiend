
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useState, useEffect, useContext, createContext } from 'react'
import { auth, db } from '../../Firebase'
import { doc, getDoc } from 'firebase/firestore'

const AuthContext = createContext()

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider(props){
    const{children} = props
    const [globalUser,setGlobalUser]= useState(null);
    const [globalData,setGlobalData]= useState(null);
    const [isLoading,setIsLoading]= useState(false);

   

    function signup(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }
    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }
    function logout(){
        setUser(null);
        setGlobalData(null);
        return signOut(auth)
    }
    function resetPassword(email){
        return sendPasswordResetEmail(auth,email)
    }
    
    

    const value ={globalUser,globalData,setGlobalData,isLoading,signup,login,logout}
    
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, async (user)=>{
            if(!user) {return} //if there is no user empty the userstate and return from this

            // if there is a user then check for its data in database and if they do then fetch the data and updatethe globalstate
            try{
                setIsLoading(true)
                // this is a reference to the document 
                const docRef = doc(db,"users",user.uid) ;
                // then we retrieve it or say snapshot it
                const docSnap= await getDoc(docRef);


            }
            catch(err){
                console.log(err.message)

            }finally{
                setIsLoading(true);
            }
        })
        return unsubscribe;

    },[])
   
    return(
       <AuthContext.Provider value={value}>
            {children}
       </AuthContext.Provider> 
    );
}