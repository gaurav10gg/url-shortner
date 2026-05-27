import express from 'express' ;
import prisma from '../db/db.js';
import dotenv from 'dotenv';
import dotenv from 'dotenv';

dotenv.config();


const app = express();
let PORT = 3000 ;

app.listen(PORT,()=>{
    console.log(`the server is running on ${PORT}`);
});



