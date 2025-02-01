import React, { useState } from 'react'
import {Input} from "@heroui/react";
import {Button} from "@heroui/react";
import { Formik, useFormik } from 'formik';
import * as Yup from "yup"
import axios from 'axios';


export default function Address() {
  const [isLoading , setIsLoading] = useState(false) 


  const initialValues =  {    
    city :"Mansoura",
    details : "Samya elgamal",   
    phone :"01010700701"      
  }


  const validationSchema = Yup.object({
   city: Yup.string().required("Name is required").min(3,"Name must be at leaste 3 charachters").max(20, "Name must be at most 20 charachters"),
   : Yup.string().required("Name is required").min(3,"Name must be at leaste 3 charachters").max(20, "Name must be at most 20 charachters"),
   phone: Yup.string().required("Phone is required").matches(/^01[0125][0-9]{8}$/, "Invalid number. Use 010, 011, 012, or 015, with 8 digits."),
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
        <div className="w-2/3 m-auto grid md:grid-cols-2 gap-4">
        <h1 className='text-2xl font-bold'>Register Now</h1>
      <Input isInvalid={touched.name && errors.name} errorMessage={errors.name} name='name' value={values.name}  onChange={handleChange} onBlur={handleBlur} className='md:col-span-2' variant='faded' label="Name" type="text" />
      <Input isInvalid={touched.email && errors.email} errorMessage={errors.email} name='email'value={values.email} onChange={handleChange} onBlur={handleBlur} className='md:col-span-2'  variant='faded' label="Email" type="email" />
      <Input isInvalid={touched.password && errors.password} errorMessage={errors.password} name='password' value={values.password} onChange={handleChange} onBlur={handleBlur}  variant='faded' label="Password" type="password" />
      <Input isInvalid={touched.rePassword && errors.rePassword} errorMessage={errors.rePassword} name='rePassword' value={values.rePassword} onChange={handleChange} onBlur={handleBlur} variant='faded' label="Repassword" type="password" />
      <Input isInvalid={touched.phone && errors.phone} errorMessage={errors.phone} name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur} className='md:col-span-2'  variant='faded' label="Phone" type="text" />
      <Button disabled={isLoading} isLoading={isLoading} type='submit' className='my-2 md:col-span-2' color="primary">
      Sign Up
    </Button>
    {errMessage && <p className='text-red-500 text-small'>{errMessage}</p>}
    </div>
        </form>
      </div>
    </>
  )
}

