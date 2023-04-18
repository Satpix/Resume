import React, { useState } from "react";

import About from "../sections/About";
import Experience from "../sections/Experience";
import Works from "../sections/Works";
import Skills from "../sections/Skills";
// import Contact from "../sections/Contact";
import LayoutBlock from "./LayoutBlock";
import MobileHeader from "./MobileHeader/MobileHeader";
import SideBar from "./SideBar/SideBar";
import * as S from "./styled";

import {
  Construction,
  Dashboard,
  // Email,
  Person,
  School,
} from "@mui/icons-material";

const layoutData = [
  {
    id: 1,
    name: "About me",
    component: <About />,
    image: <Person />,
  },
  {
    id: 2,
    name: "Skills",
    component: <Skills />,
    image: <Construction />,
  },
  {
    id: 3,
    name: "Experience",
    component: <Experience />,
    image: <School />,
  },

  {
    id: 4,
    name: "Works",
    component: <Works />,
    image: <Dashboard />,
  },
  // {
  //   id: 5,
  //   name: "Contact",
  //   component: <Contact />,
  //   image: <Email />,
  // },
];

const Layout = () => {
  const [sideBar, setSideBar] = useState(false);

  const changeSideBar = () => {
    setSideBar(!sideBar);
  };

  return (
    <S.MainContainer>
      <SideBar
        changeSideBar={changeSideBar}
        sideBar={sideBar}
        layoutData={layoutData}
      ></SideBar>
      <S.Block sideBar={sideBar}>
        <MobileHeader sideBar={sideBar} changeSideBar={changeSideBar} />
        <S.ElementContainer id="containerElement">
          {layoutData.map(({ id, name, component }) => (
            <S.Container name={name}>
              <LayoutBlock key={id} id={name} title={name}>
                {component}
              </LayoutBlock>
            </S.Container>
          ))}
        </S.ElementContainer>
      </S.Block>
    </S.MainContainer>
  );
};

export default Layout;
