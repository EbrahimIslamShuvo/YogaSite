import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Category = () => {
    return (
        <div>
            <div className="w-full">
                <div className=" container flex flex-col lg:flex-row w-full mx-auto">
                    <div className="container flex">
                        <div className="flex items-center lg:gap-10 w-1/2">
                            <div className="grid gap-2 lg:gap-8 px-15">
                                <div className="">
                                    <h4 className='lg:text-sm text-[11px] text-red-400 font-semibold'>MEDITATION</h4>
                                    <h1 className='lg:text-3xl text-xl font-bold font-sans'>MEDITATION</h1>
                                    <p className='text-gray-500 lg:text-base text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nemo!</p>
                                </div>
                                <NavLink to={"/meditationCourse"}>
                                    <div className="flex items-center md:gap-2 gap-0.5 font-semibold text-red-400 group">
                                        <p className='lg:text-lg md:text-[13px] text-[12px]' >Explore More</p>
                                        <FaArrowRight className=' transform group-hover:opacity-0 text-[12px] md:text-[18px]' />
                                        <FaArrowRight className=' transform duration-500 -translate-x-10 group-hover:-translate-x-3.5 md:group-hover:-translate-x-6.5 opacity-0 group-hover:opacity-100 text-[12px] md:text-[18px]' />
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="w-1/2 overflow-hidden">
                            <img className='hover:scale-110 duration-500' src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/event-single-img-5-550x550.jpg" alt="" />
                        </div>
                    </div>
                    <div className="container flex flex-row-reverse lg:flex-row">
                        <div className="flex items-center lg:gap-10 w-1/2">
                            <div className="grid gap-2 lg:gap-8 px-15">
                                <div className="">
                                    <h4 className='lg:text-sm text-[11px] text-red-400 font-semibold'>MEDITATION</h4>
                                    <h1 className='lg:text-3xl text-xl font-bold font-sans'>MEDITATION</h1>
                                    <p className='text-gray-500 lg:text-base text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nemo!</p>
                                </div>
                                <NavLink to={"/yogaCourse"}>
                                    <div className="flex items-center md:gap-2 gap-0.5 font-semibold text-red-400 group">
                                        <p className='lg:text-lg md:text-[13px] text-[12px]' >Explore More</p>
                                        <FaArrowRight className=' transform group-hover:opacity-0 text-[12px] md:text-[18px]' />
                                        <FaArrowRight className=' transform duration-500 -translate-x-10 group-hover:-translate-x-3.5 md:group-hover:-translate-x-6.5 opacity-0 group-hover:opacity-100 text-[12px] md:text-[18px]' />
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="w-1/2 overflow-hidden">
                            <img className=' hover:scale-110 duration-500' src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/event-single-img-6-550x550.jpg" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Category;