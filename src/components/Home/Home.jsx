import { useProducts } from '../../context/ProductsProvider';
import { Link } from 'react-router-dom';
import DeskTopBanner from './DeskTopBanner';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ResponsiveBanner from './ResponsiveBanner';


const Home = () => {

    const products = useProducts();

    return (
        <main className='home_container col-12 d-flex flex-column align-items-center mt-2'>
            <section className="home_container col-11 d-flex flex-column align-items-center">
                <DeskTopBanner />
                <ResponsiveBanner />
            </section>
        </main>
    );
};

export default Home;