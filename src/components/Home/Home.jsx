import { useProducts } from '../../context/ProductsProvider';
import DeskTopBanner from './DeskTopBanner';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router';
import ResponsiveBanner from './ResponsiveBanner';


const Home = () => {

    const products = useProducts();

    const navigate = useNavigate()

    return (
        <main className='home_container col-12 d-flex flex-column align-items-center mt-2'>
            <section className="home_container col-11 d-flex flex-column align-items-center">
                <DeskTopBanner />
                <ResponsiveBanner />
            </section>
            <section className='col-11 my-4'>
                <h5>More popular</h5>
                <article className='col-12 mt-3 mx-2'>
                    <Stack direction="row" spacing={2}>
                        {products.slice(2, 5).map(item => (
                            <Avatar alt="popular" src={item.image} sx={{ width: 56, height: 56 }} onClick={() => navigate('/products')} />
                        ))}
                    </Stack>
                </article>
            </section>
        </main>
    );
};

export default Home;