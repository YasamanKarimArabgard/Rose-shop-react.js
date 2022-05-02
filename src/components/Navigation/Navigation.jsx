import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button, AppBar, Box, Toolbar, Typography, InputBase, Badge } from '@mui/material';
import { useCart } from '../../context/CartProvider';
import { useAuth } from '../../context/AuthProvider';
import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import DrawerSide from '../Navigation/DrawerSide'

const Navigation = () => {

    const [open, setOpen] = useState(false);
    const navigate = useNavigate()

    const { cart } = useCart()
    const userData = useAuth();

    const openToggle = () => {
        setOpen(true)
    }

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => openToggle()}
                        sx={{ mr: 2 }}>
                        <MenuIcon />
                        <DrawerSide open={open} setOpen={setOpen} />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}>
                        Rose Shop
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }} />
                    </Search>
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
                            // onClick={handleProfileMenuOpen}
                            color="inherit">
                            <AccountCircle />
                        </IconButton> :
                            <Button color='inherit' onClick={() => navigate('/signup')}>Account</Button>}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default Navigation;