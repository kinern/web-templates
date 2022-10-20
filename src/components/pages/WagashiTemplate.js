import React, {useEffect} from 'react';
import Header from '../Header';
import { Box, Container, Divider, Grid, Link, Typography } from '@mui/material';
import Icon from '@mdi/react'
import { mdiGithub, mdiLinkedin, mdiInstagram, mdiBasketball } from '@mdi/js';

const images = {
    'anmitsu': require('../../assets/wagashi-template/anmitsu.jpg'),
    'zefir': require('../../assets/wagashi-template/zefir.jpg'),
    'macarons': require('../../assets/wagashi-template/macarons.jpg'),
    'street': require('../../assets/wagashi-template/street.jpg'),
    'assortment': require('../../assets/wagashi-template/wagashi-assortment.jpg'),
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

    const socialLinkBtn = {
        lineHeight: 0, 
        margin:'10px', 
        padding:'10px', 
        color:'#ddd', 
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: 100,
        transition: '0.5s all', 
        '&:hover': {
            color:'#FFF', 
            backgroundColor:'#333', 
        }
    };

    return (
        <Container sx={outerStyles} disableGutters maxWidth={false}>
            <Header />
            <Box sx={{
                height: '100vh', 
                backgroundColor: 'white', 
                background: `no-repeat fixed center url(${images['street']})`,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                }}>
                <Box sx={{
                    padding: '10px 56px', 
                    backgroundColor:'rgba(255,255,255,0.7)',
                    transition:'0.5s all',
                    '&:hover':{
                        backgroundColor:'rgba(255,255,255,0.8)',
                    }
                    }}>
                    <Typography sx={{color: '#333', margin:'36px 0 12px 0', textAlign: {xs:'center', sm:'left'}, fontSize:{xs: '36px', sm: '72px'}}} variant={'h2'}>
                        和菓子店テーマ
                    </Typography>
                    <Divider />
                    <Typography variant={'body1'} sx={{color:'#555', fontWeight:'bold', textAlign:'center', margin: '8px 0 36px 0'}}>Wagashi Shop Theme</Typography>
                </Box>
            </Box>
            <Box sx={{margin: '80px auto',}}>
                    <Typography variant={'h5'} sx={{margin:'auto', color: '#555', textAlign:'center', maxWidth:'800px'}}>
                    Praesent orci ipsum, scelerisque a malesuada ut, ornare vel ligula. Donec id eros sed nibh fringilla porta. Aliquam eleifend tellus at volutpat tristique. Mauris rutrum auctor purus, at euismod mauris interdum quis.
                    </Typography>
            </Box>
            <Box sx={{backgroundColor: 'cornsilk', padding:'80px 0'}}>
                <Box sx={{width:'90%', maxWidth:'600px', margin:'auto'}}>
                    <Box sx={{width:'100%', height:'auto'}}>
                        <img src={images['assortment']} style={{width:'100%'}}/>
                    </Box>
                    <Typography variant={'body1'} sx={{color:'#333', marginBottom:'33px'}}>
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum auctor vel augue in gravida. Aliquam erat volutpat. Donec id felis auctor, facilisis nulla vitae, varius ligula.
                    </Typography>
                    <Typography variant={'body1'} sx={{color:'#333', fontWeight:'bold', textAlign:'center'}}>
                    Pellentesque a justo et diam pharetra pellentesque.
                    </Typography>
                </Box>
            </Box>
            <Grid container sx={{minHeight: '100vh', padding: '80px 0', backgroundColor: 'white'}}>
                <Grid item sx={{display:'flex'}} xs={12} sm={6}>
                    <Box sx={imageStyles} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{color:'#333', textAlign:{xs:'center', sm:'left'}, fontSize:{xs:'24px', sm:'52px'}}} variant={'h2'}>三つ寒天あんみつセット</Typography>
                </Grid>
            </Grid>
            <Box sx={{padding: '80px 0 140px 0', backgroundColor: '#CCC'}}>
                <Box sx={{maxWidth:'1200px', margin: '0 auto'}}>
                <Typography variant={'h3'} sx={{color: '#333', marginBottom:'33px', fontSize:{xs: '28px', sm:'36px'}}}align="center">Lorem ipsum dolor</Typography>
                <Grid container spacing={2}>
                    <Grid item sm={12} md={4} >
                        <Typography sx={{ height:'calc(100% - 48px)', backgroundColor:'#EEE', padding:'24px'}} variant={'body1'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus dolor varius turpis convallis, in consequat nibh egestas. Maecenas sit amet elit sit amet felis blandit convallis. Nunc sagittis tempor ultrices. Cras pretium semper arcu. Fusce iaculis sapien quis metus placerat tempor. 
                        </Typography>
                    </Grid>
                    <Grid item sm={12} md={4} >
                        <Typography sx={{ height:'calc(100% - 48px)', backgroundColor:'#EEE', padding:'24px'}} variant={'body1'}>
                        Mauris diam odio, tempus ut volutpat ut, dignissim vel arcu. Aenean vehicula felis tellus, non sollicitudin tellus tincidunt et. Curabitur diam tellus, semper vitae ante nec, ultrices gravida felis. Nullam enim mauris, sollicitudin vitae vehicula quis, porta ac nisi. Fusce elit justo, sagittis quis purus et, ullamcorper euismod nisl.
                        </Typography>
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <Typography sx={{ height:'calc(100% - 48px)', backgroundColor:'#EEE', padding:'24px'}} variant={'body1'}>
                        Pellentesque posuere facilisis nisl, cursus placerat lacus sagittis id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse id lacinia ligula. Maecenas rutrum justo lacinia nulla sodales, malesuada viverra dolor faucibus. Aenean et gravida dui, quis scelerisque elit. In non malesuada dui.
                        </Typography>
                    </Grid>
                </Grid>
                </Box>
            </Box>
            <Grid container sx={{minHeight: '100vh', padding:'80px 0 40px 0', backgroundColor: 'cornsilk'}}>
                <Grid item xs={12} sm={6}>
                    <Box sx={{paddingLeft:{xs: '16px', sm:'33px'}, paddingRight:{xs:'16px', sm:'0'}}}>
                        <Typography sx={{color:'#333', textAlign:{xs:'center', sm:'left'}, fontSize:{xs:'24px', sm:'52px'}}} variant={'h2'}>ゼファー&マカロン</Typography>
                        <br />
                        <Typography sx={{color:'#333'}} variant={'body1'}>
                        Aenean vehicula felis tellus, non sollicitudin tellus tincidunt et. Curabitur diam tellus, semper vitae ante nec, ultrices gravida felis. Nullam enim mauris, sollicitudin vitae vehicula quis, porta ac nisi. Fusce elit justo, sagittis quis purus et, ullamcorper euismod nisl.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} sx={{position:'relative', display:'flex', order:{xs:1, sm:2}}}>
                    <Box sx={image2Styles} />
                    <Box sx={image3Styles} />
                </Grid>
            </Grid>
            <Box sx={{minHeight:'50vh', width: '100%', backgroundColor:'salmon'}}>
                <Grid container sx={{padding:'80px 0'}}>
                    <Grid item xs={12} sm={6} sx={{display:'flex', justifyContent: {xs:'center', sm:'flex-start'}}}>
                        <Link href="#" sx={{color:'#ddd', padding: '10px 20px', textDecoration:'none', transition: '0.5s all', '&:hover':{color:'#fff'}}}><Typography variant={'body1'}>About Us</Typography></Link>
                        <Link href="#" sx={{color:'#ddd', padding: '10px 20px', textDecoration:'none', transition: '0.5s all', '&:hover':{color:'#fff'}}}><Typography variant={'body1'}>FAQ</Typography></Link>
                        <Link href="#" sx={{color:'#ddd', padding: '10px 20px', textDecoration:'none', transition: '0.5s all', '&:hover':{color:'#fff'}}}><Typography variant={'body1'}>News</Typography></Link>
                        <Link href="#" sx={{color:'#ddd', padding: '10px 20px', textDecoration:'none', transition: '0.5s all', '&:hover':{color:'#fff'}}}><Typography variant={'body1'}>Contact Us</Typography></Link>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{display:'flex', justifyContent: {xs:'center', sm:'flex-end'}}}>
                        <Link href="https://github.com" sx={socialLinkBtn}>
                            <Icon path={mdiGithub}
                            title="Github"
                            size={1.5}
                            />
                        </Link>
                        <Link href="https://linkedin.com" sx={socialLinkBtn}>
                            <Icon path={mdiLinkedin}
                            className="icon"
                            title="Linkedin"
                            size={1.5}
                            />
                        </Link>
                        <Link href="https://instagram.com" sx={socialLinkBtn}>
                            <Icon path={mdiInstagram}
                            title="Instagram"
                            size={1.5}
                            />
                        </Link>
                        <Link href="https://dribbble.com" sx={socialLinkBtn}>
                            <Icon path={mdiBasketball}
                            title="Dribbble"
                            size={1.5}
                            />
                        </Link>
                    </Grid>
                </Grid>
                <Typography sx={{color:'#eee', padding: '10px 20px'}} >Wagashi Shop Template by Kinern@Github</Typography>
            </Box>
        </Container>
    );
};

export default WagashiTemplate;