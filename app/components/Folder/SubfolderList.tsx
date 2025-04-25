'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import FolderItem from './FolderItem';
import SubfolderItem from './SubfolderItem';

const SubfolderList = ({folders}:any) => {
      const [activeFolder, setActiveFolder] = useState();
      const router = useRouter();

    const onFolderClick = (index:any, folder:any) => {
        setActiveFolder(folder.id);
      
        router.push(`/folder/${folder.id}?name=${folder.name}&createdBy=${folder.createdBy}`);
       }


  return (
      <div className='mt-5 bg-white rounded-md w-full p-5'>


      <div className='grid gap-3 grid-cols-1'
      >
        {folders?.map((item:any,index:any) => (
            <div onClick={() => onFolderClick(index, item)} key={index}>
            <SubfolderItem folder={item} key={index} active={activeFolder==index}/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default SubfolderList
