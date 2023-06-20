import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const ProductsLoading = () => {
    return (
        <SkeletonTheme baseColor='#ebebeb' height={300}>
            {
                Array(6).fill().map((p, index) => {
                   return <section className='col-span-10'>
                        <p>
                            <Skeleton count={1} height={150} />
                        </p>
                        <p>
                            <Skeleton count={5} height={10} />
                        </p>
                    </section>
                })
            }
        </SkeletonTheme>
    );
}

export default ProductsLoading;