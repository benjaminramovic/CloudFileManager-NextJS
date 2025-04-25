import Image from 'next/image'
import React from 'react'

const SubfolderItem = ({folder,active}:any) => {
  return (
    <div className='flex flex-row justify-left items-center h-[70px] gap-3 hover:bg-gray-100 transition-all p-3 cursor-pointer hover:font-bold'>
          <Image src="/folder.png" alt="Folder" width={30} height={30} className='rounded-md' />
          <h2 className='line-clamp-2 text-[14px] text-center'>{folder.name}</h2>
     </div>
  )
}

export default SubfolderItem
