"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ButtonGradient from './ButtonGradient';
import { FcGoogle } from "react-icons/fc";
const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data:any) => {
    console.log(data);
  };

  const [emailFieldActive,setEmailFieldActive]=useState(false)
  const [passwordFieldActive,setPasswordFieldActive]=useState(false)

  return (
    <div className='flex w-5/6 justify-evenly mx-auto mt-10 py-4 bg-black rounded-3xl max-2xl:pb-12 max-sm:w-full'>
        <div className='max-2xl:hidden'>
            <img src='image-assets/login-section.png'/>
        </div>
        <div>
        <h1 className='w-fit mx-auto my-10'>Login</h1>
        <div style={{border:"2px solid grey"}} className='w-80 mx-auto text-3xl flex items-center gap-4 px-12 py-1 rounded-xl'><FcGoogle/><div className='text-lg font-medium'>Login with google</div></div>
        <div style={{border:"1px solid grey"}} className='w-44 mx-auto mt-10 mb-4'></div>
        <div className='w-fit mx-auto px-2 relative bottom-7 bg-black'>OR</div>
 <form onSubmit={handleSubmit(onSubmit)} className="w-80 mx-auto -mt-4">
      <div className="mb-4 form-field">
        <label htmlFor="email" className={`block relative ${emailFieldActive?"top-0 left-0":"top-5 left-3"} transition-all duration-500 text-white`}>Email</label>
        <input
        style={{borderBottom:"2px solid grey"}}
          type="text"
          id="email"
          {...register("email")}
          className="w-full bg-transparent outline-none"
          onClick={()=>{setEmailFieldActive(true)}}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message?.toString()}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="password" className={`block relative ${passwordFieldActive?"top-0 left-0":"top-5 left-3"} transition-all duration-500 text-white`}>Password</label>
        <input
        style={{borderBottom:"2px solid grey"}}
          type="password"
          id="password"
          {...register("password")}
          className="w-full bg-transparent outline-none"
          onClick={()=>{setPasswordFieldActive(true)}}
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message?.toString()}</p>}
      </div>
    <div className='w-fit mx-auto'><button className='button-gradient p-0.5 text-lg rounded-md' type='submit'>   <div className=' px-12 py-1 rounded-md cursor-pointer font-semibold text-lg bg-black '>
        <div className='button-gradient-inner'>Login </div>
    </div></button></div>
      
      <div className='text-white w-fit mx-auto mt-2'>Dont have an account? <span style={{color:"#00DC82"}} className='underline'>Get Started</span> </div>
    </form>
    </div>
    </div>
   
   
  );
}

export default LoginForm;
