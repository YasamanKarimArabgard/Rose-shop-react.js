import deskTopPoster from '../../assets/desktop.jpg'
import { Button } from "@mui/material";
import { useNavigate } from 'react-router';

const DeskTopBanner = () => {

    const navigate = useNavigate()

    return (
        <div className='home_desk_poster d-none s-sm-none d-md-none d-lg-block d-xl-block'>
            <div className='position-absolute bottom-0 start-50 translate-middle-x text-center'>
                <h3 className='text-white'>Do you need something?</h3>
                <Button variant='outlined' color='secondary' onClick={() => navigate('/dresses')}>Buy Now</Button>
            </div>
            <img src={deskTopPoster} className='w-100 h-auto' alt='banner' />
        </div>
    );
};

export default DeskTopBanner;