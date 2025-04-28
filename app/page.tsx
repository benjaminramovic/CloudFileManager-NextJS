'use client'
import { auth } from "@/auth";
import SearchBar from "./components/SearchBar";
import FolderList from "./components/Folder/FolderList";
import FileList from "./components/File/FileList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { app } from "@/Config/FirebaseConfig";
import { useSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import { ParentFolderIdContext } from "@/context/ParentFolderIdContext";
import { ShowToastContext } from "@/context/ShowToastContext";
import { SignIn } from "./components/auth-component";
import Image from "next/image";

export default function Home() {
  //const session = await auth();
  const { data: session } = useSession();
  const db = getFirestore(app);
  const [folders, setFolders] = useState<any[]>([]);
  const [files, setFiles] = useState<any[]>([]);

  const {parentFolderId, setParentFolderId} = useContext(ParentFolderIdContext);
  const { showToastMsg, setShowToastMsg }:any = useContext(ShowToastContext);


  const getFolderList = async () => {
    if(session?.user) {
       const q = query(collection(db, "Folders"), where("createdBy","==",session?.user?.email),where("parentId","==",0));
    

    const querySnapshot = await getDocs(q);
    const folderData: any[] = [];
    querySnapshot.forEach((doc) => {
      folderData.push({ id: doc.id, ...doc.data() });
      // doc.data() is never undefined for query doc snapshots
      //setFolders((prev:any) => [...prev, { id: doc.id, ...doc.data() }]);
    });
    setFolders(folderData);
  }
  }

  const getFileList = async () => {
    if(session?.user) {
       const q = query(collection(db, "Files"), where("createdBy","==",session?.user?.email),where("parentFolderId","==",0));
    

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

  useEffect(() => {
    getFolderList();
    getFileList();

    setParentFolderId(0);
    
  }, [session,showToastMsg]);

  return (

    
   <>
   {session?.user ? 
     <div className="p-5">
   <SearchBar />
   <FolderList folders={folders}/>
   <FileList files={files}/>

  
  </div> : 
    <div className='flex items-center justify-center h-[90vh]'>
    <Image alt="logo" src="/logo.png" width={500} height={400} />
    </div>
  
}
  </>

    
    
 
    
  )
   
}
