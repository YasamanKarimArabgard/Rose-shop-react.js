import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useNavigate } from 'react-router-dom';
import { Divider, Typography } from '@mui/material';


const DrawerSide = ({ open, setOpen, pages}) => {

    return (
        <>
            <SwipeableDrawer variant='temporary' hideBackdrop={false} open={open} onClose={() => setOpen(false)}>
                <Typography sx={{ m: 2 }} color='secondary' variant='h6'>Rose Shop</Typography>
                <Divider />
                <List>
                    {pages.map(item => (
                        <ListItem button onClick={item.onclick} key={item.id}>
                            <ListItemText primary={item.name} />
                        </ListItem>
                    ))}
                </List>
            </SwipeableDrawer>

        </>
    );
}
export default DrawerSide