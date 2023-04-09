import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    let navigate = useNavigate()

    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            updateProfile(auth.currentUser, { displayName: name });
            navigate("/blog");
        } catch (error) {
            toast(error.code, { type: "error" })
        }
        
    }



  return (
    <div className=''>
        <div className="mx-4 mt-10 font-bold text-[25px] text-center text-white">Register</div>

        <div className="flex flex-col justify-center items-center mb-10">
            <div className='flex flex-col justify-center items-start my-2'>
                <label className='text-white' htmlFor=''>Name</label>
                <input className='w-[300px] h-[30px]' onChange={(e) => {setName(e.target.value)}} type='text' name='name' placeholder='Enter your name' />
            </div>

            <div className='flex flex-col justify-center items-start my-2'>
                <label className='text-white' htmlFor=''>Email</label>
                <input className='w-[300px] h-[30px]' onChange={(e) => {setEmail(e.target.value)}} type='email' name='email' placeholder='Enter your Email' />
            </div>

            <div className='flex flex-col justify-center items-start my-2'>
                <label className='text-white' htmlFor=''>Password</label>
                <input className='w-[300px] h-[30px]' onChange={(e) => {setPassword(e.target.value)}} type='password' name='passsword' placeholder='Enter your password' />
            </div>
        </div>
        

        <div className='flex justify-center items-center'>
            <button className='w-[150px] h-[50px] rounded-[8px] bg-red-600 text-white font-bold' type="button" onClick={handleSignUp}>Register</button>
        </div>
    </div>
  )
}


export default Register