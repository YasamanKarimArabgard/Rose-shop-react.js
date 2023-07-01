import HomePageImg from '../../assets/images/homePage.png'

const HomeBanner = () => {
    return (
        <div className='home-banner-container md:col-start-2 col-span-12 md:col-span-10 row-start-3 bg-purple-100 h-96 md:h-auto flex flex-col justify-center items-center rounded-md md:mt-2'>
            <div className='w-full md:w-3/4 flex flex-col-reverse items-center md:flex-row justify-between py-4 px-4 md:h-1/3'>
                <div className='md:w-1/2 flex flex-col items-center md:items-start justify-center xl:-mt-10'>
                    <h1 className='font-bold text-md xl:text-2xl text-purple-700 mb-1 xl:mb-3'>Do you need something?</h1>
                    <p className='text-sm text-gray-400  hidden xl:block'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                    </p>
                    <a href='#products' className='btn bg-purple-400 text-white font-bold text-sm xl:text-md px-3 py-1 xl:py-2 rounded-xl xl:mt-3 hover:bg-purple-500 transition-all'>Let's buy now</a>
                </div>
                <div className='w-4/5 md:w-1/2 col-span-6 flex justify-center xl:justify-end items-center'>
                    <img className='w-full md:w-3/4 h-auto' src={HomePageImg} alt='home-bg' />
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;