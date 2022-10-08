import React, {useEffect} from 'react';
import Icon from '@mdi/react'
import { mdiGithub, mdiLinkedin, mdiInstagram, mdiBasketball } from '@mdi/js';
import Header from '../Header';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';

//import '../../styles/theme1-flamingo.scss';
const bgImg = require('../../assets/leaves-upsp.jpg');
const headerImg = require('../../assets/flamingo-upsp.jpg');

const backgroundStyle = {
    background: `linear-gradient(rgba(240, 127, 127, 0.9), rgba(255, 206, 153, 0.9)), url(${bgImg})`,
    backgroundSize: 'cover',
    height: 'auto',
    margin: '0',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
}

const outerBoxStyles = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
};

const innerBoxStyles = {
    maxWidth: '800px',
    marginTop: '50px',
};

const innerNavStyles = {
    background: `linear-gradient(rgba(250, 110, 131, 0.8), rgba(255, 206, 153, 0.9)), url(${headerImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    margin: '20px 20px 0px 20px',
    padding: '180px 20px 20px 20px',
    maxWidth: '800px',
    borderRadius: '20px 20px 0 0',
    color: '#FFF',
    textShadow: '0 0 5px rgba(0, 0, 0, 1)',
    boxShadow: '0px 10px 10px 0px rgba(0, 0, 0, 0.4)',
    '& ul' : {
        textAlign : 'center',
        margin:'0px',
    },
    '& li' : {
        margin: '0 20px 0 20px',
        display: 'inline-block',
    },
    '& a' : {
        fontSize: '14px',
        fontWeight: '700',
        textDecoration: 'none',
        color: '#FFF',
        transition: '0.3s',
        '&:hover' : {
            color: '#DDD'

        }
    },
};

const mainStyles = {
    padding: '40px',
    margin: '0px 20px 50px 20px',
    backgroundColor: '#faf9f9',
    display: 'flex',
    maxWidth: '800px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: '0 0 20px 20px',
    boxShadow: '0px 10px 10px 0px rgba(0, 0, 0, 0.4)'
};

const introStyles = {
    marginTop: '50px',
    backgroundColor: 'cornsilk',
    borderRadius: '5px',
    padding: '40px 20px 40px 20px',
    '& h5': {
        color: '#555',
        fontSize: '26px',
        textAlign: 'center',
        marginBottom:'35px'
    },
    //boxShadow: '0px 5px 5px 0px rgba(0, 0, 0, 0.2)'
};

const sectionStyles = {
    padding: '100px 0px 100px 0px',
    '& p': {
        marginRight: '30px',
        color: '#555'
    },
    '& .inner-content, .section-3 .inner-content': {
        display: 'flex'
    },
    '& .section-1, .section-2, .section-3, footer': {
        marginTop: '100px'
    },
    '& .inner-content': {
        textAlign: 'right'
    }
}

const secondSectionStyles = {
    '& .content-image h1': {
        color: '#FFF',
        textShadow: '0 0 5px rgba(0, 0, 0, 0.4)',
    },
    '& p': {
        color: '#555'
    },
    '& .content-text': {
        margin: '50px 0px 100px 0px'
    },
    '& .content-image': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#545561',
        margin: '0px -40px 0px -40px',
        padding: '120px 0 40px 0'

    }
}

const thirdSectionStyles = {
    '& .content-image': {
        borderRadius: '100px'
    },
    '& p': {
        marginRight: '30px',
        color: '#555'
    },
    '& .inner-content': {
        display:'flex'
    }
}

const footerStyles = {
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: '100px 0 50px 0',
    '& p': {
        color: '#518285',
        fontWeight: '700',
        margin: 0,
        padding: 0,
    },
    '& .social-links' : {
        display:'flex',
        //color: '#518285',
        justifyContent: 'space-around',
        '& a': {
            margin: '5px'
        }
    }
}



const FlamingoTemplate = () => {

    useEffect(()=>{
        document.title = "Gallery | Flamingo";
    },[]);

    return (
        <Container sx={backgroundStyle} maxWidth={false} disableGutters>
            <Header />
            <Box sx={outerBoxStyles} className="outer-main">
                <Box sx={innerBoxStyles} className="inner-main">

                    <Box sx={innerNavStyles}>
                            <Typography variant={'h2'}>Flamingo Pink</Typography>
                            <Divider sx={{margin: '20px 0 20px 0'}}/>
                            <Box >
                                <ul>
                                    <li><Typography variant={'body1'}><a href="#intro">Intro</a></Typography></li>
                                    <li><Typography variant={'body1'}><a href="#section1">First</a></Typography></li>
                                    <li><Typography variant={'body1'}><a href="#section2">Second</a></Typography></li>
                                    <li><Typography variant={'body1'}><a href="#section3">Third</a></Typography></li>
                                </ul>
                            </Box>
                    </Box>

                    <Box sx={mainStyles}>

                        <Box sx={introStyles} id="intro" className="intro">
                            <Typography variant={'h5'}>Introduction</Typography>
                            <Typography variant={'body1'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Curabitur viverra efficitur quam, a aliquam purus tempus vitae. 
                            Aliquam mollis urna ligula, sit amet molestie elit malesuada eget. 
                            Nulla a ipsum eget nisi condimentum ultrices a nec leo. 
                            Quisque id tempor leo, quis varius enim. 
                            Nulla dictum sed nunc vel fringilla.  
                            </Typography>
                        </Box>

                        <Box sx={sectionStyles} id="section1" className="section-1">
                            <article className="inner-content">
                                <div className="content-image"></div>
                                <div>
                                    <Typography variant={'h5'}>First Section</Typography>
                                    <Typography variant={'body1'}>
                                        Quisque commodo, tortor id tristique maximus, nunc nulla dapibus diam, sit amet dapibus nisi elit id mauris.
                                    Nulla a ipsum eget nisi condimentum ultrices a nec leo. 
                                        <i> Praesent diam risus, pretium et purus a, convallis faucibus purus.</i>
                                    </Typography>
                                </div>
                            </article>
                        </Box>

                        <Box sx={secondSectionStyles} id="section2" className="section-2">
                            <article className="inner-content">
                                <div className="content-image">
                                    <Typography variant={'h1'}>Lorem Ipsum</Typography>
                                </div>
                                <div className="content-text">
                                    <Typography variant={'body1'}><strong>
                                        Phasellus id malesuada elit. Praesent mollis sem augue. Mauris tempor ornare nisl, non tincidunt risus pretium nec. 
                                        Aenean auctor, arcu euismod fringilla porta, nisl felis dictum diam, at egestas augue magna ac odio.
                                    </strong></Typography>
                                    <br />
                                    <Grid container spacing={3}>
                                        <Grid item sm={6}>
                                            <Typography variant={'body1'}>
                                                Praesent diam risus, pretium et purus a, convallis faucibus purus.
                                                Vestibulum eget tristique felis. Donec rhoncus orci vitae ultrices gravida. 
                                                Morbi non eleifend dui, eget consequat ligula. Integer semper justo sed tortor molestie consequat ut et dui. 
                                                Nulla et dictum sapien.
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={6}>
                                            <Typography variant={'body1'}>
                                                Donec rhoncus orci vitae ultrices gravida. 
                                                Morbi non eleifend dui, eget consequat ligula. Integer semper justo sed tortor molestie consequat ut et dui. 
                                                Nulla et dictum sapien.
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                </div>
                            </article>
                        </Box>

                        <Box sx={thirdSectionStyles} id="section3" className="section-3">
                            <article className="inner-content">
                                <div>
                                    <Typography variant={'h5'}>Third Section</Typography>
                                    <Typography variant={'body1'}>
                                    <strong>Donec dapibus vehicula interdum. </strong> 
                                    Proin finibus mi quis dui semper consectetur. 
                                    Aenean imperdiet dui elit, eget facilisis leo dictum et. 
                                    Vestibulum consectetur turpis sapien, quis pretium est tincidunt porta. 
                                    Mauris facilisis euismod massa, at aliquet enim. 
                                    </Typography>
                                </div>
                                <div className="content-image"></div>
                            </article>
                        </Box>

                        <Box sx={footerStyles}>
                            <Typography variant={'body2'}>Flamingo Template by Natalie Kiner</Typography>
                            <div className="social-links">
                            <a href="https://github.com">
                                <Icon path={mdiGithub}
                                title="Github"
                                size={1.5}
                                color="#518285"
                                />
                            </a>
                            <a href="https://linkedin.com">
                                <Icon path={mdiLinkedin}
                                className="icon"
                                title="Linkedin"
                                size={1.5}
                                color="#518285"
                                />
                            </a>
                            <a href="https://instagram.com">
                                <Icon path={mdiInstagram}
                                title="Instagram"
                                size={1.5}
                                color="#518285"
                                />
                            </a>
                            <a href="https://dribbble.com">
                                <Icon path={mdiBasketball}
                                title="Dribbble"
                                size={1.5}
                                color="#518285"
                                />
                            </a>
                            </div>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default FlamingoTemplate;