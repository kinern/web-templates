import React from 'react';

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
                        <a href="#flamingo">Flamingos</a>
                        <a href="#flamingo">Penguins</a>
                        <a href="#flamingo">Irish Cob</a>
                        <a href="#flamingo">Purple Square</a>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Header;