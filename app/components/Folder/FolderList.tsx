'use client'
import React, { useState } from 'react'
import FolderItem from './FolderItem'
import { useRouter } from 'next/navigation';

const FolderList = ({folders}:any) => {
  const [activeFolder, setActiveFolder] = useState();
  const router = useRouter();
    /*const flist = [
        {
            id: 1,
            name: 'Folder 1',
        },
        {
            id: 2,
            name: 'Folder 2',
        },
        {
            id: 3,
            name: 'Folder 3',
        },
        {
            id: 4,
            name: 'Folder 4',
        },
    ]*/
   const onFolderClick = (index:any, folder:any) => {
    setActiveFolder(folder.id);
  
    router.push(`/folder/${folder.id}?name=${folder.name}&createdBy=${folder.createdBy}`);
   }
  return (
    <div className='mt-5 bg-white rounded-md w-full p-5'>
      <h2 className='font-bold flex items-center justify-between text-[17px]'>Recent Folders
        <span className='font-normal text-blue-400 text-[13px] cursor-pointer'>View all</span>
      </h2>

      <div className='grid gap-3 grid-cols-2
      md:grid-cols-3 lg:grid-cols-4 xl-grid-cols-5 pt-5'
      >
        {folders?.map((item:any,index:any) => (
            <div onClick={() => onFolderClick(index, item)} key={index}>
            <FolderItem folder={item} key={index} active={activeFolder==index}/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default FolderList
