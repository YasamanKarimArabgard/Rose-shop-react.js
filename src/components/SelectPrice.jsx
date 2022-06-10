import { useState, useEffect } from 'react';
import Select from 'react-select';

const options = [
    { value: 'Descending', label: 'Descending' },
    { value: 'Ascending', label: 'Ascending' }
]

const SelectPrice = ({ products, setFilteredItems }) => {

    const [selectedPrices, setSelectedPrices] = useState('Default');

    const filterPrices = (status) => {
        switch (status) {
            case 'Descending':
                return CheapPrices()
            case 'Ascending':
                return expensivePrices()
            default:
                setFilteredItems(products)
        }
    }

    useEffect(() => {
        filterPrices(products.value)
    }, [products])


    const expensivePrices = () => {
        const productsCopy = [...products]
        setFilteredItems(productsCopy.sort((a, b) => b.price - a.price))

    }

    const CheapPrices = () => {
        const productsCopy = [...products]
        setFilteredItems(productsCopy.sort((a, b) => a.price - b.price))
    }


    const selectPriceHandler = (e) => {
        setSelectedPrices(e);
        filterPrices(e.value)
    }

    return (<>
            <Select
            className='w-100'
                options={options}
                value={selectedPrices}
                onChange={selectPriceHandler}
                placeholder='Filter by price'>
            </Select>
        </>
    );
};

export default SelectPrice;