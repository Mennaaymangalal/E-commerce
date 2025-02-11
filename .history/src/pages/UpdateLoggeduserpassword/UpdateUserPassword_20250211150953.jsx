import React, { useContext, useState } from 'react'
import {Input} from "@heroui/react";
import {Button} from "@heroui/react";
import { Formik, useFormik } from 'formik';
import * as Yup from "yup"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../Contexts/AuthContext/AuthContextProvider';


export default function UpdateUserPassword() {
  const [isLoading , setIsLoading] = useState(false)
  const [errMessage , setErrMessage] = useState("")
  const navigate = useNavigate()

  const initialValues =  {   
    email :"",
    password :"",  
    rePassword : "", 
  }

  function signup(){
    navigate("/register");
  }


 const {setIsLogedIn} = useContext(authContext)

  function onSubmit(values){
    setIsLoading(true)
   axios.post("https://ecommerce.routemisr.com/api/v1/users/changeMyPassword",he,values)
   .then(({data})=> {
       if(data.statusMsg == "success"){       
        setIsLogedIn(true)
        localStorage.setItem("token" , data.token)        
        navigate("/")
       }
   })
   .catch((err)=>{
    setErrMessage(err.response.data.message)
   })
   .finally(()=>{
    setIsLoading(false)
   })    
  }
  
  const validationSchema = Yup.object({
  
   email: Yup.string().required("Email is required").email("Invalid email"),
    password: Yup.string().required("Password is required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ ,"Password must be 8+ characters with a letter, number, and special character."),
    rePassword: Yup.string().required("Repassword is required").oneOf([Yup.ref("password")],"Password and Repassword must be the same" ),
   
  }) 

  const {values , handleChange , handleSubmit , errors , touched ,handleBlur} =useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  })

  
  return (
    <>
         <div className="mt-4 ">
        <form onSubmit={handleSubmit}>
        <div className="lg:w-2/3 m-auto grid md:grid-cols-2 gap-4">
        <h1 className='text-2xl font-bold'> Update Your password</h1>
     
      <Input isInvalid={touched.email && errors.email} errorMessage={errors.email} name='email'value={values.email} onChange={handleChange} onBlur={handleBlur} className='md:col-span-2 w-full'  variant='faded' label="Email" type="email" />
      <Input isInvalid={touched.password && errors.password} errorMessage={errors.password} name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} className='md:col-span-2 w-full'  variant='faded' label="Password" type="password" />
      <Input isInvalid={touched.rePassword && errors.rePassword} errorMessage={errors.rePassword} name='rePassword' value={values.rePassword} onChange={handleChange} onBlur={handleBlur} className='md:col-span-2 w-full' variant='faded' label="Repassword" type="password" />
      <Button disabled={isLoading} isLoading={isLoading} type='submit' className='my-2 md:col-span-2' color="primary">
      Update Your password
    </Button>   
    {errMessage && <p className='text-black dark:text-white text-small'>{errMessage}  <a href='#' onClick={forgetpassword} className='text-red-500 underline dark:text-red-500 '> Forget Password?</a></p>}
    </div>
    
        </form>
      </div>
    </>
  )
}
