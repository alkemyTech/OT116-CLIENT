import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Main } from "../../Utils/MUI Components/Main";
import { AppBar } from "../../Utils/MUI Components/AppBar";
import { DrawerHeader } from "../../Utils/MUI Components/DrawerHeader";
import { tema } from "../../Styles/Theme/GlobalTheme";
import { useHistory } from 'react-router-dom';

const BackofficeHeader = () => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();

  const { push } = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <ThemeProvider theme={tema}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar color="boton" position="fixed" open={open}  >
          <Toolbar>
            <IconButton
              color="lightBotons"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="white" noWrap component="div">
              Somos mas
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: 240,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              bgcolor:'boton.main',
              color:'lightBotons.main',
              width: 240,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List sx={{ ml: 1 }}>
            <ListItemButton onClick={()=>push("/")} ><ListItemText primary="Ir a Homepage"/></ListItemButton>
            <ListItemButton onClick={()=>push("/backoffice")} ><ListItemText primary="Inicio"/></ListItemButton>
            <ListItemButton onClick={()=>push("/backoffice/news")} ><ListItemText primary="Novedades"/></ListItemButton>
            <ListItemButton onClick={()=>push("/backoffice/activities")} ><ListItemText primary="Actividades"/></ListItemButton>
            <ListItemButton onClick={()=>push("/backoffice/categories")} ><ListItemText primary="Categorias"/></ListItemButton>
            <ListItemButton onClick={()=>push("/backoffice/testimonials")} ><ListItemText primary="Testimonios"/></ListItemButton>
            <ListItemButton onClick={()=>push("/backoffice/organization/edit")} ><ListItemText primary="Organizacion"/></ListItemButton>
            <ListItemButton onClick={()=>push("/backoffice/slides")} ><ListItemText primary="Slides"/></ListItemButton>
            <ListItemButton onClick={()=>push("/backoffice/users")} ><ListItemText primary="Usuarios"/></ListItemButton>
            <ListItemButton onClick={()=>push("/backoffice/members")} ><ListItemText primary="Miembros"/></ListItemButton>
          </List>
          <Divider />
        </Drawer>
        <Main open={open}>
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default BackofficeHeader;
