import React from 'react';
import Icon from '@mdi/react'
import { mdiGithub, mdiLinkedin, mdiInstagram, mdiBasketball } from '@mdi/js';

import '../../styles/theme1-flamingo.scss';


const FlamingoTemplate = () => {
    return (
        <div className="outer-main">
            <div className="inner-main">
                <header className="top-header">
                        <h2>Flamingo Theme</h2>
                        <hr />
                        <nav className="inner-nav">
                            <ul>
                                <li><a href="#intro">Intro</a></li>
                                <li><a href="#section1">First</a></li>
                                <li><a href="#section2">Second</a></li>
                                <li><a href="#section3">Third</a></li>
                            </ul>
                        </nav>
                </header>

                <div className="main">

                    <section id="intro" className="intro">
                        <h5>Introduction</h5>
                        <p>
                            This is the introductory paragraph for this webpage.
                            The theme Flamingo is supposed to be very pink and very bright.
                            There is an 80s feel to the site given the color scheme.
                            The flamingo photograph on top should draw in the user.    
                        </p>
                    </section>

                    <section id="section1" className="section-1">
                        <article className="inner-content">
                            <div className="content-image"></div>
                            <div>
                                <h5>First Section</h5>
                                <p>Quisque commodo, tortor id tristique maximus, nunc nulla dapibus diam, sit amet dapibus nisi elit id mauris. Praesent diam risus, pretium et purus a, convallis faucibus purus.</p>
                            </div>
                        </article>
                    </section>

                    <section id="section2" className="section-2">
                        <article className="inner-content">
                            <div className="content-image"><h1>Second Section</h1></div>
                            <div className="content-text">
                                <p>
                                    Phasellus id malesuada elit. Praesent mollis sem augue. Mauris tempor ornare nisl, non tincidunt risus pretium nec. 
                                    Aenean auctor, arcu euismod fringilla porta, nisl felis dictum diam, at egestas augue magna ac odio.
                                </p>
                                <br />
                                <p>
                                    Praesent diam risus, pretium et purus a, convallis faucibus purus.
                                    Vestibulum eget tristique felis. Donec rhoncus orci vitae ultrices gravida. 
                                    Morbi non eleifend dui, eget consequat ligula. Integer semper justo sed tortor molestie consequat ut et dui. 
                                    Nulla et dictum sapien.
                                </p>
                            </div>
                        </article>
                    </section>

                    <section id="section3" className="section-3">
                        <article className="inner-content">
                            <div>
                                <h5>Third Section</h5>
                                <p>
                                    The mobile is created more simplistically. 
                                    The border radius is removed from the main container, and the content is centered.
                                </p>
                            </div>
                            <div className="content-image"></div>
                        </article>
                    </section>

                    <footer>
                        <h6>Flamingo Template by Natalie Kiner</h6>
                        <div className="social-links">
                        <a href="https://github.com">
                            <Icon path={mdiGithub}
                            title="Github"
                            size={1.5}
                            color="#204c4f"
                            />
                        </a>
                        <a href="https://linkedin.com">
                            <Icon path={mdiLinkedin}
                            className="icon"
                            title="Linkedin"
                            size={1.5}
                            color="#204c4f"
                            />
                        </a>
                        <a href="https://instagram.com">
                            <Icon path={mdiInstagram}
                            title="Instagram"
                            size={1.5}
                            color="#204c4f"
                            />
                        </a>
                        <a href="https://dribbble.com">
                            <Icon path={mdiBasketball}
                            title="Dribbble"
                            size={1.5}
                            color="#204c4f"
                            />
                        </a>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default FlamingoTemplate;