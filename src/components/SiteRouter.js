import React from 'react';
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import PenguinThemePage from '../components/pages/PenguinTemplate';
import FlamingoThemePage from '../components/pages/FlamingoTemplate';
import HorseThemePage from '../components/pages/WinterHorseTemplate';

const SiteRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<PenguinThemePage />} />
                <Route path="/penguin-theme" element={<PenguinThemePage />} />
                <Route path="/flamingo-theme" element={<FlamingoThemePage />} />
                <Route path="/horse-theme" element={<HorseThemePage />} />
            </Routes>
        </Router>
    );
};

export default SiteRouter;