import { Request,Response } from "express-serve-static-core";
import { NextFunction } from "express-serve-static-core";


//core modules
const http =require('http');

//External module
const express =require('express');
const app=express();

//local module
const router=require('./routing/routing')
const hostrouter=require('./routing/hostrouter')

app.use(express.urlencoded({ extended: true }));


//middleware

// app.use("/",(req:Request,res:Response,next:NextFunction)=>{
//     console.log("came in first middleware",req.url,req.method)
//        next()

// })

// app.get("/",(req:Request,res:Response,next:NextFunction)=>{
//    res.send(`
//     <h1>Welcome register</h1>
//     <form action="/add"  method="POST">
//       <input type="text" name="username" />
//       <input type="submit">
//        </form>`
//     )
  

// })
app.use(router);
app.use(hostrouter)

// app.post("/add",(req:Request,res:Response,next:NextFunction)=>{
//     res.send(`Go back too main page ${req.body.username}
//        <a href="/">MAin page</a>
//        `
//     )
  

// })





const port=3000

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})