import React, { useState } from 'react';
import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton } from '@mui/material';
import { products } from '../../data';
import { useNavigate } from 'react-router';

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
        <div>
            <Drawer variant='temporary' hideBackdrop={false} open={open}>
                <IconButton edge="start"
                    color="inherit"
                    onClick={() => setOpen(false)}>
                    <ArrowBackIosNewIcon />
                </IconButton>
                <List>
                    {drawerItems.map(item => (
                        <ListItem button onClick={item.onClick}>
                            {/* <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon> */}
                            <ListItemText primary={item.name} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}
export default DrawerSide