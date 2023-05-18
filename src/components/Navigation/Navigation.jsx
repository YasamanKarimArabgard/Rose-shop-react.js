import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, AppBar, Box, Toolbar, Typography, Badge } from '@mui/material';
import { useCart } from '../../context/CartProvider';
import { useAuth } from '../../context/AuthProvider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import DrawerSide from '../Navigation/DrawerSide';

const Navigation = () => {

    const [open, setOpen] = useState(false);

    const { cart } = useCart()
    const userData = useAuth();

    const pages = [
        {
            id: 1,
            name: 'Home',
            onclick: '/'
        },
        {
            id: 2,
            name: 'Dresses',
            onclick: '/dresses'
        },
        {
            id: 3,
            name: 'About us',
            onclick: '/about-us'
        },
    ]

    return (
        <Box sx={{ height: '10vh' }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="open drawer"
                        onClick={() => setOpen(true)}
                        sx={{ mr: 2, display: { xs: 'block', md: 'none' }, color: '#FAF8F7' }}>
                        <MenuIcon />
                    </IconButton>
                    <DrawerSide open={open} setOpen={setOpen} pages={pages} />
                    <Typography
                        color='#84142D'
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
                            <Button
                                component={NavLink}
                                className='navlink-nav'
                                sx={{
                                    my: 2, color: '#FAF8F7', display: 'block',
                                    '&.active': {
                                        color: '#84142D',
                                    },
                                }}
                                to={page.onclick}
                                key={page.id}>
                                {page.name}</Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'flex' } }}>
                        <IconButton
                            className='navlink-nav'
                            size="large"
                            aria-label="show 17 new notifications"
                            sx={{
                                color: '#FAF8F7',
                                '&.active': {
                                    color: '#84142D'
                                }
                            }}
                            component={NavLink}
                            to='/cart'>
                            <Badge badgeContent={cart.length} color="secondary">
                                <LocalMallOutlinedIcon />
                            </Badge>
                        </IconButton>
                        {userData ? <IconButton
                            size="large"
                            edge="end"
                            className='navlink-nav'
                            component={NavLink}
                            sx={{
                                color: '#FAF8F7',
                                '&.active': {
                                    color: '#84142D'
                                }
                            }}
                            aria-label="account of current user"
                            aria-haspopup="true"
                            to='/profile'>
                            <AccountCircle />
                        </IconButton> :
                            <Button
                                sx={{
                                    color: '#FAF8F7',
                                    '&.active': {
                                        color: '#84142D'
                                    }
                                }}
                                className='navlink-nav'
                                component={NavLink}
                                to='/signup'>Account</Button>}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;


