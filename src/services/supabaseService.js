import supabase from "../config/supabaseClient";

async function signupUser(email,password){

    const { data , error } = await supabase.auth.signUp({
        email : email ,
        password : password
    });

    if(error){
        throw new Error(error.message);
    }

    return data ;
}

export {signupUser };
