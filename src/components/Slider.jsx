import { Swiper, SwiperSlide } from "swiper/react";
import Img3 from '../assets/img3.jpg'
import Img4 from '../assets/img4.jpg'
import Img1 from '../assets/img1.jpg'
import Img2 from '../assets/img2.jpg'
import "swiper/css";
import 'swiper/css/pagination';

import "swiper/css/scrollbar";
import { Pagination, Autoplay } from "swiper";

const Slider = () => {

    const sliderItems = [
        {
            id: 'img1',
            image: Img1
        },
        {
            id: 'img2',
            image: Img2
        }, {
            id: 'img3',
            image: Img3
        }, {
            id: 'img4',
            image: Img4
        }
    ]

    return (
        <section className="slider-container col-12 d-none d-md-none d-lg-block d-xl-block">
            <Swiper
                centeredSlides={true}
                loop={true}
                modules={[Pagination, Autoplay]}
                autoplay={{ disableOnInteraction: false, delay: 3000 }}
                slidesPerView={1}
                spaceBetween={40}
                pagination={{
                    clickable: true,
                }}
            >
                {sliderItems.map(item => (
                    <SwiperSlide >
                        <img src={item.image} alt="slider img" className='w-75 h-auto' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Slider;