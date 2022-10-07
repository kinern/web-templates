import React from 'react';
import Header from '../Header';
import { Box, Container } from '@mui/material';

// import '../../styles/theme3-winter-horse.scss';

const IrishCobTemplate = () => {
    return (
        <Container maxWidth={false} disableGutters>
            <Header />
            <div className="main">
                <div className="side-nav">
                    <img alt="Irish Cob Horse" src=""/>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Section1</li>
                            <li>Section2</li>
                        </ul>
                    </nav>
                </div>
                <div className="content">
                    <section>
                        <h5>Introduction Blurb</h5>
                        <p>
                            This is the introductory paragraph for this webpage.
                            The theme Flamingo is suppsoed to be very pink and very bright.
                            There is an 80s feel to the site given the color scheme.
                            The flamingo photograph on top should draw in the user.    
                        </p>
                    </section>
                    <section>
                        <h5>Introduction Blurb</h5>
                        <p>
                            This is the introductory paragraph for this webpage.
                            The theme Flamingo is suppsoed to be very pink and very bright.
                            There is an 80s feel to the site given the color scheme.
                            The flamingo photograph on top should draw in the user.    
                        </p>
                    </section>
                </div>
            </div>
        </Container>
    );
}

export default IrishCobTemplate;