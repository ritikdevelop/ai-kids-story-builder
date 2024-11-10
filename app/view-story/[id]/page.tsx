"use client";
import React, { useEffect } from 'react'

function ViewStory({params}:any) {

    useEffect(()=>{
        console.log(params.id);
    },[])

  return (
    <div>ViewStory</div>
  )
}

export default ViewStory