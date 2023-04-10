import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { auth, provider } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  let navigate = useNavigate()


  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/blog");
    } catch (error) {
      toast(error.code, { type: "error" })
    }
  }

  const handleGoogleSignIn = async () => {
    await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = provider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      // const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      console.log(result);
      navigate("/blog");
    }).catch((error) => {
      toast(error.code, { type: "error" });
      toast(error.message, { type: "error" });
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      // const credential = provider.credentialFromError(error);
    });
  }

  


  return (
    <div className=''>
      <div className="mx-4 mt-10 font-bold text-[25px] text-center text-white">Login</div>

      <div className="flex flex-col justify-center items-center mb-10">
          
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
          <button className='w-[150px] h-[50px] rounded-[8px] bg-blue-600 font-bold text-white' type="button" onClick={handleSignIn}>Login</button>
      </div>
      <div className="flex justify-center items-center mt-10">
        <button onClick={handleGoogleSignIn} className="text-primary font-bold w-[200px] h-[40px] bg-text-gradient rounded-[7px]">Sign in with Google?</button>
      </div>
    </div>
  )
}


export default Login