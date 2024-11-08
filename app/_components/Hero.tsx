"use client";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="px-10 md:px-28 lg:px-44 mt-10 h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-[50px] text-primary font-extrabold py-5">
            Craft Magical Stories for kids in Minutes
          </h2>
          <p className="text-xl text-primary font-medium">
            Create fun and personalized stories that bring your child's
            adventures to life and spark their passion for reading. It only
            takes a few seconds!
          </p>
          <Link href={"/create-story"}>
            <Button
              size="lg"
              color="primary"
              className="mt-5 font-bold text-xl p-6"
            >
              Create Story
            </Button>
          </Link>
        </div>
        <div>
          <Image src={"/hero.png"} alt="hero" width={700} height={400} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
