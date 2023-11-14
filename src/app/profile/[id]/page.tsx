 "use client"
import React from 'react'
import next from 'next'
import { useParams, useRouter } from 'next/navigation'

const ProfileId = () => {
  const params=useParams();
  const route=useRouter();
  console.log(params.id);
  return (
    <div>
      <h1>Profile ID page {params.id}</h1>
      <div id='home-page'>
        <h4 onClick={()=> route.push('/profile')}>Back to Home Page</h4>
      </div>
    </div>
  )
}

export default ProfileId