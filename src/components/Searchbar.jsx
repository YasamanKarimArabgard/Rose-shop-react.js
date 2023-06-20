import { useState, useEffect, useMemo } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";

const Searchbar = ({ products, setFilteredItems, category, filteredItems }) => {

    const [searchItems, setSearchItems] = useState('');

    const filteredProducts = (search) => {
        if (!search || search === '') {
            if (!category) {
                setFilteredItems(products);
            } else {
                const filteredProd = products.filter(product => {
                    return product.category === category;
                })
                setFilteredItems(filteredProd);
            }
            return;
        }
        const filtered = filteredItems.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
        setFilteredItems(filtered);
    }

    const onSearchHandler = (e) => {
        setSearchItems(e.target.value);
        filteredProducts(e.target.value);
    }

    useEffect(() => {
        filteredProducts(searchItems);
    }, [products]);

    return (
        <div className='searchbar w-full md:w-1/2 xl:w-1/4 flex rounded-xl bg-purple-200 p-1'>
            <IconButton>
                <SearchIcon />
            </IconButton>
            <input
                className='w-full appearance-none rounded-xl px-1 bg-gray-50 border focus:outline-none focus:border-purple-500'
                type='text'
                placeholder='Search by name'
                onChange={onSearchHandler} />
        </div>
    );
};

export default Searchbar;