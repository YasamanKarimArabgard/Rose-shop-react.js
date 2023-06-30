import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <footer className="w-screen">
            <Box bgcolor='primary.main' sx={{ height: '2rem' }} >
                <Typography color='#cbcbcb' align="center" py={1} sx={{ fontSize: '0.6em' }}>Developed by @Yasaman_Arabgard</Typography>
            </Box>
        </footer>
    );
};

export default Footer;