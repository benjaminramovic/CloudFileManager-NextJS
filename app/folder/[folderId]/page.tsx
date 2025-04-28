'use client'
import FileList from '@/app/components/File/FileList';
import FolderList from '@/app/components/Folder/FolderList';
import SubfolderList from '@/app/components/Folder/SubfolderList';
import SearchBar from '@/app/components/SearchBar';
import { ParentFolderIdContext } from '@/context/ParentFolderIdContext';
import { ShowToastContext } from '@/context/ShowToastContext';
import { collection, getFirestore, query, where, getDocs } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'

const FolderDetails = () => {
  const { folderId } = useParams();
  const searchParams = useSearchParams();
    const {parentFolderId, setParentFolderId} = useContext(ParentFolderIdContext);
    const { showToastMsg, setShowToastMsg }:any = useContext(ShowToastContext);
    
    const {data:session} = useSession();
    const db = getFirestore();
    const [folders,setFolders] = useState<any[]>([])
    const [files,setFiles] = useState<any[]>([])

    useEffect(() => {
         if (folderId && session) {
          setParentFolderId(folderId);
          getFolderList();
          getFileList();
      }
        
          //getFolderList();
          //getFileList();
        
    },[folderId,session,showToastMsg])
  
 
      const getFolderList = async () => {
        
        if(session?.user) {
           const q = query(collection(db, "Folders"), where("createdBy","==",session?.user?.email),where("parentId","==",folderId));
        
    
        const querySnapshot = await getDocs(q);
        const folderData: any[] = [];
        querySnapshot.forEach((doc) => {
          folderData.push({ id: doc.id, ...doc.data() });
          // doc.data() is never undefined for query doc snapshots
          setFolders((prev:any) => [...prev, { id: doc.id, ...doc.data() }]);
        });
        setFolders(folderData);
        
      }
    
      }

      const getFileList = async () => {
        if(session?.user) {
           const q = query(collection(db, "Files"), where("createdBy","==",session?.user?.email),where("parentFolderId","==",folderId));
        
    
        const querySnapshot = await getDocs(q);
        const fileData: any[] = [];
        querySnapshot.forEach((doc) => {
          fileData.push({ id: doc.id, ...doc.data() });
          // doc.data() is never undefined for query doc snapshots
          //setFolders((prev:any) => [...prev, { id: doc.id, ...doc.data() }]);
        });
        setFiles(fileData);
        console.log(fileData)
      }
      }

  return (
   
    
    <div className='p-5'>

      <SearchBar />
     
      <h1 className='text-2xl font-bold mt-5'>{searchParams.get('name')}</h1>

      <SubfolderList folders={folders}/>

      <FileList files={files} />

    </div>
    
    
  )
}

export default FolderDetails
// Removed the placeholder implementation of getDocs as it is now imported from 'firebase/firestore'.

