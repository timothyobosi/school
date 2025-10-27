
//Dumy service to simulate API responses

import type { LoginFormData, SignupFormData } from "../types/auth";

export const dummyLogin = (data:LoginFormData) : Promise<{success: boolean; message:string}> =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            if(data.email == 'test@example.com' && data.password == 'password123'){
                resolve({success:true, message:'Login successful'});
            }else{
                resolve({success:false, message: 'Invalid credentials'});
            }
        }, 1000);
    });
}

export const dummySignup = (data: SignupFormData) : Promise<{success: boolean; message:string}> =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve({success: true, message: 'Signup successful'});
        }, 1000);
    });
};