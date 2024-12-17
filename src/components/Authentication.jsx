import { use } from "react";
import { useState } from "react";


export default function Authentication(){

    const [isRegistration,setIsRegistration] =useState(false)
    const [email,setEmail]= useState("");
    const [password,setPassword] = useState("");
    const [isAuthenticating,setIsAuthenticating]= useState(false);

    async function handleAuthentication(){

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