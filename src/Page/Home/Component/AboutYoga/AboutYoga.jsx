import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const AboutYoga = () => {
    return (
        <div>
            <div className=" ">
                <div className="container flex flex-col md:flex-row items-center w-full">
                    <div className="">
                        <img src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/h4-single-img.jpg" alt="" />
                    </div>
                    <div className="lg:ms-20 md:ms-12">
                        <div className="">
                            <p className=' teko-font text-gray-200 lg:text-[200px] text-[150px]'>01</p>
                            <h1 className='lg:ms-7 ms-6 lg:-mt-38 -mt-29 teko-font lg:text-5xl text-3xl font-semibold'>YOGA IDEALS IN <br />DAILY LIFE</h1>
                            <p className='ms-7 text-gray-500 lg:text-lg text-sm text-justify lg:w-110 md:w-59'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique eum accusamus eveniet illum? Laborum deleniti voluptas nemo quia eius iste!</p>
                        </div>
                        <div className="ms-7  lg:mt-15 mt-5">
                            <div className="group flex items-center gap-0.5">
                                <div className="bg-red-400 text-white px-4 py-2 font-bold text-sm">
                                    <p className='ubuntu-font'>READ MORE</p>
                                </div>
                                <div className="flex items-center bg-red-400 text-white py-2.5">
                                    <FaArrowRight className=' transform translate-x-2 group-hover:opacity-0 ' />
                                    <FaArrowRight className=' transform duration-500 -translate-x-5 group-hover:-translate-x-2 opacity-0 group-hover:opacity-100 ' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutYoga;