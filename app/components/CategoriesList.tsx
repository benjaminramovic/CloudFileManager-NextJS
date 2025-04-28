import React from 'react'
import CategoryItem from './CategoryItem'
import { clearAllModuleContexts } from 'next/dist/server/lib/render-server'

const CategoriesList = () => {
    const list = [
        {
            id: 1,
            name: 'Images',
            amount:38,
            size:3.4,
            icon: 'm2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
        },
        {
            id: 2,
            name: 'Videos',
            amount:9,
            size:2.5,
            icon: 'm15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z'
        },
        {
            id: 3,
            name: 'Documents',
            amount:18,
            size:5,
            icon: 'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'
        },
        {
            id: 4,
            name: 'Others',
            amount:12,
            size:11,
            icon: 'm11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z'
        }
    ]
  return (
    <div className='mt-5 '>
      {list.map((item,index) => (
       
        <CategoryItem key={index} item={item} />
        
      ))}

      <div className='flex flex-col justify-center items-center bg-blue-100 p-5 rounded-lg mt-5 gap-1'>
        <h2 className='font-bold'>Need More Space?</h2>
        <p>Get more space by upgrading the plan</p>
        <button className='bg-blue-400 p-1.5 text-center text-white mt-3 p-2 rounded-md'>Upgrade the plan</button>
      </div>
    </div>
  )
}

export default CategoriesList


/*
 <div key={item.id} className='flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer rounded-md'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
            </svg>
            <h2 className='text-[16px] font-semibold'>{item.name}</h2>
        </div>
*/