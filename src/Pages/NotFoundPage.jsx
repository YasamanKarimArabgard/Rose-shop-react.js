import Layout from '../Layout/Layout';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {

    const navigate = useNavigate();

    return (
        <Layout>
            <div className='errorPage col-span-10 col-start-2 row-start-2 min-h-screen max-w-screen-2xl flex justify-center items-center'>
                <div>
                    <h1 className='text-2xl text-red-600 font-bold mb-2'>404 Error!</h1>
                    <button className='bg-purple-400 text-white rounded-xl p-2 px-3' onClick={() => navigate('/')}>Back to home</button>
                </div>
            </div>
        </Layout>
    );
};

export default NotFoundPage;