import { json, Router } from "express";
import { passwordValidate } from "../utils/passwordValidate";
import { signupUser } from "../services/supabaseService";
const router = Router();

router.post('/signup', async (req,res)=>{

    try{
        if(passwordValidate(req.body.pass)){
            const data = await signupUser(
                req.body.email ,
                req.body.pass
            );
        return res.json(data);
        }
        else {
            return res.json({
                message : "Invalid password"
            });
        }
    }
    catch(error){

        return res.json({
            message : error.message 
        });
    }
});
