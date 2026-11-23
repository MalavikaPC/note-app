//register controller :POST
import users from '@/models/userModel'
import { connectDB } from "@/lib/mongodb"
import {NextRequest, NextResponse} from "next/server"
import bcrypt from 'bcryptjs'

export async function POST(req:NextRequest){
 try{
    await connectDB()
 const {name,email,password}=await req.json()
 const existingUser=await users.findOne({email})
 if(existingUser){
    return NextResponse.json({message:"Already Registered...Please Login",data:{}},{status:409})
 }
 else{
const encryptedPassword=await bcrypt.hash(password,10)
const newUser=await users.create({name,email,password:encryptedPassword})
return NextResponse.json({message:"User Registered Successfully",data:newUser},{status:201})
 }
 }
 catch (err) {
    console.log(err);
    return NextResponse.json({message:"Something went wrong",data:{}},{status:500})
    
 }
}