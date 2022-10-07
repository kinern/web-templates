import React from 'react';
import SiteRouter from './SiteRouter';
import { ThemeProvider } from '@mui/material/styles'
import '../styles/common.css';
import theme from '../styles/theme';

const App = () => {
    return(
        <ThemeProvider theme={theme}>
            <SiteRouter />
        </ThemeProvider>
    );
}

export default App;