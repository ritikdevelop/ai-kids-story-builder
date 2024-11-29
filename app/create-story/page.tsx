"use client";
import React, { useState } from "react";
import StorySubjectInput from "./_components/StorySubjectInput";
import StoryType from "./_components/StoryType";
import AgeGroup from "./_components/AgeGroup";
import ImageStyle from "./_components/ImageStyle";
import { Button } from "@nextui-org/button";
import { chatSession } from "@/config/GeminiAI";
import { StoryData } from "@/config/schema";
import { db } from "@/config/db";

// @ts-ignore
import uuid4 from "uuid4";
import CustomLoader from "./_components/CustomLoader";
import axios from "axios";
const CREATE_STORY_PROMPT = process.env.NEXT_PUBLIC_CREATE_STORY_PROMPT;

//? FieldData Interface
export interface fieldData {
  fieldName: string;
  fieldValue: string;
}
//? FormDataType Interface
export interface formDataType {
  storySubject: string;
  storyType: string;
  imageStyle: string;
  ageGroup: string;
}

function CreateStory() {
  const [formData, setFormData] = useState<formDataType>();
  const [loading, setLoading] = useState(false);

  //! Handle User Selection Function
  const onHandleUserSelection = (data: fieldData) => {
    console.log(data);
    setFormData((prev: any) => ({
      ...prev,
      [data.fieldName]: data.fieldValue,
    }));
    console.log(formData);
  };

  //! Generate Story Function
  const GenerateStory = async () => {
    setLoading(true);
    const FINAL_PROMPT = CREATE_STORY_PROMPT?.replace(
      "{ageGroup}",
      formData?.ageGroup ?? ""
    )
      .replace("{storyType}", formData?.storyType ?? "")
      .replace("{storySubject}", formData?.storySubject ?? "")
      .replace("{imageStyle}", formData?.imageStyle ?? "");

    //* Generate AI Story
    try {
      // console.log(FINAL_PROMPT);
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      console.log(result.response.text())
      const story = result?.response.text();
      const imageResp = await axios.post("/api/generate-image", {
        prompt:
          "Add text with title:" +
          story?.story_cover?.title +
          "in bold text for book cover, " +
          story?.story_cover?.image_prompt,
      });
      console.log(imageResp?.data);
      // const resp = await SaveInDB(result.response.text());
      // console.log(resp);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
    //* Save in DB

    //* Generate Image
  };

  const SaveInDB = async (output: string) => {
    const recordId = uuid4();
    try {
      setLoading(true);
      const result = await db
        .insert(StoryData)
        .values({
          storyId: recordId,
          ageGroup: formData?.ageGroup,
          imageStyle: formData?.imageStyle,
          storySubject: formData?.storySubject,
          storyType: formData?.storyType,
          outPut: JSON.parse(output), // Renamed 'output' to 'outPut'
        })
        .returning({ storyId: StoryData.storyId });
      setLoading(false);
      return result;
    } catch (e) {
      setLoading(false);
    }
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
        <Button
          color="primary"
          disabled={loading}
          className="p-8 text-xl"
          onClick={GenerateStory}
        >
          Generate Story
        </Button>
      </div>
      <CustomLoader isLoading={loading} />
    </div>
  );
}

export default CreateStory;
