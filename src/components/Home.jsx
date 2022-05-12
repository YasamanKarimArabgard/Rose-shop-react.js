import React from 'react';
import { Box, Typography } from '@mui/material';
import Slider from './Slider';
import Banner from '../components/Banner'

const Home = () => {
    return (
        <main className='home_container col-12 d-flex flex-column align-items-center'>
            <section className="home_container col-11 d-flex flex-column align-items-center">
                <Box
                    className='onSale-banner'
                    bgcolor='lightPink.main'
                    sx={{
                        width: 1,
                        mb: 1,
                        py: 1,
                    }}>
                    <Typography variant='h6' color='secondary.main' align='center'>20% OFF for Summer !</Typography>
                </Box>
                <Slider />
                <Banner />
            </section>
            <article className="home_container col-11 d-flex flex-column align-items-center mt-2 mb-1" >
            <h6>LOREM IPSUM</h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br />
            </article>
        </main>
    );
};

export default Home;