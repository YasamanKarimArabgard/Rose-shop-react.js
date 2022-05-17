import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate()

    const { cart } = useCart()
    const userData = useAuth();

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
                        sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <DrawerSide open={open} setOpen={setOpen} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}>
                        Rose Shop
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'flex' } }}>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit">
                            <Badge badgeContent={cart.length} color="secondary" onClick={() => navigate('/cart')}>
                                <LocalMallOutlinedIcon />
                            </Badge>
                        </IconButton>
                        {userData ? <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            onClick={() => navigate('/')}
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