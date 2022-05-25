import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout';

const NotFoundPage = () => {

    const navigate = useNavigate();

    return (
        <Layout>
            <div className='errorPage col-12 d-flex flex-column justify-content-center align-items-center mt-5'>
                <h1 className='text-secondary mb-4'>404 Error!</h1>
                <Button variant='text' color='secondary' onClick={()=>navigate('/')}>Back to home </Button>
            </div>
        </Layout>
    );
};

export default NotFoundPage;