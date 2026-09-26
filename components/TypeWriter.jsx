"use client";

import Typewriter from "typewriter-effect";

export const TypewriterDescription = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer @ Allion",
          "Full-Stack Developer",
          "AI & Agentic Systems Builder",
          "Technical Content Creator",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
};
