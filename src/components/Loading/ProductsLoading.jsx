import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";

const ProductsLoading = () => {
    const arr = new Array(6);
    arr.fill();

    return (
        <SkeletonTheme baseColor="#e5e5e5" highlightColor='#444' height={300} width={300}>
            {
                arr.map((el, index) => {
                    <div className='d-flex flex-column m-3 col-11 col-sm-6 col-md-3' key={index}>
                        <p>
                            <Skeleton count={1} height={10} />
                        </p>
                        <p>
                            <Skeleton count={5} height={10} />
                        </p>
                    </div>
                })
            }
        </SkeletonTheme>
    );
}

export default ProductsLoading;