import express from 'express' ;
import prisma from '../db/db.js';

const app = express();
let PORT = 3000 ;

app.listen(PORT,()=>{
    console.log(`the server is running on ${PORT}`);
});

app.post('/login',(req,res)=>{
    
});


