import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <footer className='col-12'>
            <Box bgcolor='primary.main' sx={{ height: '2rem' }} >
                <Typography color='#cbcbcb' align="center" py={1} sx={{ fontSize: '0.6em' }}>Created by @Yasaman_Arabgard</Typography>
            </Box>
        </footer>
    );
};

export default Footer;