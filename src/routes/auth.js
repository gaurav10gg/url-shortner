import { json, Router } from "express";
import { passwordValidate } from "../utils/passwordValidate";
import { signupUser } from "../service/supabaseService";
const router = Router();

router.post('/signup',(req,res)=>{

    if(passwordValidate(req.body.pass)){
        try{
            const data = await signupUser(
                req.body.email,
                req.body.pass
            );

            return res.json(data);
        }
        catch(error){
            return res.json({
                message : error.message
            });
        }

    }
    else {
        return res.json({message : "Inavalid password"}) ;
    }

    
})
