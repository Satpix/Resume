import React from "react";
import * as S from "./styled";
import ExperienceItem from "./ExperienceItem";

const data = [
  {
    id: 1,
    year: "2021-Present",
    degree: "EffectiveSoft",
    content: [
      <S.Text>
        Responsibilites:
        <br />
        - Developed React components
        <br />
        - Designed and implemented new features of the applications
        <br />
        - Improved projects perfomance by refactoring
        <br />
        - Teamwork and problem solving
        <br />
        - Code review
      </S.Text>,
    ],
  },
  {
    id: 2,
    year: "27.07.2019-03.11.2019",
    degree: "Educational Center for Programming and High Tech",
    content: [
      "Course: JavaScript web application development.",
      "Description: The course program included an in-depth study of the main web technologies of Front-end development (string and array methods, Object oriented programming, MVC, SPA, Webpack).",
    ],
  },
  {
    id: 3,
    year: "2017-2021",
    degree: "Belarusian State University of Informatics and Radioelectronics",
    content: ["Specialization: programmable mobile systems."],
  },
];

const Experience = () => {
  return (
    <S.ExperienceBlock>
      {data.map((experience) => (
        <ExperienceItem experience={experience} key={experience.id} />
      ))}
      <S.TimeLine />
    </S.ExperienceBlock>
  );
};

export default Experience;
