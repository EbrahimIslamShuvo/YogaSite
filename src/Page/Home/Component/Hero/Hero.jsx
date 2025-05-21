
import React, { useEffect } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []);
  return (
    <div>
      <Swiper navigation={true} pagination={true} autoplay={false} modules={[Navigation, Pagination, Autoplay]} className='text-center'>
        <SwiperSlide className="">

          <div className="relative ">
            <img class="w-full h-full object-cover" src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/03/h4-slider-background-img-1.jpg" alt="" />
            <div className="absolute container lg:top-18 md:top-18 lg:left-115 md:left-58 top-5 left-30 lg:border-4 border-[2px] border-orange-400 border-dotted h-40 w-40 md:h-72 md:w-72  lg:w-160 lg:h-160  rounded-full">
            </div>

            <h1 className='lg:text-7xl md:text-4xl text-black absolute lg:top-50 md:top-22 top-10 md:-right-30 -right-50 md:font-extrabold font-bold me-[270px] text-start'>BODY <br /><span className=''>AND SOUL</span></h1>
          </div>


        </SwiperSlide>

        <SwiperSlide className="">

          <div className="relative ">
            <img class="w-full h-full object-cover" src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/03/h4-slider-background-img-2.jpg" alt="" />
            <div className="absolute container lg:top-18 md:top-8 lg:left-120 md:left-65 top-3 left-30 lg:border-4 border-[2px] border-orange-400 border-dotted h-40 w-40 md:h-85 md:w-85  lg:w-160 lg:h-160  rounded-full">
            </div>

            <h1 className='lg:text-7xl md:text-4xl text-black absolute lg:top-50 md:top-25 top-10 md:-right-30 -right-50 md:font-extrabold font-bold me-[270px] text-start'>BODY <br /><span className=''>AND SOUL</span></h1>
          </div>


        </SwiperSlide>
        <SwiperSlide className="">

          <div className="relative ">
            <img class="w-full h-full object-cover" src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/03/h4-slider-background-img-3.jpg" alt="" />
            <div className="absolute container lg:top-18 md:top-8 lg:left-160 md:left-85 top-2 left-40 lg:border-4 border-[2px] border-orange-400 border-dotted h-40 w-40 md:h-72 md:w-72  lg:w-140 lg:h-140  rounded-full">
            </div>

            <h1 className='lg:text-7xl md:text-4xl text-black absolute lg:top-50 md:top-27 top-10 md:-right-40 -right-55 md:font-extrabold font-bold me-[270px] text-start'>BODY <br /><span className=''>AND SOUL</span></h1>
          </div>


        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Hero;

