const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "create kids story on description for 5-8 years Kaisei_Decol. Educational StoryData, and all images in Paper cut style: story of boy and Magic School, give me 5 chapter, with detailed image text prompt for each of chapter and image for story cover book with story name, all in JSOn field format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "story_name": "Kaisei and the Magic School",\n  "cover_image": {\n    "description": "A paper-cut style image of a young boy, Kaisei, with wide, curious eyes, standing in front of a magical school. The school has a whimsical, colorful exterior, with a large, swirling door that seems to shimmer and glow. A golden key is dangling from the door handle, hinting at the magical adventures within.  In the background, a crescent moon shines brightly, casting a soft, blue glow on the scene.",\n    "style": "Paper cut"\n  },\n  "chapters": [\n    {\n      "chapter_title": "The Mysterious Invitation",\n      "text": "Kaisei was a curious boy who loved exploring the woods behind his house. One sunny afternoon, while searching for rare mushrooms, he stumbled upon a strange, shimmering object hidden under a bed of moss.  It was a golden key, etched with intricate symbols, and it seemed to hum with a faint magic.  Suddenly, a bright light enveloped Kaisei, and when it faded, he found himself standing before a magnificent, colorful school unlike anything he had ever seen.  There were windows made of swirling clouds, doors that shimmered with starlight, and a giant, talking owl perched on a chimney.",\n      "image": {\n        "description": "A paper-cut style image depicting Kaisei finding the golden key under a bed of moss. The key is glowing with a soft, warm light, and tiny sparkles surround it. In the distance, the magical school appears as a colorful silhouette, with its windows glowing with magical light.",\n        "style": "Paper cut"\n      }\n    },\n    {\n      "chapter_title": "Welcome to the Magic School",\n      "text": "The talking owl, named Professor Hoot, explained that the golden key was a magical invitation to the School of Wonder. Kaisei was chosen because of his kind heart and adventurous spirit.  Inside the school, Kaisei met other extraordinary students.  There was Lily, who could talk to animals, Ben, who could make things disappear with a flick of his wrist, and Maya, who could create beautiful paintings from her imagination.  They were all excited to learn about the magical world and explore its secrets.",\n      "image": {\n        "description": "A paper-cut style image of Kaisei entering the magical school, greeted by Professor Hoot, the talking owl.  The school\'s interior is vibrant and filled with magical objects.  Kaisei is surrounded by other students, each with a unique magical ability. Lily is talking to a friendly squirrel, Ben is making a book disappear, and Maya is painting a magical rainbow with her brush.",\n        "style": "Paper cut"\n      }\n    },\n    {\n      "chapter_title": "The Lost Spell",\n      "text": "One day, the school was plunged into darkness.  The magical lights went out, and the students were left in a silent, unsettling gloom.  Professor Hoot explained that an ancient spell had been stolen, and without it, the magic of the school was fading.  Kaisei and his friends knew they had to find the spell and restore the magic before it was too late.",\n      "image": {\n        "description": "A paper-cut style image of the magical school enveloped in darkness. The lights are out, and the magical objects are dull. Kaisei and his friends, with worried expressions, are searching for the lost spell. Professor Hoot is perched on a bookshelf, looking anxiously at the students.",\n        "style": "Paper cut"\n      }\n    },\n    {\n      "chapter_title": "A Journey Through the Enchanted Forest",\n      "text": "Following a trail of twinkling stars, Kaisei and his friends ventured into the Enchanted Forest.  They encountered talking trees, mischievous fairies, and a grumpy troll who guarded a secret passage.  With each obstacle they faced, they learned to work together, using their unique abilities to overcome challenges and stay true to their friendship.",\n      "image": {\n        "description": "A paper-cut style image of Kaisei and his friends journeying through the Enchanted Forest.  The forest is teeming with magical creatures, including talking trees, glowing mushrooms, and playful fairies. Kaisei and his friends are working together to overcome obstacles, using their magical abilities to help each other.",\n        "style": "Paper cut"\n      }\n    },\n    {\n      "chapter_title": "The Magic Returns",\n      "text": "Finally, they reached the hidden lair of the spell thief, a mischievous goblin who had stolen the magic for his own selfish desires.  Kaisei and his friends used their bravery and compassion to convince the goblin to return the spell. As the spell was restored, the magic flowed back into the school, illuminating it with a dazzling light.  Kaisei and his friends had saved the day, proving that with courage, kindness, and friendship, even the greatest challenges could be overcome.",\n      "image": {\n        "description": "A paper-cut style image of Kaisei and his friends confronting the goblin in his lair. The goblin is surrounded by stolen magical objects, but he is starting to realize the error of his ways.  As the spell is returned to the school, the lights come back on, illuminating the school in a beautiful, magical glow. Kaisei and his friends are smiling, relieved and proud of their accomplishment.",\n        "style": "Paper cut"\n      }\n    }\n  ]\n}\n```',
        },
      ],
    },
  ],
});
