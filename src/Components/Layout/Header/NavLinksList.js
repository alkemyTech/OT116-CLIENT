import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const NavLinksList = ({navLinks, isLogged, horizontal}) => {
    return (
        <>
        {horizontal ?
            <List sx={{display:{xs:'none', lg:'flex'}}}>
                {navLinks.map((navLink) => (
                    navLink.private ? (isLogged ??
                <ListItem component={Link} to={navLink.link} sx={{minWidth:'fit-content'}} button key={navLink.text}>
                    <ListItemText primary={navLink.text} sx={navLink.active ? {borderBottom:'2px solid #ec4c4c'} : {}}/>
                </ListItem>)
                : <ListItem component={Link} to={navLink.link} sx={{minWidth:'fit-content'}} button key={navLink.text}>
                    <ListItemText primary={navLink.text} sx={navLink.active ? {borderBottom:'2px solid #ec4c4c'} : {}}/>
                  </ListItem>
                ))}
            </List>
            :<List>
            {navLinks.map((navLink) => (
                navLink.private ? (isLogged ??
                    <ListItem component={Link} to={navLink.link} button key={navLink.text}>
                    <ListItemText primary={navLink.text} sx={navLink.active ? {borderBottom:'2px solid #1a76d2'} : {}}/>
                  </ListItem>)
                  : <ListItem component={Link} to={navLink.link} sx={{maxWidth:'fit-content'}} button key={navLink.text}>
                      <ListItemText primary={navLink.text} sx={navLink.active ? {borderBottom:'2px solid #1a76d2'} : {}}/>
                    </ListItem>
              ))}
            </List>
        }
        </>
    )
}

export default NavLinksList;
