"use client"
import { GoogleLogin } from '@react-oauth/google'
import React from 'react'

function page() {
  return (
    <div>
         <GoogleLogin onSuccess={cred=>console.log(cred)}/>  
    </div>
  )
}

export default page