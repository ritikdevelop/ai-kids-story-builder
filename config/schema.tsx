import { json, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const StoryData=pgTable('storyData', {
    id:serial('id').primaryKey(),
    storyId:varchar('storyId'),
    storySubject:text('storySubject'),
    storyType:varchar('storyType'),
    ageGroup:varchar('ageGroup'),
    imageStyle:varchar('imageStyle'),
    outPut:json('outPut'),
    coverImage:varchar('coverImage'),
})