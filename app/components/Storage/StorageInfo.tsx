'use client'
import { app } from '@/Config/FirebaseConfig'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const StorageInfo = () => {
    const db = getFirestore(app)
    const {data:session} = useSession()
    let totalSize = 0
    const [totalSizeUsed, setTotalSizeUsed] = useState("")

    
    useEffect(()=>{
        if(session?.user) {
            totalSize = 0
            getAllFiles()
        }
    })
    const getAllFiles = async () => {
        const q = query(collection(db, "Files"), where("createdBy", "==", session?.user?.email))

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data()['size']);
            totalSize += doc.data()['size']
        }
        );
        console.log((totalSize/1024**2).toFixed(2) + " MB")
        setTotalSizeUsed((totalSize/1024**2).toFixed(2) + " MB")
    }   

  return (
    <div className='mt-6'>
        <h2 className='flex gap-1.5 items-end mb-1'>
            <span className='text-2xl font-bold'>
                {totalSizeUsed}
            </span>
                <span className='text-lg'>used of</span>
            <span className='text-2xl font-bold'>
                8.95 MB
            </span>
        </h2>
      <div className='w-full bg-gray-200 h-3 flex'>
        <div className='bg-blue-600 h-3 w-[25%]'></div>
        <div className='bg-green-600 h-3 w-[35%]'></div>
        <div className='bg-yellow-600 h-3 w-[15%]'></div>

      </div>
    </div>
  )
}

export default StorageInfo


