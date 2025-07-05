import { Request,Response,NextFunction } from "express";
const jwt =require("jsonwebtoken");

interface AuthenticatedRequest extends Request {
    user?:any;
}

export const cookieJwtAuth =(req:AuthenticatedRequest,res:Response,next:NextFunction)=>{
    const token =req.cookies.token;
    try{
        //IMPORTANT PART
    const user =jwt.verify(token,process.env.My_Secret);
    req.user =user;
    next();

    }
    catch(err){
        res.clearCookie("token");
        return res.redirect("/")
    }
}