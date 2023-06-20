import HomePageImg from '../../assets/homePage.png'
import { useNavigate } from 'react-router-dom';

const HomeBanner = () => {

    const navigate = useNavigate();

    return (
        <main className='home_container max-w-scren-2xl'>
            <section className="home_container mx-auto grid grid-cols-12 grid-rows-[55px-minmax(500px, _1fr)] p-2 m-2 gap-8 bg-purple-100">
                <div className='md:col-start-2 col-span-12 md:col-span-10 row-start-3'>
                    <div className='w-full flex flex-col-reverse xl:flex-row justify-between'>
                        <div className='xl:w-1/2 flex flex-col items-center xl:items-start justify-center xl:-mt-10'>
                            <h1 className='font-bold text-lg xl:text-4xl text-purple-700 xl:mb-3'>Do you need something?</h1>
                            <p className='text-sm text-gray-400  hidden xl:block'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                            </p>
                            <button className='btn bg-purple-400 text-white font-bold text-sm xl:text-md px-3 py-1 xl:py-2 rounded-xl xl:mt-3 hover:bg-purple-500 transition-all'
                                onClick={() => navigate('/products')}>Let's buy now</button>
                        </div>
                        <div className='xl:w-1/2 col-span-6 flex justify-center xl:justify-end items-center'>
                            <img className='w-1/2 xl:w-3/4 h-auto' src={HomePageImg} alt='home-bg' />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomeBanner;