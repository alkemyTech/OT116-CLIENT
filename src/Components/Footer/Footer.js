import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Container, Box, TableFooter } from "@mui/material";
import { getOrganizationInformation } from "../../Services/OrganizationInformation";

const Footer = () => {
  const linkStyle = { textDecoration: "none", color:"white" };
  const [organizationInformation, setOrganizationInformation] = useState({});

  useEffect(() => {
    getOrganizationInformation().then((res) => {
      setOrganizationInformation(res.data);
    });
  }, []);

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
        <Box
          sx={{
            display: { xs: "flex" },
            justifyContent: { xs: "center" },
            alignItems: { xs: "center" },
            flexDirection: { xs: "column" },
            width: { xs: "100%" },
          }}
        >
          <img  height="120px" src={organizationInformation.logo} alt="logo" />
        </Box>
        <Box
          sx={{
            display: { xs: "flex" },
            width: { xs: "100%" },
            justifyContent: { xs: "space-evenly" },
            alignItems: { xs: "center" },
            flexWrap: { xs: "wrap" },
          }}
        >
          <Box
            sx={{
              margin: "3px",
            }}
          >
            <Link to="/school-campaign" style={linkStyle}>
              Campaña Escolar
            </Link>
          </Box>
          <Box
            sx={{
              margin: "3px",
            }}
          >
            <Link to="/toys-campaign" style={linkStyle}>
              Campaña Juguetes
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "flex" },
            width: { xs: "100%" },
            justifyContent: { xs: "space-evenly" },
          }}
        >
          <a href={`https://${organizationInformation.facebook_url}`} target="_blank">
            <FacebookIcon sx={{ fontSize: 40, textDecoration: "none", color:"#ec4c4c"}} />
          </a>
          <a href={`https://${organizationInformation.linkedin_url}`} target="_blank">
          <LinkedInIcon sx={{ fontSize: 40, textDecoration: "none", color:"#f8fc74" }} />
          </a>
          <a href={`https://${organizationInformation.instagram_url}`} target="_blank">
          <InstagramIcon sx={{ fontSize: 40, textDecoration: "none", color:"#8dcaff" }} />
          </a>
          <a href={`https://${organizationInformation.twitter_url}`} target="_blank">
          <TwitterIcon sx={{ fontSize: 40, textDecoration: "none", color:"white" }} />
          </a>
        </Box>
      </Container>
    </TableFooter>
    </>
  );
};

export default Footer;
