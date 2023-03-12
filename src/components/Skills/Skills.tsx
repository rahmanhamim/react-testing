import React, { useEffect, useState } from "react";
import { ISkillsProps } from "./skills.types";

const Skills = ({ skills }: ISkillsProps) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoggedIn(true);
    }, 1001);
  });

  return (
    <div>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
      {loggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Skills;
