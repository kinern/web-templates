import React, {useEffect} from 'react';
import Header from '../Header';
import { Box, Container } from '@mui/material';

//import '../../styles/theme2-penguin.scss';

const bgImg = require('../../assets/penguins.jpg');

const backgroundStyle = {
    backgroundImage: 'linear-gradient(to bottom left,  transparent 70%, lightseagreen)',
    height: '100%',
    margin: '0',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
}

const outerBoxStyles = {
    height: '100%',
    paddingTop: '50px',
    paddingBottom:'50px',
    width: '100%',
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
    padding: '20px',
    height: '80vh',
    width: '80vw'
}

const topNavStyles = {
    textAlign: 'right',
    '& a': {
        textDecoration: 'none',
        color: '#FFF',
        textShadow: `-1px 1px 0 rgba(0, 0, 0, 0.4),
                      1px 1px 0 rgba(0, 0, 0, 0.4),
                     1px -1px 0 rgba(0, 0, 0, 0.4),
                    -1px -1px 0 rgba(0, 0, 0, 0.4)`,
        fontSize: '14px',
        fontWeight: '700',
        marginRight: '30px',
        transition: '0.4s',
        '&:hover': {
            color:'lightblue'
        }
    },
    '& .button': {
        marginLeft: '-5px',
        backgroundColor: 'lightseagreen',
        textDecoration: 'none',
        textShadow: 'none',
        padding: '5px',
        '&:hover': {
            color: '#FFF',
            backgroundColor: 'darkcyan',
        }
    }
};

const mainBoxStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    '& .text': {
        fontSize: '12px',
        color:'#707070',
    },
    '& .content .button': {
        textDecoration: 'none',
        textShadow: 'none',
        padding:'5px',
        color: '#FFF',
        backgroundColor: 'darkcyan',
        transition: '0.4s',
        '&:hover': {
            backgroundColor: 'lightseagreen',
            color: '#FFF'
        } 
    }
}

const carouselButtonStyles = {
    display: 'flex',
    flexDirection: 'column',
    '& a': {
        backgroundColor: '#FFF',
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

    useEffect(()=>{
        document.title = "Gallery | Penguins";
    },[]);

    return (
        <Container sx={backgroundStyle} maxWidth={false} disableGutters>
            <Header />
            <Box sx={outerBoxStyles} className="outer-box">
                <Box sx={innerBoxStyles} className="inner-box">

                    <Box sx={topNavStyles} className="top-nav">
                        <a href="#intro">Home</a>
                        <a href="#first">About</a>
                        <a href="#second">Info</a>
                        <a className="button" href="#intro">Contact</a>
                    </Box>

                    <Box sx={mainBoxStyles} className="main-box">
                        <Box sx={{maxWidth: '300px'}} className="right-content">
                            <Box className="slide-1">
                                <header className="title">
                                    <h1>Penguins</h1>
                                    <h4>A cool, minimalistic theme</h4>
                                </header>
                                <div className="content">
                                    <div className="image"></div>
                                    <div className="text">
                                        <p>Quisque commodo, tortor id tristique maximus, nunc nulla dapibus diam, sit amet dapibus nisi elit id mauris. Praesent diam risus, pretium et purus a, convallis faucibus purus.</p>
                                        <a className="button" href="#intro">Learn More</a>
                                    </div>
                                </div>
                            </Box>
                        </Box>
                        <Box sx ={carouselButtonStyles} className="carousel-buttons">
                            <a href="#intro1"><div className="carousel-btn"></div></a>
                            <a href="#intro2"><div className="carousel-btn"></div></a>
                            <a href="#intro3"><div className="carousel-btn"></div></a>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default PenguinTemplate;