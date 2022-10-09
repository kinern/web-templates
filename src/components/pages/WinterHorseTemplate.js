import React, {useEffect} from 'react';
import Header from '../Header';
import { Box, Container, Divider, Grid, Typography } from '@mui/material';

// import '../../styles/theme3-winter-horse.scss';

const images = {
    'horse': require('../../assets/horse-template/horse.jpg'),
    'ornaments': require('../../assets/horse-template/ornaments.jpg'),
    'town': require('../../assets/horse-template/town.jpg'),
    'hills': require('../../assets/horse-template/hills.jpg')
};

const tileStyle = (bgImage) => {
    return {
        justifyContent:'center',
        backgroundImage: `url(${bgImage})`,
        backgroundColor: 'rgba(0,0,0, 1)',
        //opacity: '0.4',
        position: 'relative',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        color: '#FFF',
        textShadow: '1px 1px 2px black',
        transition: '0.5s all',
        '&:hover' : {
            //opacity: '0.8',
        },
        height: {xs: '100vh', sm: '100vh', md: 'auto'}
    }
};

const colorTileStyle = {
    position: 'relative', 
    zIndex: 1, 
    height: '100%', 
    width: '100%', 
    backgroundColor: '#171e2e', 
    opacity: '0.5',
    transition: '0.5s all',
    '&:hover': {
        opacity: '0.1'
    }
};

const titleTextStyles = {
    pointerEvents: 'none',
    position: 'absolute', 
    margin: 'auto', 
    top: '0', 
    bottom: '0', 
    left: '0', 
    right: '0', 
    zIndex: 2, 
    display:'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems:'center'
}


const WinterHorseTemplate = () => {

    useEffect(()=>{
        document.title = "Gallery | Winter Horse";
    },[]);

    return (
        <Container maxWidth={false} disableGutters>
            <Header menuIconColor={'#FFF'}/>
            <Grid sx={{height:'100vh', backgroundColor: '#000'}} container direciton="row" spacing={0}>
                <Grid item xs={12} sm={12} md={6} className="content" sx={tileStyle(images['horse'])}>
                    <Box sx={colorTileStyle}/>
                    <Box sx={titleTextStyles}>
                        <Typography variant={'h4'} sx={{textTransform:'uppercase'}}>
                            Winter Horse
                        </Typography>
                        <Divider sx={{borderColor: '#FFF', width:'70%', margin: '8px 0px 8px 0px'}}/>
                        <Typography variant={'body1'}>
                            Lorem ipsum dolor sit amet
                        </Typography>
                    </Box>
                </Grid>
                <Grid item container xs={12} sm={12} md={6} className="content">
                    <Grid item container xs={12} sm={12} className="content" sx={tileStyle(images['hills'])}>
                        <Box sx={colorTileStyle}/>
                        <Box sx={titleTextStyles}>
                            <Typography variant={'h5'} sx={{textTransform:'uppercase'}}>
                                Lorem ipsum
                            </Typography>
                            <Divider sx={{borderColor: '#FFF', width:'50%', margin: '8px 0px 8px 0px'}}/>
                            <Typography variant={'body1'}>
                                consectetur adipiscing elit
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item container xs={12} sm={12} className="content" sx={tileStyle(images['town'])}>
                        <Box sx={colorTileStyle}/>
                        <Box sx={titleTextStyles}>
                            <Typography variant={'h5'} sx={{textTransform:'uppercase'}}>
                                Lorem ipsum
                            </Typography>
                            <Divider sx={{borderColor: '#FFF', width:'50%', margin: '8px 0px 8px 0px'}}/>
                            <Typography variant={'body1'}>
                                Curabitur ultrices urna sit amet
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item container xs={12} sm={12} className="content" sx={tileStyle(images['ornaments'])}>
                        <Box sx={colorTileStyle}/>
                        <Box sx={titleTextStyles}>
                            <Typography variant={'h5'} sx={{textTransform:'uppercase'}}>
                                Lorem ipsum
                            </Typography>
                            <Divider sx={{borderColor: '#FFF', width:'50%', margin: '8px 0px 8px 0px'}}/>
                            <Typography variant={'body1'}>
                                egestas dignissim
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default WinterHorseTemplate;