import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const ProductsLoading = () => {

    const array = new Array(6);
    array.fill();

    return (
        <SkeletonTheme baseColor='#ebebeb' height={300}>
            {
                array.map((el, index) => (
                    <div className='d-flex flex-column m-3 col-12 col-sm-6 col-md-3' key={index}>
                        <p>
                            <Skeleton count={1} height={150} />
                        </p>
                        <p>
                            <Skeleton count={5} height={10} />
                        </p>
                    </div>
                ))
            }
        </SkeletonTheme>
    );
}

export default ProductsLoading;