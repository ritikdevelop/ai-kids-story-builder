"use client";

import React, { useState } from 'react'
import Image from 'next/image'

function ImageStyle() {
    const OptionList = [
        {
          label: "3D Cartoon",
          imageUrl: "/3D.png",
          isFree: true,
        },
        {
          label: "Paper Cut",
          imageUrl: "/paperCut.png",
          isFree: true,
        },
        {
          label: "Water Color",
          imageUrl: "/watercolor.png",
          isFree: true,
        },
        {
            label: "Pixel Style",
            imageUrl: "/pixel.png",
            isFree: true,
          }
      ];
    
      const [selectedOption, setSelectedOption] = useState<string>();
    
      return (
        <div>
          <label className="font-bold text-3xl text-primary">4. Image Style</label>
          <div className="grid grid-cols-4 gap-5 mt-3">
            {OptionList.map((item, index) => (
              <div
              key={item.label}
                className={`relative grayscale hover:grayscale-0 cursor-pointer p-1 ${
                  selectedOption == item.label ? "grayscale-0 border-2 rounded-3xl border-primary" : "grayscale"
                }
              `}
                onClick={() => setSelectedOption(item.label)}
              >
                <h2 className="absolute bottom-5 text-medium font-bold text-white text-center w-full">
                  {item.label}
                </h2>
                <Image
                  src={item.imageUrl}
                  alt={item.label}
                  width={300}
                  height={400}
                  className="object-cover h-[120px] rounded-3xl"
                />
              </div>
            ))}
          </div>
        </div>
      );
}

export default ImageStyle