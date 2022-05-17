import { useState, useEffect } from 'react';
import Select from 'react-select';

const options = [
    { value: 'Cheaper', label: 'Cheaper' },
    { value: 'Expensiver', label: 'Expensiver' }
]

const SelectPrice = ({ products, setFilteredItems }) => {

    const [selectedPrices, setSelectedPrices] = useState('Default');

    const filterPrices = (status) => {
        switch (status) {
            case 'Cheaper':
                return CheaperPrices()
            case 'Expensiver':
                return expensiverPrices()
            default:
                setFilteredItems(products)
        }
    }

    useEffect(() => {
        filterPrices(products.value)
    }, [products])


    const expensiverPrices = () => {
        const productsCopy = [...products]
        setFilteredItems(productsCopy.sort((a, b) => b.price - a.price))

    }

    const CheaperPrices = () => {
        const productsCopy = [...products]
        setFilteredItems(productsCopy.sort((a, b) => a.price - b.price))
    }


    const selectPriceHandler = (e) => {
        setSelectedPrices(e);
        filterPrices(e.value)
    }

    return (
        <>
            <Select
            className='col-10'
                options={options}
                value={selectedPrices}
                onChange={selectPriceHandler} >
            </Select>
        </>
    );
};

export default SelectPrice;