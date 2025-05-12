
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
      <Swiper navigation={true} pagination={true} autoplay={true} modules={[Navigation, Pagination, Autoplay]} className='text-center'>
        <SwiperSlide className="">

          <div className="relative ">
            <img class="w-full h-full object-cover" src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/03/h4-slider-background-img-1.jpg" alt="" />
            <div data-aos="zoom-in" className="absolute top-15 right-200 border-4 border-orange-400 border-dotted h-[70vh] w-[35vw] rounded-full">
            </div>

            <h1 className='text-8xl text-black absolute top-40 -right-20 font-extrabold me-[270px]'>BODY <br /><span className='ms-[210px]'>AND SOUL</span></h1>
          </div>


        </SwiperSlide>

        <SwiperSlide className="">

          <div className="relative ">
            <img class="w-full h-full object-cover" src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/03/h4-slider-background-img-2.jpg" alt="" />
            <div data-aos="zoom-in" className="absolute top-15 right-200 border-4 border-orange-400 border-dotted h-[70vh] w-[35vw] rounded-full">
            </div>

            <h1 className='text-8xl text-black absolute top-40 -right-20 font-extrabold me-[380px]'>STEP TO <br /><span className='me-16'>PEACE</span></h1>
          </div>


        </SwiperSlide>
        <SwiperSlide className="">

          <div className="relative ">
            <img class="w-full h-full object-cover" src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/03/h4-slider-background-img-3.jpg" alt="" />
            <div data-aos="zoom-in" className="absolute top-15 right-160 border-4 border-orange-400 border-dotted h-[70vh] w-[35vw] rounded-full">
            </div>

            <h1 className='text-8xl text-black absolute top-40 -right-20 font-extrabold me-[270px]'>STAY <br /><span className='ms-[210px]'>FLEXIBLE</span></h1>
          </div>


        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Hero;

