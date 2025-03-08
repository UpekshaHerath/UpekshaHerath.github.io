"use client";

import Typewriter from "typewriter-effect";

export const TypewriterDescription = () => {
  return (
    <Typewriter
      options={{
        strings: ["Software Engineer", "AWS Community Builder"],
        autoStart: true,
        loop: true,
      }}
    />
  );
};
