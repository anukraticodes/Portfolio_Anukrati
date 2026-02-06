import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "B.Tech CSE Student @ IIIT Gwalior",
          "Open Source Contributor",
          "Problem Solver & DSA Enthusiast",
          "Web Developer (React & Node.js)"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
