import { MissedVideoCall, Translate } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import React from 'react';
import BannerImg from '../assets/img5.jpg'

const Banner = () => {
    return (
        <Box sx={{ display: { md: 'block', lg: 'none', xl: 'none' } }} className='responsive-banner'>
            {/* <Box 
            alignItems='center'
            justifyContent='center'
            sx={{
                position: 'absolute',
                display: 'flex',
            }}
            >
                <Button variant="outlined" color='secondary' sx={{

                    zIndex: 'tooltip'
                }}>let's Shop</Button>
            </Box> */}
            <img src={BannerImg} className='w-100 h-auto'></img>
        </Box>
    );
};

export default Banner;