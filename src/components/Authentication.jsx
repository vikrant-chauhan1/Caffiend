import { use } from "react";
import { useState } from "react";
import { useAuth } from "../Context/AuthContext";




export default function Authentication(){

    const [isRegistration,setIsRegistration] =useState(false)
    const [email,setEmail]= useState("");
    const [password,setPassword] = useState("");
    const [isAuthenticating,setIsAuthenticating]= useState(false);

    const {signup,login}= useAuth()


    async function handleAuthentication(){
        if(!email || email.includes("@")|| !password || password.length <6|| isAuthenticating){
            return
        }
        try{
            setIsAuthenticating(true)

            if(isRegistration){
                await signup(email,password)
            }else{
                await login(email,password)
            }
        }catch(err){
            console.log(err.message);
        }finally{
            setIsAuthenticating(false)
        }

        if(isRegistration){
            // register a user
        }else{
            // login a user
        }

    }
    return(
        <>
            <h2 className="sign-up-text">{isRegistration? "Sign Up" : "Login"}</h2>
            <p>{isRegistration?"Create an account" :"Sign in to your account!"}</p>
            <input placeholder="Email" onChange={(e)=>{setEmail(e.currentTarget.value)}} />
            <input type="password" onChange={(e)=>{setPassword(e.currentTarget.value)}} placeholder="********" />
            <button onClick={handleAuthentication}><p>Submit</p></button>    
            <hr />
            <div className="register-content">
                <p>{isRegistration? "Already have an account?":"Don't have an account?"}</p>
                <button onClick={()=> setIsRegistration(!isRegistration)} ><p>{isRegistration? "Sign In" : "Sign Up"}</p></button>
            </div>

        
        
        </>
    );
}