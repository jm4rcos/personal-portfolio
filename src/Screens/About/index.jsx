import React from "react";
import { Container, Content, Name, Title } from "./style";
import { Skill } from "../../components/Skill";
import { Str } from "../../components/Str";

const styledSpan = {
  color: "#FFF",
  marginRight: "10px",
};

const Span = () => {
  return <span style={styledSpan}>,</span>;
};

export const About = () => {
  return (
    <Container>
      <Name>About Me</Name>
      <Str mb={2}>// Software Engineer</Str>
      <div className="content">
        <div className="left-side">
          <div className="skills-container">
            <Content>
              <Title>Main Skills</Title>
              <Skill>
                HTML, CSS, JavaScript, React, TypeScript, NodeJS, Webpack, ThreeJS
              </Skill>
              <Skill>C#, .NET, ASP.NET</Skill>
              <Skill>Postgres, MySQL, AWS, Azure, Docker, API Rest, Git, Linux</Skill>
            </Content>
            <Content>
              <Title>Design/Art</Title>
              <Skill>Figma, Photoshop, Blender</Skill>
            </Content>
            <Content>
              <Title>Soft Skills</Title>
              <Str>
                <span className="span-desc">
                  "Strong analytical and local thinking"
                </span>
                <Span />
                <br />
                <span className="span-desc">"Excellent problem-solving"</span>
                <Span />
                <br />
                <span className="span-desc">"ustomer oriented focus"</span>
              </Str>
            </Content>
          </div>

          <div>
            <Title>Languages</Title>
            <Skill type="subtitle" mb={2.5}>
              English: <span className="span-desc">"Fluent"</span>
              <Span />
              <br />
              Portuguese: <span className="span-desc">"Native"</span>
              <Span />
              <br />
              German: <span className="span-desc">"Intermediate"</span>
            </Skill>
          </div>
        </div>

        <div className="right-side">
          <div>
            <Title>Experiences</Title>
            <Skill type="subtitle" mb={2.5}>
              Software Support Engineer <br />
              <span style={{ color: "#E17C34" }}>
                @ DALIM Software - Germany (Hybrid){" "}
                <span style={{ fontSize: "0.8em", color: "#fff" }}>
                  2021 - 2023
                </span>
              </span>
              <br />
              <Str>
                I worked actively in the development area, creating many
                plugins, applications and new web features. Developed technical
                support for the European and American markets, focusing on the
                development and implementation of digital processes for
                workflow, file management and project management.
              </Str>
            </Skill>

            <Skill type="subtitle" mb={2.5}>
              Software Engineer <br />
              <span style={{ color: "#E17C34" }}>
                @ Razzo Tech - Brazil (Remote){" "}
                <span style={{ fontSize: "0.8em", color: "#fff" }}>
                  03/2021 - 08/2021
                </span>
              </span>
              <br />
              <Str>
                I Developed web and mobile applications (front-end and back-end)
                with modern technologies, such as React JS, React Native, and
                Node JS.
              </Str>
            </Skill>

            <Skill type="subtitle">
              UI/UX Designer <br />
              <span style={{ color: "#E17C34" }}>
                @ Razzo Tech - Brazil (Remote){" "}
                <span style={{ fontSize: "0.8em", color: "#fff" }}>
                  01/2021 - 03/2021
                </span>
              </span>
              <br />
              <Str>
                Developed modern and responsive layouts for mobile and web
                platforms using Figma and Adobe Illustrator.
              </Str>
            </Skill>
          </div>
        </div>
      </div>
    </Container>
  );
};
