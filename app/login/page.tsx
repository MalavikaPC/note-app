"use client"
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Login() {
  const [userDetails,setUserDetails]=useState({email:"",password:""})
  const handleLogin=async(e:any)=>{
    e.preventDefault()
    const {email,password}=userDetails
    if(email && password){
await signIn("credentials",{
  email,password,callbackUrl:'/dashboard'
})
    }
    else{
      toast.error("enter email & password")
    }

  }
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className=" bg-blue-300 rounded p-5 w-100">
        <h1 className="text-2xl font-bold text-center text-blue-800">
          Note Hub
        </h1>
<p className="text-white text-center font-bold mt-2">Login</p>
        <form onSubmit={handleLogin} className="space-y-4">
          
            <div className="my-3 w-full">
            <input value={userDetails.email} onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})} type="email" placeholder="Email" className="rounded bg-gray-100 p-3 w-full"/>
            </div>
          <div className="my-3 w-full">
            <input value={userDetails.password} onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})} type="password" placeholder="Password" className="rounded bg-gray-100 p-3 w-full"/>
            </div>
<div className="my-3 w-full text-center">
          <button
            type="submit"
            className="w-full bg-blue-800 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
          >
            Login
          </button>
          <p className="mt-3">New User? Click here to <Link href={'/register'} className="text-blue-800 underline">Register</Link></p>
          </div>
        </form>

        
      </div>
    </div>
  );
}