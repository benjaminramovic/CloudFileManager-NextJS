import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react'

const UserInfo = () => {
    const {data:session} = useSession();
  return (
    <div >
        {session ? 
    <div className='flex items-center gap-2 mb-10'>
        <Image src={session?.user?.image || ""} alt="User" width={40} height={40} className='rounded-full' />
        <div className='flex-2'>
            <h2 className='text-[16px] font-bold'>{session.user?.name}</h2>
            <h2 className='text-[14px] text-gray-500 mt-[-2px]'>{session.user?.email}</h2>
        </div>
        <div className='bg-blue-200 rounded-lg p-2 cursor-pointer'>
        <svg 
        onClick={() => signOut()}
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
</svg>


        </div>
    </div> : null    
    }
      
    </div>
  )
}

export default UserInfo




