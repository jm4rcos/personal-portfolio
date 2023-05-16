import React, { useState, useEffect } from "react";
import { Container, HLine, PortFolioText, Text } from "./style";
import { CanvasComponent } from "../../components/CanvasComponent";
import { About } from "../About";
import { Word } from "../../components/Word";
import Banner from "../../components/Banner";
import { Project } from "../Project";

export const LandingPage = () => {
  

  return (
    <Container>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "2rem",
          padding: "1rem 0",
          justifyContent: "right",
        }}
      >
        <a style={{ textDecoration: "none" }} href="#projects">
          <Text>See Projects</Text>
        </a>
        <a style={{ textDecoration: "none" }} href="#about">
          <Text>About me</Text>
        </a>
      </div>
      <Banner />
      <CanvasComponent />
      <Project name="About" id="about" />
      <About name="About" id="about" />
    </Container>
  );
};
