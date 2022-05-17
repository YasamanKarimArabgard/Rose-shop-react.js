import { useState, useEffect } from 'react';

const Searchbar = ({ products, setFilteredItems }) => {

    const [searchItems, setSearchItems] = useState('');

    const filteredProducts = (search) => {
        if (!search || search === '') {
            setFilteredItems(products)
            return;
        }
        const filtered = products.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        setFilteredItems(filtered)
    }

    const onSearchHandler = (e) => {
        setSearchItems(e.target.value)
        filteredProducts(e.target.value)
    }

    useEffect(() => {
        filteredProducts(searchItems)
    }, [products])


    return (
        <>
            <input
                className='form-control shadow-none'
                type='text'
                placeholder='Search here...'
                onChange={onSearchHandler}
            />
        </>
    );
};

export default Searchbar;