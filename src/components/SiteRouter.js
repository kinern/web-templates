import React from 'react';
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import PenguinThemePage from '../components/pages/PenguinTemplate';
import FlamingoThemePage from '../components/pages/FlamingoTemplate';
import HorseThemePage from '../components/pages/WinterHorseTemplate';
import WagashiTemplate from '../components/pages/WagashiTemplate';
import BlogPostResults from '../components/pages/BlogPostResults';

const SiteRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<PenguinThemePage />} />
                <Route path="/slides" element={<PenguinThemePage />} />
                <Route path="/narrow-page" element={<FlamingoThemePage />} />
                <Route path="/five-panel" element={<HorseThemePage />} />
                <Route path="/pastel-page" element={<WagashiTemplate />} />
                <Route path="/blog-index" element={<BlogPostResults />} />
            </Routes>
        </Router>
    );
};

export default SiteRouter;