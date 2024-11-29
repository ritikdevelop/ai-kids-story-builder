"use client";
import { db } from '@/config/db';
import { StoryData } from '@/config/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect } from 'react'

function ViewStory({params}:any) {

    useEffect(()=>{
        console.log(params.id);
    },[])

    const getStory = async () => {
      const result = await db.select().from(StoryData)
      .where(eq(StoryData.storyId,params.id));

      console.log(result[0]);
    }

  return (
    <div>ViewStory</div>
  )
}

export default ViewStory