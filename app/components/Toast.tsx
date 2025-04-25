'use client'
import { ShowToastContext } from '@/context/ShowToastContext';
import React, { useContext, useEffect } from 'react'

const Toast = ({msg}:any) => {
    const { showToastMsg, setShowToastMsg }:any = useContext(ShowToastContext);
  
  useEffect(() => {
    setInterval(() => {
      setShowToastMsg(null)
    }, 3000)
  },[showToastMsg])

  return (
      <div className="toast toast-top toast-end">


  <div className="alert alert-success">
    <span>{msg}</span>
  </div>
</div>
  )
}

export default Toast
