import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

const drawerStyles = {
    padding:'20px',
    textAlign: 'center'
};

const listItemStyles = {
    color: '#555',
    '& a': {
        textDecoration: 'none',
        color: '#555',
        width: '100%',
    }
};

const Header = ({}) => {

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(()=>{
        console.log(mobileOpen);
    },[mobileOpen]);

    const links = [
        {name: 'Flamingo', url: '/flamingo-theme'},
        {name: 'Penguin', url: '/penguin-theme'},
        {name: 'Wagashi', url: '/wagashi-theme'},
        {name: 'Winter Horse', url: '/horse-theme'},
    ];

    const Drawers = () => 
    <Box sx={drawerStyles}>
        <Typography sx={{textTransform: 'uppercase', color: '#555'}} variant={'h5'}>Themes</Typography>
        <Divider sx={{margin: '10px 0px 10px 0px'}}/>
        <List>
            {links.map((item)=>{
                return (
                    <ListItem sx={listItemStyles} key={item.name} disablePadding>
                        <Link to={item.url}>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                );
            })}
        </List>
    </Box>;


    return (
        <AppBar sx={{pointerEvents:'none'}} color="transparent" elevation={0} component="nav">
            <Toolbar >
                <IconButton onClick={handleDrawerToggle} edge="start" color="inherit" aria-label="menu" sx={{ pointerEvents:'auto', mr: 2 }}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
            <Drawer
            anchor={'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            >
                <Drawers/>
            </Drawer>
        </AppBar>
    );

}

export default Header;