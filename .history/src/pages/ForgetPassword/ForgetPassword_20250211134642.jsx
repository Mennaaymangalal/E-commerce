import React from 'react'
import React, { useContext, useState } from 'react'
import {Input} from "@heroui/react";
import {Button} from "@heroui/react";
import { Formik, useFormik } from 'formik';
import * as Yup from "yup"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../Contexts/AuthContext/AuthContextProvider';

export default function ForgetPassword() {
      const [isLoading , setIsLoading] = useState(false)
      const [errMessage , setErrMessage] = useState("")
      const navigate = useNavigate()

      const initialValues =  {   
        email :"",       
      }
    
   
     const {setIsLogedIn} = useContext(authContext)
    
      function onSubmit(values){
        setIsLoading(true)
       axios.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",values)
       .then(({data})=> {
           if(data.message == "success"){       
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
              <h1 className='text-2xl font-bold'>Reset Your Email</h1>
           
            <Input isInvalid={touched.email && errors.email} errorMessage={errors.email} name='email'value={values.email} onChange={handleChange} onBlur={handleBlur} className='md:col-span-2 w-full'  variant='faded' label="Email" type="email" />
                     
            <Button disabled={isLoading} isLoading={isLoading} type='submit' className='my-2 md:col-span-2' color="primary">
            Login
          </Button>   
          {errMessage && <p className='text-red-500 text-small'>{errMessage} ed-500 underline dark:text-red-500 '> Forget Password?</a></p>}
          </div>
         
              </form>
            </div>
    </>
  )
}
