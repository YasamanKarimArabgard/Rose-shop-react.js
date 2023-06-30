import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthProvider';
import DrawerSide from './DrawerSide';
import Badge from '@mui/material/Badge';
import { useCart } from '../../context/CartProvider';


const Naviagation = () => {

    const userData = useAuth();
    const { cart } = useCart();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const pages = [
        {
            id: 1,
            name: 'Home',
            onclick: '/'
        },
        {
            id: 2,
            name: 'electronics',
            onclick: '/products/electronics'
        }, {
            id: 3,
            name: 'Jewelery',
            onclick: '/products/jewelery'
        }, {
            id: 4,
            name: "men's clothing",
            onclick: "/products/men's clothing"
        },
        {
            id: 5,
            name: "women's clothing",
            onclick: "/products/women's clothing"
        },
        {
            id: 6,
            name: 'About us',
            onclick: '/about-us'
        },
    ]

    return (
        <div className="navigation flex justify-center fixed top-0 left-0 right-0 z-10 bg-cover bg-blur backdrop-blur-lg">
            <div className="navigation-main w-full grid grid-cols-12 gap-8 max-w-screen-2xl">
                <nav className='nav-container col-start-2 col-span-10 flex justify-between items-center py-2'>
                    <botton class='block xl:hidden text-purple-800 m-2' onClick={() => setOpen(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </botton>
                    <DrawerSide open={open} setOpen={setOpen} pages={pages} />
                    <h3 className="brand-title text-xl text-purple-900 font-bold cursor-pointer" onClick={() => navigate('/')}>Rose shop</h3>
                    <div className="pages-navbar hidden xl:flex justify-between">
                        <div className='flex-1'>
                            {pages.map((page) => (
                                <NavLink to={page.onclick}>
                                    <button key={page.id} className="mx-1 text-md text-purple-800 hover:bg-purple-100 p-2 rounded-xl">{page.name}</button>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <div className="notification-bar flex justify-between items-center">
                        <NavLink to={'/cart'} className='mr-2'>
                            <span className="text-purple-800 mx-2 text-md p-2 rounded-xl">
                                <Badge badgeContent={cart.length} color="primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                </Badge>
                            </span>
                        </NavLink>
                        {
                            userData ?
                                <NavLink to={'profile'}>
                                    <button className="text-purple-800  hover:bg-purple-200 text-sm md:text-md p-2 rounded-xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </button>
                                </NavLink> :
                                <NavLink to={'/signup'}>
                                    <botton className="text-purple-800  hover:bg-purple-100 text-sm md:text-md p-2 rounded-xl border border-purple-800">account</botton>
                                </NavLink>
                        }
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Naviagation;