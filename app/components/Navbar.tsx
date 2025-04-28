'use client'
import Image from 'next/image'
import Link from 'next/link'
import { SignIn, SignOut } from './auth-component'
import menu from '@/data/menu'
import React, { useState } from 'react'
import CreateFolderModal from './Folder/CreateFolderModal'
import { AuthStatus } from './auth-component'
import UploadFileModal from './File/UploadFileModal'
import { useSession } from 'next-auth/react'

const Navbar = () => {
  const isLoggedIn = false // Replace with actual authentication logic
  const [activeTab, setActiveTab] = useState(0)
  const {data:session} = useSession();


  return (
  <>
  {session?.user ? 
    <div className='sticky bg-white h-screen w-[250px] shadow-blue-400 shadow-md px-2 py-6'>
       <div className="flex justify-center cursor-pointer">
        <Link href={"/"}>
        <Image src="/logo.png" alt="Logo" width={180} height={140} />
        </Link>
       </div>
       <button
       onClick={() => {
        const modal = document.getElementById('my_modal_4');
        if (modal) {
          (modal as HTMLDialogElement).showModal();
        }
      }}
       className='bg-blue-400 text-white p-2 rounded-md w-full mt-5 flex items-center justify-center gap-2 hover:scale-105 transition-all cursor-pointer'>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
       <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>

        Add New File</button>
        <button className='bg-sky-300 text-white p-2 rounded-md w-full mt-2 flex items-center justify-center gap-2 hover:scale-105 transition-all cursor-pointer'
        onClick={() => {
          const modal = document.getElementById('my_modal_3');
          if (modal) {
            (modal as HTMLDialogElement).showModal();
          }
        }}
        >

       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
       <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>

         New Folder</button>

        <div className='mt-5'>
          {menu.list.map((item, index) => (
            <h2
            onClick={() => setActiveTab(index)}
             className={`flex items-center p-2 mt-3 gap-2 rounded-md text-gray-400 hover:bg-blue-400 cursor-pointer hover:text-white ${activeTab==index ? 'bg-blue-400 text-white' : null}`} key={index}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d={item.logo} />
</svg>
{item.name}

            </h2>
          ))}
        </div>

   
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">

    <CreateFolderModal /> 
    
  </div>
</dialog>

<dialog id="my_modal_4" className="modal">
  <div className="modal-box">

    <UploadFileModal closeModal={() => (document.getElementById("my_modal_4") as HTMLDialogElement).close()}/> 
    
  </div>
</dialog>


    </div>
 : null
}
    </>
  )
}

export default Navbar
