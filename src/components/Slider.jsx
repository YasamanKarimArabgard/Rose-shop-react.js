import { Swiper, SwiperSlide } from "swiper/react";
import Img1 from '../assets/img1.jpg'
import Img2 from '../assets/img2.jpg';
import Img3 from '../assets/img3.jpg'
import Img4 from '../assets/img4.jpg'
import "swiper/css";
import 'swiper/css/pagination';

import "swiper/css/scrollbar";
import { Pagination, Autoplay } from "swiper";

const Slider = () => {

    return (
        <section className="main-slider col-12 d-flex justify-content-center mb-4" style={{height :'80vh'}}>
            <Swiper
                loop={true}
                modules={[Pagination, Autoplay]}
                autoplay={{ disableOnInteraction: false, delay: 3000 }}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
            >
                <SwiperSlide>
                    <img src={Img1} alt="slier img" className='w-100 h-100'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Img2} alt="slier img" className='w-100 h-100'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Img3} alt="slier img" className='w-100 h-100'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Img4} alt="slier img" className='w-100 h-100'/>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Slider;