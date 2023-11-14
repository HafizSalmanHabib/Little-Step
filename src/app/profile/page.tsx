'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const profilePage = () => {
    const router=useRouter();
    console.log(router);
  return (
    <div>
        <h1>List of profiles</h1>
    <div> 
      <ul>
        <li> <Link href="/profile/1" style={{ color:'#rrr' }}>Profile 1</Link></li>
        <li> <Link href="/profile/2" style={{ color:'#rrr' }}>Profile 2</Link></li>
        <li onClick={()=> router.push('/profile/3')}> Profile 3</li>
      </ul>
        
    </div>
    </div>
  )
}

export default profilePage