import React from "react";
import { ISkillsProps } from "./skills.types";

const Skills = ({ skills }: ISkillsProps) => {
  return (
    <div>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
    </div>
  );
};

export default Skills;
