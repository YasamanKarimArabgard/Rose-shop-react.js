import { useParams } from 'react-router-dom';
import { useProducts } from '../context/ProductsProvider';

const SingleProduct = () => {

    const { id } = useParams();
    const products = useProducts();

    const singleProduct = products.find(p => p.id == id);

    return (
        <main className='single-product-container'>
            <h6>{singleProduct.name}</h6>
            <h6>{singleProduct.price}$</h6>
        </main>
    );
};

export default SingleProduct;