import React from "react";
import { Container, Content, Name, } from "./style";

const styledSpan = {
  color: "#FFF",
  marginRight: "10px",
};

const Span = () => {
  return <span style={styledSpan}>,</span>;
};

export const Project = () => {
  return (
    <Container>
      <Name>Recent Project</Name>
      <Content>
        <div className="project-description">
          <div
            style={{
              width: "100%",
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <p>
              I developed a platform that allows businesses to create and
              register products, set operating hours, delivery locations, and
              add personalized fees.
            </p>
            <p>
              With an intuitive online menu organized by categories, customers
              can easily select items, including custom extras, and complete
              their orders by providing contact and payment information.
            </p>
            <p>
              The platform provides an order management page for businesses to
              handle requests received directly from the online menu.
              Additionally, it offers the option to send order status updates to
              the establishment's WhatsApp, keeping customers informed about the
              progress of their deliveries. With Gula Go!, businesses can
              provide a streamlined online ordering experience, enhancing
              convenience for customers and optimizing internal processes.
            </p>

          </div>
          <div style={{ width: "100%", textAlign: "left" }}>
            <p style={{ fontStyle: "italic", color: "#80b16e" }}>
              Developed with ASP.NET, C#, Azure,  NextJS, TypeScript, Redux and Postgres
            </p>
            <a style={{ color: '#2c96e4' }} href="https://gulago.vercel.app/">https://gulago.vercel.app/</a>
          </div>
        </div>
        <div className="project-image">
          <img src="/image1.png" alt="project-image" />
        </div>
      </Content>
      <Container></Container>
    </Container>
  );
};
