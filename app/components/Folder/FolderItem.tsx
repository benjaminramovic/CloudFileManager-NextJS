import Image from 'next/image'
import React from 'react'


const FolderItem = ({folder,active}:any) => {
  return (
    <div className='flex flex-col justify-center items-center h-[130px] border-[0.5px] border-gray-50 rounded-xl hover:scale-105 hover:shadow-xl transition-all shadow-md cursor-pointer hover:font-bold'>
      <Image src="/folder.png" alt="Folder" width={40} height={40} className='rounded-md' />
      <h2 className='line-clamp-2 text-[14px] text-center'>{folder.name}</h2>
    </div>
  )
}

export default FolderItem
