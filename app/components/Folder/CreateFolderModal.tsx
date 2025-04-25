'use client'
import { app } from '@/Config/FirebaseConfig'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { ShowToastContext } from '@/context/ShowToastContext'
import { ParentFolderIdContext } from '@/context/ParentFolderIdContext'

const CreateFolderModal = () => {

    const [folderName, setFolderName] = useState('')
    const {data:session} = useSession()
    const db = getFirestore(app);

    const { showToastMsg, setShowToastMsg }:any = useContext(ShowToastContext);
    const {parentFolderId, setParentFolderId}:any = useContext(ParentFolderIdContext);
    

    const onCreate = async () => {
        try {
            const docRef = await addDoc(collection(db, "Folders"), {
              id: Date.now().toString(),
              name: folderName,
              createdBy: session?.user?.email,
              parentId: parentFolderId,
            });
            
            showToastMsg("Folder Created Successfully") 

            console.log("Document written with ID: ", docRef.id);
            console.log(folderName)

          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
  return (
    <div>
{/* You ca
n open the modal using document.getElementById('ID').showModal() method */}
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    
    <div className="w-full items-center 
        flex flex-col justify-center gap-3">
          <Image src="/folder.png" alt="folder" width={50} height={50} />
          <input
            type="text"
            placeholder="Folder Name"
            className="p-2 border-[1px] outline-none
                rounded-md"
                onChange={(e)=>setFolderName(e.target.value)}
          />
          <button onClick={()=>onCreate()} className="bg-blue-500 text-white rounded-md p-2 px-3 w-full">Create</button>
        </div>
        </form>

    </div>
  )
}

export default CreateFolderModal
