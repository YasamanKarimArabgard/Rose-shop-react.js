import { Box, Typography, BottomNavigation, BottomNavigationAction } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='col-12'>
            <Box>
                <BottomNavigation
                    sx={{ bgcolor: '#e6eeec' }}
                    showLabels
                >
                    <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} />
                    <BottomNavigationAction label="Email" icon={<EmailIcon />} />
                    <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} />
                </BottomNavigation>
            </Box>
            <Box bgcolor='primary.main' sx={{ height: '2rem' }} >
                <Typography color='#cbcbcb' align="center" py={1} sx={{ fontSize: '0.6em' }}>Created by @Yasaman_Arabgard since 2022</Typography>
            </Box>
        </footer>
    );
};

export default Footer;