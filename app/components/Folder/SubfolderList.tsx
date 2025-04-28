'use client';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import SubfolderItem from './SubfolderItem';
import { app } from '@/Config/FirebaseConfig';
import { ShowToastContext } from '@/context/ShowToastContext';
import { getFirestore, deleteDoc, doc } from 'firebase/firestore';

const SubfolderList = ({ folders }: any) => {
  const [activeFolder, setActiveFolder] = useState<string | null>(null);
  const router = useRouter();
  const db = getFirestore(app);
  const { showToastMsg, setShowToastMsg }: any = useContext(ShowToastContext);

  const deleteFolder = async (folder: any) => {
    try {
      await deleteDoc(doc(db, "Folders", folder.id.toString()));
      setShowToastMsg('Folder successfully deleted!');
    } catch (error) {
      console.error('Error deleting folder:', error);
      setShowToastMsg('Error deleting folder.');
    }
  };

  const onFolderClick = (folder: any) => {
    setActiveFolder(folder.id);
    router.push(`/folder/${folder.id}?name=${folder.name}&createdBy=${folder.createdBy}`);
  };



  return (
    <div className="mt-5 bg-white rounded-md w-full p-5">
      <div className="grid gap-3 grid-cols-1">
        {folders?.map((folder: any) => (
          <div
            key={folder.id}
            className="relative"
            onClick={() => onFolderClick(folder)}
          >
            <SubfolderItem folder={folder} active={activeFolder === folder.id} />
            
            {/* Delete Icon */}
            <svg
              onClick={(e) => {
                e.stopPropagation(); // Sprečava klik da otvori folder
                deleteFolder(folder);
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-red-500 hover:scale-110 transition-all absolute top-2 right-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c...
                "
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubfolderList;
