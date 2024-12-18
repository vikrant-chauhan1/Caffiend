import { use } from "react";
import { useState } from "react";
import { useAuth } from "../Context/AuthContext";




export default function Authentication(props){

    const [isRegistration,setIsRegistration] =useState(false)
    const [email,setEmail]= useState("");
    const [password,setPassword] = useState("");
    const [isAuthenticating,setIsAuthenticating]= useState(false);
    const [error,setError] = useState(null);

    const {signup,login}= useAuth()
    const {handleCloseModal}=props;

    async function handleAuthentication(){
        if(!email || !email.includes("@")|| !password || password.length <6|| isAuthenticating){
            return
        }
        try{
            setIsAuthenticating(true)
            setError(null);

            if(isRegistration){
                await signup(email,password)
            }else{
                await login(email,password)
            }
            handleCloseModal();
        }catch(err){
            console.log(err.message);
            setError(err.message);
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
            {error && (
                <p> ❌ Invalid Credentials</p>
                
            )}
            <input placeholder="Email" onChange={(e)=>{setEmail(e.currentTarget.value)}} />
            <input type="password" onChange={(e)=>{setPassword(e.currentTarget.value)}} placeholder="********" />
            <button onClick={handleAuthentication}><p>{isAuthenticating?"Authenticating...":"Submit"}</p></button>    
            <hr />
            <div className="register-content">
                <p>{isRegistration? "Already have an account?":"Don't have an account?"}</p>
                <button onClick={()=> setIsRegistration(!isRegistration)} ><p>{isRegistration? "Sign In" : "Sign Up"}</p></button>
            </div>

        
        
        </>
    );
}