import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import DefaultImage from "../../Assets/Title/default.jpg";
import "../../Styles/BoxStyle.css";


const Title = (props) => {
  const { title, image, id } = props;

  const [titleImage, setTitleImage] = useState("");

  useEffect(() => {
    const finalImage = image ? image : DefaultImage;
    setTitleImage(finalImage);
  }, [image]);

  return (
    <div>
      <Box
        className="boxStyle"
        key={id}
        sx={{
          backgroundImage: `url(${titleImage})`,
          position: "relative",
          height: "250px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { lg: "60px", md: "40px", xs: "35px" },
            color: "white",
            textShadow: "black 1px 0 6px",
            position: "absolute",
            bottom: "40px",
            right: { lg: "100px", md: "40px", xs: "30px" },
            textTransform: "uppercase",
            fontWeight: "600",
            letterSpacing: "0.5rem",
          }}
        >
          {title}
        </Typography>
      </Box>
    </div>
  );
};

export default Title;
