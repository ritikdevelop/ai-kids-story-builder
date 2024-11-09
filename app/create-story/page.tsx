"use client";
import React, { useState } from "react";
import StorySubjectInput from "./_components/StorySubjectInput";
import StoryType from "./_components/StoryType";
import AgeGroup from "./_components/AgeGroup";
import ImageStyle from "./_components/ImageStyle";
import { Button } from "@nextui-org/button";


//? FieldData Interface
export interface fieldData {
  fieldName: string;
  fieldValue: string;
}
//? FormDataType Interface
export interface formDataType{
  storySubject:string,
  storyType:string,
  imageStyle:string
  ageGroup:string,
}

function CreateStory() {

  const [formData,setFormData] = useState<formDataType>();

  //! Handle User Selection Function
  const onHandleUserSelection = (data: fieldData) => {
    console.log(data);
    setFormData((prev:any) => ({ ...prev, [data.fieldName]: data.fieldValue }));
    console.log(formData);
    // if(formData?.storySubject || formData?.ageGroup || formData?.imageStyle || formData?.storyType){setFormData({...formData,[data.fieldName]:data.fieldValue})}
  };

  return (
    <div className="p-10 md:px-20 lg:px-40">
      <h2 className="font-extrabold text-[40px] text-primary text-center">
        CREATE YOUR STORY
      </h2>
      <p className="text-2xl text-primary text-center">
        Unlock your creativity with AI: Craft stories like never before! Let our
        AI bring your imagination to life, one story at a time.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
        {/* Story Subject */}
        <StorySubjectInput userSelection={onHandleUserSelection} />

        {/* Story type */}
        <StoryType userSelection={onHandleUserSelection} />

        {/* Age Group */}
        <AgeGroup userSelection={onHandleUserSelection} />

        {/* Image style */}
        <ImageStyle userSelection={onHandleUserSelection} />
      </div>
      <div className="flex justify-end my-6">
        <Button color="primary" className="p-8 text-xl">
          Generate Story
        </Button>
      </div>
    </div>
  );
}

export default CreateStory;
