import Title from "../Title/Title";
import { Box, Grid, Container, Typography } from "@mui/material";
import "../../Styles/Container.css";
import {
  LinkedinCompanyProfile,
  LinkedinFollowCompany,
  TwitterTweet,
} from "react-social-plugins";
import AboutUsMembers from "./AboutUsMembers";
import nosotros from "../../Assets/TitleImages/nosotros.jpg";
import logo from "../../Assets/Logo/logo.png";
import nosotrossvg from "../../Assets/waves/nosotros.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
    AOS.refreshHard();
    return () => {};
  }, []);
  AOS.init();
  const description = `Somos un centro comunitario que acompaña a más de 700 personas a través de las áreas de:
        Educación, deportes, primera infancia, salud, alimentación y trabajo social.`;
  return (
    <>
      <Box className="title-container aos init">
        <Title title="NOSOTROS" image={nosotros} />
        <div className="title-container-text"></div>
      </Box>
      <div className="ContenedorNosotros">
        <Box
          data-aos="flip-left"
          data-aos-duration="3000"
          data-aos-delay="500"
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 167, md: 333 },
            maxWidth: { xs: 250, md: 450 },
          }}
          alt="The house from the offer."
          src={nosotrossvg}
        ></Box>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="500"
          className="ContenedorNosotrosH1"
        >
          <Box
            component="h1"
            sx={{
              fontSize: { xs: 15, md: 30 },
            }}
          >
            {description}
          </Box>
        </div>
      </div>
      <Grid className="ContenedorTitulo">
        {/* <img src={logo} alt="Logo"  className="MiembrosLogo"/> */}
      </Grid>
      <div className="ContenedorCards">
        <AboutUsMembers />
      </div>
      <div>
        {/* <div
            className="badge-base LI-profile-badge"
            data-locale="es_ES"
            data-size="large"
            data-theme="light"
            data-type="HORIZONTAL"
            data-vanity="corporación-somos-más-68737437"
            data-version="v1"
          ></div> */}
        <div>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              my: 1,
              mb: 7,
              mt: 9,
            }}
          >
            <Grid container sx={{ m: 3 }}>
              <TwitterTweet
                align="center"
                coversation="none"
                tweetId="1450535690199085058"
                theme="light"
                width={300}
              />
              <TwitterTweet
                align="center"
                coversation="none"
                tweetId="1440383594615042052"
                theme="light"
                width={300}
              />
              <TwitterTweet
                align="center"
                coversation="none"
                tweetId="1271501359658012675"
                theme="light"
                width={300}
              />
            </Grid>
          </Container>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
