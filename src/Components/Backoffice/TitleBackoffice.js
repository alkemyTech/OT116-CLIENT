import { Container } from "@mui/material";
import React from "react";

const TitleBackoffice = ({ title }) => {
  return (
    <Container
      sx={{
        margin: 0,
        display: "flex",
        justifyContent: "center",
        margin: "0 auto",
        color: "#3a3a3a",
      }}
    >
      <h1>{title}</h1>
    </Container>
  );
};

export default TitleBackoffice;
