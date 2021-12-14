import { Container, Box, Typography } from "@mui/material";
import React from "react";
import Image from "../../Assets/ToysCampaign/Logotipo campaña juguetes.png";
import Image2 from "../../Assets/ToysCampaign/Imágenes contenido opción 1.jpg";
import Image3 from "../../Assets/ToysCampaign/Imágenes contenido opción 2.png";

const Content = () => {
  const campaignDate = new Date(2021, 11, 18, 17, 30);
  const currentDate = new Date();
  const calculateRemainingTime = () => {
    let seconds = Math.floor((campaignDate - currentDate) / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    hours = hours - days * 24;
    minutes = minutes - days * 24 * 60 - hours * 60;
    seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
    return [days, hours, minutes, seconds];
  };
  const timeLeft = calculateRemainingTime();
  const timeLeftFormatted = `${timeLeft[0]}d ${timeLeft[1]}h ${timeLeft[2]}m`;

  const staticImages = [
    { img: Image2, alt: "", rotate: "10deg", align: "end" },
    { img: Image3, alt: "", rotate: "-10deg", align: "end" },
  ];

  const absoluteImages = [
    { img: Image, alt: "", rotate: "45deg", align: "start" },
    { img: Image, alt: "", rotate: "-45deg", align: "start" },
  ];

  return (
    <>
    <Container
      width={false}
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        marginTop: "50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          zIndex: "10",
          gap: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            maxWidth: { lg: "70%" },
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <Typography variant="h5">
            {campaignDate.toLocaleString("en-GB").slice(0, -3)}hs
          </Typography>
          <Typography variant="h5">
            Avenida Lacarra 621, Parque Avellaneda, Provincia de Buenos Aires
          </Typography>
        </Box>
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
          TE QUEDAN: {timeLeftFormatted} para participar!
        </Typography>
        <Typography paragraph sx={{ maxWidth: { xs: "100%", lg: "65%" } }}>
          Te invitamos a sumarte donando juguetes nuevos o usados en buen estado
          para que podamos armarles regalos personalizados a los niños y adultos
          de las instituciones que ayudamos desde la Fundación.
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          minHeight: "300px",
          justifyContent: "space-between",
          position: "absolute",
          width: "100%",
          top: "60px",
        }}
      >
        {absoluteImages.map((image) => (
          <img
            src={image.img}
            alt={image.alt}
            width="200px"
            style={{
              transform: `rotate(${image.rotate})`,
              height: "fit-content",
              alignSelf: image.align,
            }}
          />
        ))}
      </Box>
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          minHeight: "300px",
          justifyContent: "space-around",
          gap: "150px",
        }}
      >
        {staticImages.map((image) => (
          <img
            src={image.img}
            alt={image.alt}
            width="200px"
            style={{
              transform: `rotate(${image.rotate})`,
              height: "fit-content",
            }}
          />
        ))}
      </Box>
    </Container>
    </>
  );
};

export default Content;
