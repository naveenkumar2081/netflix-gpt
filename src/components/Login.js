import { useState } from "react"
import Header from "./Header"


const Login = () => {
  const [isSignInform,setSignInForm]= useState(true);
  const toggleSignInForm=()=>{
    setSignInForm(!isSignInform)

  }
  return (
    <div>
    <Header/>
    
 
    <div className="absolute">
   <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_small.jpg"></img>
    </div>
    <form className="w-3/12 absolute p-12  bg-black my-36 mx-auto right-0 left-0 text-white">
      <h1 className="font-bold text-2xl">{isSignInform? "sign in " : "sign up"}</h1>
     {!isSignInform && ( <input type="text" className="p-4 my-4 bg-gray-700 w-full" placeholder="enter your name"></input> )}
     {!isSignInform && ( <input type="tel" className="p-4 my-4 bg-gray-700 w-full" placeholder="enter your phone number"></input> )}
      <input className="p-4 my-4 w-full bg-gray-700" type="text" placeholder="enter email address"></input>
      <input className="p-4 my-4 w-full bg-gray-700" type="password" placeholder="enter password"></input>

 <button className="bg-red-500 w-full p-4 my-4"> {isSignInform? "sign in" : "sign up"}</button>  
 <p className="p-4 my-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInform?"New to netflix sign up": "Already a user sign in"}</p>
    </form>
    </div>
  )
}

export default Login
