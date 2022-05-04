import React from 'react';
import { Box, Typography } from '@mui/material';
import Slider from './Slider';

const Home = () => {
    return (
        <>
            <section className="main-slider col-11 mt-5 d-flex flex-column align-items-center">
                <Box
                    bgcolor='lightPink.main'
                    sx={{
                        width: 1,
                        marginTop: '2em',
                        my: 3,
                        py: 2,
                    }}>
                    <Typography variant='h5' color='secondary.main' align='center'>20% OFF for Summer !</Typography>
                </Box>
                <Slider />
            </section>
        </>
    );
};

export default Home;