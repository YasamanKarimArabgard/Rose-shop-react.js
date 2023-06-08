import { useState, useEffect, useMemo } from 'react';

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

    return (<>
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