import React, {useEffect} from 'react';
import Header from '../Header';
import { Box, Container, Grid, Typography } from '@mui/material';

// import '../../styles/theme3-winter-horse.scss';

const horseImg = require('../../assets/horse-snow.jpg');

const outerStyles = {
    backgroundColor: '#bbecfa',
    height: '100%',
    margin:0
};

const mainStyles = {
    backgroundColor: '#FFF',
    marginTop: '80px',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow: '0px 10px 10px 0px #111',
};

const sideNavStyles = {
    backgroundColor: 'pink',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& img': {
        backgroundColor:'lightgray',
        background: `url(${horseImg})`,
        backgroundSize: 'contain',
        width: '200px',
        height: 'auto'
    },
    '& nav': {
        display:'flex'
    }
};

const contentStyles = {

};


const IrishCobTemplate = () => {

    useEffect(()=>{
        document.title = "Gallery | Winter Horse";
    },[]);

    return (
        <Container sx={outerStyles} maxWidth={false} disableGutters>
            <Header />
            <Grid Container direciton="row" sx={mainStyles} spacing={2}>
                <Grid item xs={1} sm={1} sx={sideNavStyles} className="side-nav">
                    <img alt="Irish Cob Horse" src={horseImg}/>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Section1</li>
                            <li>Section2</li>
                        </ul>
                    </nav>
                </Grid>
                <Grid item xs={1} sm={1} sx={contentStyles} className="content">
                    <section className="section-1">
                        <h5>Introduction Blurb</h5>
                        <p>
                            This is the introductory paragraph for this webpage.
                            The theme Flamingo is suppsoed to be very pink and very bright.
                            There is an 80s feel to the site given the color scheme.
                            The flamingo photograph on top should draw in the user.    
                        </p>
                    </section>
                    <section className="section-2">
                        <h5>Introduction Blurb</h5>
                        <p>
                            This is the introductory paragraph for this webpage.
                            The theme Flamingo is suppsoed to be very pink and very bright.
                            There is an 80s feel to the site given the color scheme.
                            The flamingo photograph on top should draw in the user.    
                        </p>
                    </section>
                </Grid>
            </Grid>
        </Container>
    );
}

export default IrishCobTemplate;