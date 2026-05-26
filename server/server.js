import express from 'express' ;
import cors from 'cors' ;
import connectDB from './configs/db.js';
import 'dotenv/config' ;
import {clerkMiddleware} from '@clerk/express';

const app = express() ;
const port = 3000 ;

await connectDB() ;
// Middleware 
app.use(express.json()) ;
app.use(cors()) ;
app.use(clerkMiddleware) ;

// API routes
app.get('/',(req,res)=>req.setEncoding('Server is Live!')) ;

app.listen(port,()=>{
    console.log(`Server listening at https://localhost:${port}`) ;
})