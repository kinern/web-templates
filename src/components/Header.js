import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div class="pos-f-t">
            <nav class="navbar navbar-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="header-menu">
                    <h4>Themes</h4>
                    <div>
                        <Link to="/flamingo-theme">Flamingos</Link>
                        <Link to="/penguin-theme">Penguins</Link>
                        <Link to="/horse-theme">Winter Horse</Link>
                        <Link to="#flamingo">Purple Square</Link>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Header;