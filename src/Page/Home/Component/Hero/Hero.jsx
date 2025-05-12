
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
            <div className="absolute container lg:top-18 md:top-8 lg:left-115 md:left-55 top-5 left-30 lg:border-4 border-[2px] border-orange-400 border-dotted h-40 w-40 md:h-72 md:w-72  lg:w-160 lg:h-160  rounded-full">
            </div>

            <h1 className='lg:text-8xl md:text-4xl text-black absolute lg:top-40 md:top-22 top-10 lg:-right-20 md:-right-35 -right-45 md:font-extrabold font-bold me-[270px] text-start'>BODY <br /><span className=''>AND SOUL</span></h1>
          </div>


        </SwiperSlide>

        <SwiperSlide className="">

          <div className="relative ">
            <img class="w-full h-full object-cover" src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/03/h4-slider-background-img-2.jpg" alt="" />
            <div className="absolute container lg:top-18 md:top-8 lg:left-115 md:left-55 top-5 left-30 lg:border-4 border-[2px] border-orange-400 border-dotted h-40 w-40 md:h-72 md:w-72  lg:w-160 lg:h-160  rounded-full">
            </div>

            <h1 className='lg:text-8xl md:text-4xl text-black absolute lg:top-40 md:top-22 top-10 lg:-right-20 md:-right-35 -right-45 md:font-extrabold font-bold me-[270px] text-start'>BODY <br /><span className=''>AND SOUL</span></h1>
          </div>


        </SwiperSlide>
        <SwiperSlide className="">

          <div className="relative ">
            <img class="w-full h-full object-cover" src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/03/h4-slider-background-img-3.jpg" alt="" />
            <div className="absolute container lg:top-18 md:top-8 lg:left-115 md:left-55 top-5 left-30 lg:border-4 border-[2px] border-orange-400 border-dotted h-40 w-40 md:h-72 md:w-72  lg:w-160 lg:h-160  rounded-full">
            </div>

            <h1 className='lg:text-8xl md:text-4xl text-black absolute lg:top-40 md:top-22 top-10 lg:-right-20 md:-right-5 -right-45 md:font-extrabold font-bold me-[270px] text-start'>BODY <br /><span className=''>AND SOUL</span></h1>
          </div>


        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Hero;

