import React, {useEffect, useState} from 'react';
import Header from '../Header';
import { Box, Container, Divider, Grid, Link, Typography } from '@mui/material';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bgImg = require('../../assets/penguins.jpg');


const carouselSettings = {
    prevArrow: false,
    nextArrow: false,
    arrows: false,
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

const backgroundStyle = {
    backgroundImage: 'linear-gradient(to bottom left,  transparent 70%, lightseagreen)',
    margin: '0',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height: '100%',
}

const outerBoxStyles = {
    paddingTop: {xs:'0px', sm:'30px'},
    paddingBottom: {xs:'0px', sm:'50px'},
    width: '100%',
    height: {xs: '100%', sm: 'auto'},
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}

const innerBoxStyles = {
    background: `linear-gradient(to right, white 60%, transparent), 
    url(${bgImg})`,
    backgroundPosition: 'bottom right',
    backgroundSize: 'auto 100%',
    backgroundRepeat: 'no-repeat',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)',
    padding: {xs:'20px 0 20px 0', sm:'20px'},
    height: {xs:'100vh', sm:'80vh'},
    width: {xs:'100%', sm:'80%'},
    margin: 'auto'
}

const topNavStyles = {
    display:'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent:'flex-end',
    '& a': {
        textDecoration: 'none',
        color: '#222',
        fontSize: '14px',
        fontWeight: '700',
        marginRight: '30px',
        transition: '0.4s',
        '&:hover': {
            color:'#000'
        }
    },
    '& .button': {
        color: '#FFF',
        marginLeft: '-5px',
        backgroundColor: 'darkcyan',
        textDecoration: 'none',
        textShadow: 'none',
        padding: '8px 16px',
        '&:hover': {
            color: '#FFF',
            backgroundColor: 'lightseagreen',
        }
    }
};

const mainBoxStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: {xs:'auto', sm:'100%'},
    width: {xs:'auto', sm:'100%'},
    padding: {xs: '54px 16px 0px 16px', sm: '0px'},
    '& h3': {
        color: '#555',
        margin: '16px 0'
    }, 
    '& h5': {
        color: '#333',
        fontWeight: 'bold',
        margin: '16px 0'
    },
    '& .text p': {
        fontSize: '12px',
        color:'#555',
        margin : '16px 0'
    },
    '& .content .button': {
        textDecoration: 'none',
        textShadow: 'none',
        padding:'8px 16px',
        borderRadius:'36px',
        fontWeight: 'bold',
        color: '#FFF',
        backgroundColor: 'darkcyan',
        transition: '0.4s',
        '&:hover': {
            backgroundColor: 'lightseagreen',
            color: '#FFF'
        } 
    },
    '& .slide': {
        maxWidth:'600px',
        height: '400px',
        padding:'20px',
    }
}

const carouselButtonStyles = {
    display: 'flex',
    flexDirection: {xs:'row', sm:'column'},
    alignItems:'flex-end',
    justifyContent:'center',
    '& a': {
        backgroundColor: {xs: '#333', sm:'#FFF'},
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        margin: '10px',
        transition: '0.3s',
        '&:hover': {
            boxShadow: '0 0 3px white'
        }
    }
}

const PenguinTemplate = () => {

    const [slider, setSlider] = useState(null);

    useEffect(()=>{
        document.title = "Gallery | Penguins";
    },[]);

    const goToSlide = (num) => {
        if (slider == null) return;
        slider.slickGoTo(num - 1);
    }

    return (
        <Container sx={backgroundStyle} maxWidth={false} disableGutters>
            <Header />
            <Box sx={outerBoxStyles} className="outer-box">
                <Box sx={innerBoxStyles} className="inner-box">

                    <Box sx={topNavStyles} className="top-nav">
                        <Typography sx={{textTransform:'uppercase'}} variant={'body1'}><a href="#intro">Home</a></Typography>
                        <Typography sx={{textTransform:'uppercase'}} variant={'body1'}><a href="#first">About</a></Typography>
                        <Typography sx={{textTransform:'uppercase'}} variant={'body1'}><a href="#second">Info</a></Typography>
                        <Typography sx={{textTransform:'uppercase'}} variant={'body1'}><a className="button" href="#intro">Contact</a></Typography>
                    </Box>

                    <Box sx={mainBoxStyles} className="main-box">
                        <Grid container spacing={0} sx={{width: '100%'}}>
                            <Grid item xs={12} sm={11} className="right-content">
                                <Slider ref={c => (setSlider(c))} {...carouselSettings}>
                                <Box className="slide slide-1">
                                    <header className="title">
                                        <Typography sx={{textTransform:'uppercase'}} variant={'h3'}>Penguin</Typography>
                                        <Typography sx={{textTransform:'uppercase'}} variant={'h5'}>Amet dapibus nisi elit</Typography>
                                    </header>
                                    <Box className="content">
                                        <div className="text">
                                            <Typography variant={'body1'}>Quisque commodo, tortor id tristique maximus, nunc nulla dapibus diam, sit amet dapibus nisi elit id mauris. Praesent diam risus, pretium et purus a, convallis faucibus purus.</Typography>
                                            <Typography sx={{textTransform:'uppercase'}} variant={'body1'}><a className="button" href="#intro">Learn More</a></Typography>
                                        </div>
                                    </Box>
                                </Box>
                                <Box className="slide slide-2">
                                    <header className="title">
                                        <Typography sx={{textTransform:'uppercase'}} variant={'h4'}>About</Typography>
                                    </header>
                                    <Divider />
                                    <Box className="content">
                                        <div className="text">
                                            <Typography variant={'body1'}>Quisque commodo, tortor id tristique maximus, nunc nulla dapibus diam, sit amet dapibus nisi elit id mauris. Praesent diam risus, pretium et purus a, convallis faucibus purus.</Typography>
                                            <Typography variant={'body1'}>Aliquam rhoncus felis id vehicula interdum. Pellentesque a consectetur elit. Fusce accumsan dictum orci, a fringilla arcu sagittis nec. Donec ornare, lectus rhoncus hendrerit sagittis, dolor erat tincidunt nulla, fringilla porttitor orci ante molestie mauris.</Typography>
                                        </div>
                                    </Box>
                                </Box>
                                <Box className="slide slide-3">
                                    <header className="title">
                                        <Typography sx={{textTransform:'uppercase', marginBottom:'0px!important'}} variant={'h3'}>Information</Typography>
                                        <Divider />
                                        <Typography sx={{textTransform:'uppercase', marginTop:'12px'}} variant={'h6'}>Ipsum Lorem</Typography>
                                    </header>
                                    <Box className="content">
                                        <div className="text">
                                            <Typography variant={'body1'}>Quisque commodo, tortor id tristique maximus, nunc nulla dapibus diam, sit amet dapibus nisi elit id mauris. Praesent diam risus, pretium et purus a, convallis faucibus purus.</Typography>
                                            <Typography variant={'body1'}>Aliquam rhoncus felis id vehicula interdum. Pellentesque a consectetur elit. Fusce accumsan dictum orci, a fringilla arcu sagittis nec. Donec ornare, lectus rhoncus hendrerit sagittis, dolor erat tincidunt nulla, fringilla porttitor orci ante molestie mauris.</Typography>
                                        </div>
                                    </Box>
                                </Box>
                                </Slider>
                            </Grid>
                            <Grid item xs={12} sm={1} sx={carouselButtonStyles} className="carousel-buttons">
                                <Link onClick={()=>goToSlide(1)}><div className="carousel-btn"></div></Link>
                                <Link onClick={()=>goToSlide(2)}><div className="carousel-btn"></div></Link>
                                <Link onClick={()=>goToSlide(3)}><div className="carousel-btn"></div></Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default PenguinTemplate;