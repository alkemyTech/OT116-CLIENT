import { Container, TableFooter } from "@mui/material";
import React, { useEffect } from "react";;

const Footer = () => {
  return (
    <>
    <div className="ContenedorWaveFooter">
      </div>
    <TableFooter
      sx={{
        display: { xs: "flex" },
        justifyContent: { xs: "center" },
        alignItems: { xs: "center" },
        justifyContent: { xs: "space-evenly" },
        flexDirection: { xs: "column" },
        backgroundColor:"#28527A",
        color:"white"
      }}
    >
      <Container
        sx={{
          display: { xs: "grid", sm: "flex" },
          justifyContent: { xs: "center" },
          alignItems: { xs: "center" },
          justifyContent: { xs: "space-around" },
        }}
      >
        Footer
      </Container>
    </TableFooter>
    </>
  );
};

export default Footer;
