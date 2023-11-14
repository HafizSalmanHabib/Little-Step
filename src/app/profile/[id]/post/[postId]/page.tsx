"use client"
import React from 'react'
import { useParams } from 'next/navigation'

const profileIDPostID = () => {
    const params=useParams(); 
    console.log(params.postId)
    console.log('ID',params.id)
  return (
    <div>Post iD page</div>
  )
}

export default profileIDPostID