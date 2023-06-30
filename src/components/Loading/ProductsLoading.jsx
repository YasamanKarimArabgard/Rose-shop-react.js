import CircularProgress from '@mui/material/CircularProgress';

const ProductsLoading = () => {
    return (
        <div className='col-span-10 row-start-7 flex justify-center items-center'>
            <CircularProgress color='primary' size='3rem' />
            <span className='ml-2 text-2xl font-bold text-purple-800'>Loading...</span>
        </div>
    )
}

export default ProductsLoading;