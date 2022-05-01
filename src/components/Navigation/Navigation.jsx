import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartProvider';
import { useAuth } from '../../context/AuthProvider';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Navigation = () => {

    const { cart } = useCart()
    const userData = useAuth();
    const navigate = useNavigate();

    const dropdownItems = [
        {
            name: 'Sign up',
            onClick: () => navigate('/signup')
        },
        {
            name: 'Log in',
            onClick: () => navigate('/login')
        }
    ]

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
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Rose Shop
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'flex' } }}>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={cart.length} color="error">
                                <ShoppingBagIcon />
                            </Badge>
                        </IconButton>
                        {
                            userData ? <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                // onClick={handleProfileMenuOpen}
                                color="inherit">
                                <AccountCircle />
                            </IconButton> :
                                <FormControl sx={{ m: 1, minWidth: 120, display: { xs: 'none', md: 'flex' } }}>
                                    <InputLabel id="demo-simple-select-helper-label">Account</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        label="Account"
                                    >
                                        {dropdownItems.map(item => (
                                            <MenuItem onClick={item.onClick}>{item.name}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                        }
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;