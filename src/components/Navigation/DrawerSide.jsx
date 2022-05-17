import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useNavigate } from 'react-router-dom';
import { Divider, Typography } from '@mui/material';


const DrawerSide = ({ open, setOpen }) => {

    const navigate = useNavigate()

    const drawerItems = [
        {
            name: 'Home',
            onClick: () => navigate('/')
        },
        {
            name: 'Products',
            onClick: () => navigate('/products')
        }
    ]

    return (
        <>
            <SwipeableDrawer variant='temporary' hideBackdrop={false} open={open} onClose={() => setOpen(false)}>
                <Typography sx={{ m: 2 }}  color='secondary' variant='h6'>Rose Shop</Typography>
                <Divider />
                <List>
                    {drawerItems.map(item => (
                        <ListItem button onClick={item.onClick}>
                            <ListItemText primary={item.name} />
                        </ListItem>
                    ))}
                </List>
            </SwipeableDrawer>

        </>
    );
}
export default DrawerSide