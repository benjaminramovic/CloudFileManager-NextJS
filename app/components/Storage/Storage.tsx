import React from 'react'
import UserInfo from './UserInfo'
import StorageInfo from './StorageInfo'
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { SignIn } from '../auth-component';
import CategoriesList from '../CategoriesList';

const Storage = () => {
    const {data:session} = useSession();
  return (
    <>
     {session?.user ? 
     
     <div>
      <UserInfo/>
      <StorageInfo/>

      <CategoriesList/>
    </div>

    : 
    <div className="flex justify-center flex-col items-center h-[90vh] w-full gap-5"> 
        <SignIn provider="github" className="bg-green-500 text-white rounded-md px-3 py-1 w-[200px] cursor-pointer" />
  </div>
        
    
}
    </>
   
  )
}

export default Storage
