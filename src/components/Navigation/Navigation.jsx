import React, { useState } from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
import { Button, AppBar, Box, Toolbar, Typography, Badge, MenuItem, Menu } from '@mui/material';
import { useCart } from '../../context/CartProvider';
import { useAuth } from '../../context/AuthProvider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import DrawerSide from '../Navigation/DrawerSide';

const Navigation = () => {

    const [open, setOpen] = useState(false);
    const navigate = useNavigate()

    const { cart } = useCart()
    const userData = useAuth();

    const pages = [
        {
            id: 1,
            name: 'Home',
            onclick: () => navigate('/')
        },
        {
            id: 2,
            name: 'Dresses',
            onclick: () => navigate('/dresses')
        },
        {
            id: 3,
            name: 'About us',
            onclick: () => navigate('/aboutus')
        },
    ]

    return (
        <Box sx={{ height: '10vh' }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => setOpen(true)}
                        sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}>
                        <MenuIcon />
                    </IconButton>
                    <DrawerSide open={open} setOpen={setOpen} pages={pages} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' }, mr: 2 }}>
                        Rose Shop
                    </Typography>
                    <Box
                        sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
                        id="menu-appbar"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}>
                        {pages.map((page) => (
                            <Button onClick={page.onclick}
                                sx={{ my: 2, color: 'black', display: 'block' }}
                                key={page.id}>
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'flex' } }}>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                            onClick={() => navigate('/cart')}>
                            <Badge badgeContent={cart.length} color="secondary">
                                <LocalMallOutlinedIcon />
                            </Badge>
                        </IconButton>
                        {userData ? <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            onClick={() => navigate('/profile')}
                            color="inherit">
                            <AccountCircle />
                        </IconButton> :
                            <Button color='inherit' onClick={() => navigate('/signup')}>Account</Button>}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;


