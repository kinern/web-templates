import React, {useEffect} from 'react';
import Header from '../Header';
import { Box, Container, Grid, Typography } from '@mui/material';

const images = {
    'anmitsu': require('../../assets/wagashi-template/anmitsu.jpg'),
    'zefir': require('../../assets/wagashi-template/zefir.jpg'),
    'macarons': require('../../assets/wagashi-template/macarons.jpg')
}

const WagashiTemplate = () => {

    useEffect(()=>{
        document.title = "Gallery | Wagashi"
    }, []);

    const outerStyles = {
        width: '100%',
        height: 'auto',
        border: '16px solid salmon'
    }

    const imageStyles = {
        width: '80%',
        height: '80%',
        backgroundColor: 'lightgray',
        backgroundImage: `url(${images['anmitsu']})`,
        backgroundSize: 'cover',
        opacity: 0.7,
        margin: {xs: 'auto', sm:'auto 0 auto auto'}
    }

    const image2Styles = {
        display: {xs: 'none', sm:'none', md:'inherit'},
        position:'absolute',
        zIndex: '2',
        width: '360px',
        height: '240px',
        top: '50%',
        left: '-20%',
        backgroundColor: 'lightgray',
        backgroundImage: `url(${images['macarons']})`,
        backgroundSize: 'cover',
        margin: {xs: 'auto', sm:'auto 0 auto auto'}
    };

    const image3Styles = {
        width: '80%',
        height: '80%',
        backgroundImage: `url(${images['zefir']})`,
        backgroundSize: {xs: 'cover', sm:'contain'},
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'center',
        opacity: 0.7,
        margin: {xs: 'auto', sm:'auto 0 auto auto'}
    };

    return (
        <Container sx={outerStyles} disableGutters maxWidth={false}>
            <Header />
            <Box sx={{height: '100vh', backgroundColor: 'white'}}>
                <Typography sx={{color: '#333', margin: {xs: '36px 0', sm:'36px'}, textAlign: {xs:'center', sm:'left'}, fontSize:{xs: '36px', sm: '72px'}}} variant={'h1'}>
                    和菓子テーマ
                </Typography>
            </Box>
            <Box sx={{height: '100vh', backgroundColor: 'cornsilk'}}>
                <Typography variant={'h1'}></Typography>
            </Box>
            <Grid container sx={{height: '100vh', backgroundColor: 'white'}}>
                <Grid item sx={{display:'flex'}} xs={12} sm={6}>
                    <Box sx={imageStyles} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{color:'#333', textAlign:{xs:'center', sm:'left'}, fontSize:{xs:'24px', sm:'52px'}}} variant={'h2'}>三つ寒天あんみつセット</Typography>
                </Grid>
            </Grid>
            <Grid container sx={{height: '100vh', backgroundColor: 'cornsilk'}}>
                <Grid item sx={{display:'flex', order:{xs:2, sm:1}, justifyContent:'center'}} xs={12} sm={6}>
                <Typography sx={{color:'#333', textAlign:{xs:'center', sm:'left'}, fontSize:{xs:'24px', sm:'52px'}}} variant={'h2'}>Zefirs & Macarons</Typography>
                </Grid>
                <Grid item xs={12} sm={6} sx={{position:'relative', display:'flex', order:{xs:1, sm:2}}}>
                    <Box sx={image2Styles} />
                    <Box sx={image3Styles} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default WagashiTemplate;