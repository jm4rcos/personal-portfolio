import React, { useEffect, useState } from 'react';
import { HLine, PortFolioText } from '../../Screens/LandingPage/style';

export default function Banner() {
    return (
      <div
        style={{
          width: "100%",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          zIndex: 500,
          backgroundColor: "transparent",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "70%",
            gap: "2rem",
            zIndex: 100,
            backgroundColor: "transparent",
          }}
        >
          <p
            style={{
              flexWrap: "nowrap",
              width: "200px",
              fontSize: "1.3rem",
              color: "#888",
              fontWeight: "300",
              backgroundColor: "transparent",
            }}
          >
            João Marcos
          </p>
          <HLine />
        </div>
        <div
          className="text-banner"
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-around",
            background: "transparent",
            position: "relative",
            transition: "transform 0.3s ease",
          }}
        >
          {["P", "O", "R", "T", "F", "O", "L", "I", "O"].map((letter, i) => (
            <PortFolioText
              key={i}>
              {letter}
            </PortFolioText>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "2rem",
            zIndex: 100,
            backgroundColor: "transparent",
          }}
        >
          <HLine style={{ width: "50%" }} />
          <p
            style={{
              flexWrap: "nowrap",
              fontSize: "1.3rem",
              textAlign: "right",
              color: "#888",
              fontWeight: "300",
              backgroundColor: "transparent",
            }}
          >
            Software Engineer
          </p>
        </div>
      </div>
    );
}
