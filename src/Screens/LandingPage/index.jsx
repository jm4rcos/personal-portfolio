import React, { useState, useEffect } from "react";
import { Container, HLine, PortFolioText, Text } from "./style";
import { CanvasComponent } from "../../components/CanvasComponent";
import { About } from "../About";
import { Word } from "../../components/Word";
import Banner from "../../components/Banner";
import { Project } from "../Project";

export const LandingPage = () => {
  function handleClick(event, id) {
    console.log(event, id);
    event.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const aboutElement = document.getElementById("about");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <Container>
      {/* <div
        className="menu"
        style={{
          width: "100%",
          display: "flex",
          gap: "2rem",
          padding: "1rem 0",
          justifyContent: "right",
        }}
      >
        <a
          onClick={(e) => handleClick(e, "projects")}
          style={{ textDecoration: "none" }}
          href="#projects"
        >
          <Text>See Projects</Text>
        </a>
        <a
          onClick={(e) => handleClick(e, "about")}
          style={{ textDecoration: "none" }}
          href="#about"
        >
          <Text>About me</Text>
        </a>
      </div> */}
      <Banner />
      <CanvasComponent />
      <Project name="About" id="about" />
      <About name="Projects" id="projects" />
    </Container>
  );
};

