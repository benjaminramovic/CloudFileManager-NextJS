'use client'

import Image from 'next/image'
import React, { useContext } from 'react'

const SubfolderItem = ({folder,active}:any) => {

 

  return (
    <div className='flex flex-row justify-between items-center h-[70px] gap-3 hover:bg-gray-100 transition-all p-3 cursor-pointer hover:font-bold'>
          <div className='flex flex-row justify-left items-center gap-3'>
          <Image src="/folder.png" alt="Folder" width={30} height={30} className='rounded-md' />
          <h2 className='line-clamp-2 text-[14px] text-center'>{folder.name}</h2>
          </div>
         
     </div>
  )
}

export default SubfolderItem
