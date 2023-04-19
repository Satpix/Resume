import React from "react";
import * as S from "./styled";
import { Grid } from "@mui/material";

const skillsData = [
  // {
  //   image: "",
  //   name: "Languages",
  // },
  {
    image: "url(images/javascript.png)",
    name: "JavaScript",
  },
  {
    image: "url(images/typescript.png)",
    name: "TypeScript",
  },
  {
    image: "url(images/html5.png)",
    name: "HTML5",
  },
  {
    image: "url(images/css3.png)",
    name: "CSS3",
  },
  // {
  //   image: "",
  //   name: "Frameworks",
  // },
  {
    image: "url(images/react.png)",
    name: "React",
  },
  {
    image: "url(images/next.png)",
    name: "Next",
  },
  {
    image: "url(images/native.png)",
    name: "React Native",
  },
  // {
  //   image: "",
  //   name: "Web Technologies",
  // },
  {
    image: "url(images/redux.png)",
    name: "Redux",
  },
  {
    image: "url(images/mui.png)",
    name: "MUi",
  },
  {
    image: "url(images/styled.png)",
    name: "Styled Components",
  },
  {
    image: "url(images/figma.png)",
    name: "Figma",
  },
  {
    image: "url(images/responsive.png)",
    name: "Responsive Websites",
  },
  {
    image: "url(images/git.png)",
    name: "Git",
  },
  {
    image: "url(images/vscode.png)",
    name: "VS Code",
  },
];
const Skills = () => {
  return (
    <Grid container direction="row">
      <Grid direction="column">
        <S.SubTitle>My Toolbox & Things, I Can Do</S.SubTitle>
        <Grid container direction="raw" >
          {skillsData.map((skill) => (
            <Grid
              container
              direction="column"
              alignItems="center"
              sx={{ width: "110px", height: "120px" }}
            >
              <S.Image url={skill.image} />
              <S.Text>{skill.name}</S.Text>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Skills;
