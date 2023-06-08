import responsivePoster from '../../assets/mobile.jpg';
import { Button } from "@mui/material";
import { useNavigate } from 'react-router';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ResponsiveBanner = () => {
    
    const navigate = useNavigate()

    return (
        <div className='responsive_poster col-12 d-block s-sm-block d-md-block d-lg-none d-xl-none mt-2'>
            <div className='col-12 position-absolute top-50 start-50 translate-middle-x text-center'>
                <h4 className='text-white'>Do you need something?</h4>
                <Button variant='outlined' color='secondary' size='small' onClick={() => navigate('/products')}>Buy Now</Button>
            </div>
            <LazyLoadImage src={responsivePoster} className='w-100 h-auto' alt='banner'/>
        </div>
    );
};

export default ResponsiveBanner;