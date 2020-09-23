import React from 'react';
import Header from './Header';
//import FlamingoTemplate from './pages/FlamingoTemplate';
//import WinterHorseTemplate from './pages/WinterHorseTemplate';
import PenguinTemplate from './pages/PenguinTemplate';

import '../styles/common.css';

const App = () => {
    return(
        <div className="app">
            <Header />
            <PenguinTemplate />
        </div>
    );
}

export default App;