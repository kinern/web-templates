import React from 'react';
import Header from '../Header';
import { Box, Container } from '@mui/material';

import '../../styles/theme2-penguin.scss';

const backgroundStyle = {
    backgroundImage: 'linear-gradient(to bottom left,  transparent 70%, lightseagreen)',
    height: '100%',
    margin: '0',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
}

const PenguinTemplate = () => {
    return (
        <Container sx={backgroundStyle} maxWidth={false} disableGutters>
            <Header />
            <div className="outer-box">
                <div className="inner-box">
                    <div className="top-nav">
                        <a href="#intro">Home</a>
                        <a href="#first">About</a>
                        <a href="#second">Info</a>
                        <a className="button" href="#">Contact</a>
                    </div>
                    <div className="main-box">
                        <div className="right-content">
                            <Box className="slide-1">
                                <header className="title">
                                    <h1>Penguins</h1>
                                    <h4>A cool, minimalistic theme</h4>
                                </header>
                                <div className="content">
                                    <div className="image"></div>
                                    <div className="text">
                                        <p>Quisque commodo, tortor id tristique maximus, nunc nulla dapibus diam, sit amet dapibus nisi elit id mauris. Praesent diam risus, pretium et purus a, convallis faucibus purus.</p>
                                        <a className="button" href="#">Learn More</a>
                                    </div>
                                </div>
                            </Box>
                        </div>
                        <div className="carousel-buttons">
                            <a href="#intro1"><div className="carousel-btn"></div></a>
                            <a href="#intro2"><div className="carousel-btn"></div></a>
                            <a href="#intro3"><div className="carousel-btn"></div></a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default PenguinTemplate;