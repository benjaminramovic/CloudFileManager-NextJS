import React from 'react'

const CategoryItem = ({item}:any) => {
  return (
    <div className='flex gap-3 items-center p-2 hover:bg-gray-100 transition-all rounded-md'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-500 bg-blue-300 p-1 rounded-lg">
  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
</svg>

<div className='flex flex-col flex-2'>
    <h2>{item.name}</h2>
    <h4 className='text-gray-400'>{item.amount} files</h4>

</div>

<h2>
    {item.size} MB
</h2>





      
    </div>
  )
}

export default CategoryItem
