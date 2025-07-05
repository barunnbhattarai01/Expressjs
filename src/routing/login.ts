import { Request, Response } from "express";

const jwt =require('jsonwebtoken');

const getuser =async (username:string)=>{
    return {userid:123,password:"12345",username:"barun"};
}


interface LoginForm{
    username:string;
    password:string;
}

module.exports =async (req:Request<{},{},LoginForm> ,res:Response):Promise<void> =>{
    const{username,password}=req.body; //we take the username and password from body
 const user =await getuser(username)   //asynchrous process 
 if(user.password!=password){
     res.status(403).json({
        error:"invalid login"
    });
    return;
    
 }
//important part

const token =jwt.sign(user,process.env.My_Secret,{expiresIn:"1h"});

res.cookie("token",token,{
    httpOnly:true,     //it allowesd to not to view using javascript(like document.cookie ) which prevent css

})
return res.redirect("/add");
 
}


