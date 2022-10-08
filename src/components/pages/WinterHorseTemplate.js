import React, {useEffect} from 'react';
import Header from '../Header';
import { Box, Container, Grid, List, ListItem, ListItemButton, Typography } from '@mui/material';

// import '../../styles/theme3-winter-horse.scss';

const horseImg = require('../../assets/horse-snow.jpg');

const outerStyles = {
    margin:0,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
};

const mainStyles = {
    backgroundColor: '#FFF',
    width: '90%',
    maxHeight: '100vh',
    margin: '80px auto 80px auto',
    boxShadow: '0px 10px 10px 0px #111',
};

const sideNavStyles = {
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& img': {
        backgroundColor:'lightgray',
        backgroundImage: `url(${horseImg})`,
        backgroundSize: 'contain',
        width: '100%',
        height: 'auto',
        overflow:'hidden',
    },
    '& nav': {
        width:'100%',
        display:'flex',
        '& ul': {
            width: '100%',
        },
        '& a': {
            textDecoration: 'none',
            color: '#333'
        }
    }
};

const contentStyles = {
    padding:'10px 20px 10px 20px',
    '& p, h5, h6': {
        color: '#555',
        margin: '0 0 8px 0',
    },
    '& section': {
        margin: '0px 0px 36px 0px'
    }

};

const navButtonStyles = {
    justifyContent: 'center'
};


const IrishCobTemplate = () => {

    useEffect(()=>{
        document.title = "Gallery | Winter Horse";
    },[]);

    return (
        <Container sx={outerStyles} maxWidth={false} disableGutters>
            <Header />
            <Grid container direciton="row" sx={mainStyles} spacing={0}>
                <Grid item xs={12} sm={3} sx={sideNavStyles} className="side-nav">
                    <nav>
                        <List spacing={0}>
                            <ListItem><ListItemButton sx={navButtonStyles}><Typography variant={'body1'}><a href="#home">Home</a></Typography></ListItemButton></ListItem>
                            <ListItem><ListItemButton sx={navButtonStyles}><Typography variant={'body1'}><a href="#about">About</a></Typography></ListItemButton></ListItem>
                            <ListItem><ListItemButton sx={navButtonStyles}><Typography variant={'body1'}><a href="#links">Links</a></Typography></ListItemButton></ListItem>
                        </List>
                    </nav>
                    <img alt="Irish Cob Horse" src={horseImg}/>
                </Grid>
                <Grid item xs={12} sm={9} sx={contentStyles} className="content">
                    <section className="section-1">
                        <Typography sx={{textTransform:'uppercase'}} variant={'h5'}>Introduction</Typography>
                        <Typography variant={'body1'}>
                            This is the introductory paragraph for this webpage.
                            The theme Flamingo is suppsoed to be very pink and very bright.
                            There is an 80s feel to the site given the color scheme.
                            The flamingo photograph on top should draw in the user.    
                        </Typography>
                    </section>
                    <section className="section-2">
                        <Typography sx={{textTransform:'uppercase'}} variant={'h6'}>Secondary Text</Typography>
                        <Typography variant={'body1'}>
                            This is the introductory paragraph for this webpage.
                            The theme Flamingo is suppsoed to be very pink and very bright.
                            There is an 80s feel to the site given the color scheme.
                            The flamingo photograph on top should draw in the user.    
                        </Typography>
                    </section>
                </Grid>
            </Grid>
        </Container>
    );
}

export default IrishCobTemplate;