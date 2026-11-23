"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Register() {
  const router = useRouter()
  const [userDetails, setUserDetails] = useState({
    name: "", email: "", password: ""
  })
  console.log(userDetails);
  const handleRegister = async (e: any) => {
    e.preventDefault()
    const { name, email, password } = userDetails
    if (!name || !email || !password) {
      toast.error("Please fill the form completely")
    }
    else {
      const res = await fetch('/api/register', {
        method: "POST",
        body: JSON.stringify(userDetails)
      })
      const serverResponse = await res.json()
      console.log(serverResponse);
      if (res.status == 201) {
        toast.success(serverResponse.message)
        router.push('/login')
      }
      else {
        toast.error(serverResponse.message)
      }
    setUserDetails({ name: "", email: "", password: "" })

    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className=" bg-blue-300 rounded p-5 w-100">
        <h1 className="text-2xl font-bold text-center text-blue-800">
          Note Hub
        </h1>
        <p className="text-white text-center font-bold mt-2">Register</p>
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="my-3 w-full">
            <input value={userDetails.name} onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })} type="text" placeholder="User name" className="rounded bg-gray-100 p-3 w-full" />
          </div>
          <div className="my-3 w-full">
            <input value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} type="email" placeholder="Email" className="rounded bg-gray-100 p-3 w-full" />
          </div>
          <div className="my-3 w-full">
            <input value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} type="password" placeholder="Password" className="rounded bg-gray-100 p-3 w-full" />
          </div>
          <div className="my-3 w-full text-center">
            <button
              type="submit"
              className="w-full bg-blue-800 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
            >
              Register
            </button>
            <p className="mt-3">Already a User? Click here to <Link href={'/login'} className="text-blue-800 underline">Login</Link></p>
          </div>
        </form>


      </div>
    </div>
  );
}


// "use client"
// import Link from "next/link"
// import { useRouter } from "next/navigation"
// import { useState } from "react"
// import toast from "react-hot-toast"

// export default function Register() {
//     const router = useRouter()
//     const [userDetails, setUserDetails] = useState({
//         name: "", email: "", password: ""
//     })

//     // console.log(userDetails)

//     const handleRegister = async (e: any) => {
//         e.preventDefault()
//         const { name, email, password } = userDetails
//         if (!name || !email || !password) {
//             toast.error("Please fill the form completely")
//         }
//         else {
//             const res = await fetch('/api/register', {
//                 method: "POST",
//                 body: JSON.stringify(userDetails)

//             })
//             // console.log(res);

//             const serverResponse = await res.json()
//             console.log(serverResponse);
//             if (res.status == 201) {
//                 toast.success(serverResponse.message)
//                 router.push('/login')
//             }
//             else {
//                 toast.error(serverResponse.message)
//             }
//             setUserDetails({ name: "", email: "", password: "" })
//         }
//     }
//     return (
//         <div className="flex items-center justify-center min-h-screen">
//             <div className="bg-blue-400 p-5 rounded w-100">
//                 <h1 className="text-center text-2xl text-white font-bold">Note Hub</h1>
//                 <p className="text-white">Register</p>
//                 <form onSubmit={handleRegister}>
//                     <div className="my-3 w-full">
//                         <input value={userDetails.name} onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })} type="text" placeholder="User Name" className="rounded bg-gray-100 p-3 w-full" />
//                     </div>
//                     <div className="my-3 w-full">
//                         <input value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} type="email" placeholder="Email" className="rounded bg-gray-100 p-3 w-full" />
//                     </div>
//                     <div className="my-3 w-full">
//                         <input value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} type="password" placeholder="Password" className="rounded bg-gray-100 p-3 w-full" />
//                     </div>
//                     <div className="my-3 w-full text-center">
//                         <button type="submit" className="bg-blue-800 p-2 text-white rounded w-full font-bold">Register</button>
//                         <p className="mt-3">Already a User? Click here to <Link href={'/login'} className="text-blue-800 underline">Login</Link></p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }