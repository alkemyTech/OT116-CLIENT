import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../../../Styles/BackofficeLayout.css";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Fade, Zoom } from "react-awesome-reveal";
import TitleBackoffice from "../TitleBackoffice";
import BackofficeHeader from "../BackofficeHeader";
const BackofficeLayout = () => {
  const BackofficeCategories = [
    {
      images: "https://source.unsplash.com/k_Am9hKISLM",
      name: "Novedades",
      descripcion: "En esta seccion podes enterarte de nuestras novedades",
      button: "Ir a novedades",
      href: "/backoffice/news",
    },
    {
      images: "https://source.unsplash.com/RLw-UC03Gwc",
      name: "Actividades",
      descripcion:
        "Las actividades de las cuales nuestra ong esta a disposicion las veras aquí",
      button: "Ir a actividades",
      href: "/backoffice/activities",
    },
    {
      images: "https://source.unsplash.com/Q9y3LRuuxmg",
      name: "Categorias",
      descripcion:
        "Entra para poder ver todas las categorias de nuestro backoffice",
      button: "Ir a categorias",
      href: "/backoffice/categories",
    },
    {
      images: "https://source.unsplash.com/Fsgzm8N0hIY",
      name: "Testimonios",
      descripcion: "Podras ver los testimonios que brindan de nuestra ong",
      button: "Ir a testimonios",
      href: "/backoffice/testimonials",
    },
    {
      images: "https://source.unsplash.com/3V8xo5Gbusk",
      name: "Organizacion",
      descripcion: "La organizacion y todos sus procesos administrativos",
      button: "Ir a Organizacion",
      href: "/backoffice/organization/edit",
    },
    {
      images: "https://source.unsplash.com/vpm9z4BLgRY",
      name: "Slides",
      descripcion:
        "Podras entrar para visualizar los slides que presentamos de la organización",
      button: "Ir a Slides",
      href: "/backoffice/slides",
    },
    {
      images: "https://source.unsplash.com/QBpZGqEMsKg",
      name: "Usuarios",
      descripcion:
        "Entra para visualizar o crear nuestros usuarios de la organizacion",
      button: "Ir a Usuarios",
      href: "/backoffice/users",
    },
    {
      images: "https://source.unsplash.com/e6n7uoEnYbA",
      name: "Miembros",
      descripcion:
        "Entra para visualizar o crear nuestros miembros de la organizacion",
      button: "Ir a Miembros",
      href: "/backoffice/members",
    },
  ];
  return (
    <>
      <BackofficeHeader></BackofficeHeader>
      <div>
        <TitleBackoffice title={"Backoffice home"} />
        <Zoom duration="500" cascade>
          <Grid
            sx={{
              justifyContent: "center",
              width: "80%",
              margin: "0 auto",
            }}
            container
            spacing={0}
          >
            {BackofficeCategories.map((categories) => (
              <Card
                className="CardTransition"
                sx={{
                  maxWidth: 300,
                  margin: 2,
                  padding: 0,
                  boxShadow: 20,
                  borderRadius: 2,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="170"
                  image={categories.images}
                  alt="green iguana"
                  className="CardBackoffice"
                />
                <CardContent
                  sx={{
                    padding: "10px 15px 20px",
                  }}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    {categories.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {categories.descripcion}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    padding: "0px 0px 0px",
                  }}
                >
                  <Button
                    sx={{
                      borderRadius: 0,
                      m: "0 auto",
                      backgroundColor: "#28527a",
                      width: "-webkit-fill-available",
                    }}
                    size="large"
                    variant="contained"
                  >
                    <Link
                      className="ButtonUnderline"
                      color="white"
                      underline="none"
                      to={categories.href}
                      style={{width:'100%'}}
                    >
                      <Typography align="center" variant="string" color="white">
                        {categories.button}
                      </Typography>
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Grid>
        </Zoom>
      </div>
    </>
  );
};

export default BackofficeLayout;
