"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const images = ["interview.svg", "feedback.svg"];

/**
 * FeaturesSection component displays the features of the application.
 * It uses a slideshow effect to display two feature sections.
 * The component uses React hooks to manage the state of the current slide.
 * It also uses React's useEffect hook to set up an interval to switch slides every 3 seconds.
 */
export default function FeaturesSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((index) => (index + 1) % 2),
      3000,
    );
    return () => clearInterval(interval);
  }, []);

  const image = images[index];

  return (
    <div
      id="services"
      className="flex h-screen w-full flex-row items-center justify-center gap-24"
    >
      <div className="flex h-full w-[40%] flex-col items-center justify-center gap-8">
        <h1 className="text-3xl font-semibold">
          Experience Real Job Interviews with AI-powered Mock Interview
          Simulations
        </h1>
        <p className="text-xl">
          Practice and improve your interview skills with our realistic
          AI-powered interview simulations. Get feedback and gain confidence for
          your next job interview.
        </p>
        <div className="flex flex-row justify-center gap-8">
          <div>
            <h2 className="text-lg">Realistic Practice</h2>
            <p>
              Simulate real job interview scenarios and receive personalized
              feedback to improve your performance.
            </p>
          </div>
          <div>
            <h2 className="text-lg">Expert Feedback</h2>
            <p>
              Receive detailed feedback from AI algorithms and industry
              professionals to enhance your interview skills.
            </p>
          </div>
        </div>
      </div>
      <Image
        src={`/images/${image}`}
        alt="features section"
        width={100}
        height={100}
        className="w-1/3 transition-all duration-300 ease-in-out"
      />
    </div>
  );
}
