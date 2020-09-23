import React from 'react';

import '../../styles/theme2-penguin.scss';

const PenguinTemplate = () => {
    return (
        <div className="outer-box">
            <div className="inner-box">
                <div className="top-nav">
                    <a href="#intro">Intro</a>
                    <a href="#first">First</a>
                    <a href="#second">Second</a>
                    <a className="button" href="#">Info</a>
                </div>
                <div className="main-box">
                    <div className="right-content">
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
                    </div>
                    <div className="carousel-buttons">
                        <a href="#intro1"><div className="carousel-btn"></div></a>
                        <a href="#intro2"><div className="carousel-btn"></div></a>
                        <a href="#intro3"><div className="carousel-btn"></div></a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PenguinTemplate;