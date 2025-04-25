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

export default function Home() {
  //const session = await auth();
  const { data: session } = useSession();
  const db = getFirestore(app);
  const [folders, setFolders] = useState<any[]>([]);
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
    setParentFolderId(0);
  }

  }

  useEffect(() => {
    getFolderList();
    //alert(session?.user?.email)

    setParentFolderId(0);
    
  }, [session,showToastMsg]);

  return (
    <div className="p-5">
    <SearchBar />
    {session?.user ?
   <h1>Welcome, {session?.user?.name} !</h1>
   : 
   <h1>Welcome!</h1>
    }
    <FolderList folders={folders}/>
    <FileList/>
   </div>
  );
}
