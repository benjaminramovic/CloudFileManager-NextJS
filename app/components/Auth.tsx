import React from 'react'
import { auth } from '@/auth'
import { SignIn, SignOut } from './auth-component'

const Auth = async () => {
    const session = await auth()
    console.log(session?.user)
  return (
    <div className='flex justify-center items-center gap-1.5 flex-col'>
      <SignIn/>
      <SignOut/>
    </div>
  )
}

export default Auth
