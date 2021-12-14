import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Container } from "@mui/material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const CustomCard = ({
  title,
  img,
  description,
  button,
  path,
  route,
  firstSocialLink,
  firstSocialLinkName,
  secondSocialLink,
  secondSocialLinkName,
  lines
}) => {
  const { push } = useHistory();

  return (
    <Container sx={{ display: "inline-flex" }}>
      <Card
        to={route}
        component={route ? Link : ""}
        sx={{
          width: 345,
          m: 2,
          boxShadow: 15,
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          textDecoration: "none",
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={
            img
              ? img
              : "https://image.freepik.com/free-vector/shining-circle-purple-lighting-isolated-dark-background_1441-2396.jpg"
          }
          alt="Organization image"
        />
        <CardContent
          sx={{
            height: 90,
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
            }}
          >
            {title || ""}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: lines || 2,
            }}
          >
            {description || ""}
          </Typography>
        </CardContent>
        <CardActions>
          {button ? (
            <Button
              size="small"
              color="button"
              variant="contained"
              onClick={() => push({ path })}
            >
              <Typography variant="string" color="white">
                {button}
              </Typography>
            </Button>
          ) : (
            <div></div>
          )}
          <a href={firstSocialLink} target="_blank">
            {firstSocialLinkName&&<FacebookIcon sx={{ fontSize: 40, textDecoration: "none", color:"blue"}}/>}
          </a>
          <a href={secondSocialLink} target="_blank">
            {secondSocialLinkName&&<LinkedInIcon sx={{ fontSize: 40, textDecoration: "none", color:"black" }} />}
          </a>
        </CardActions>
      </Card>
    </Container>
  );
};

export default CustomCard;
