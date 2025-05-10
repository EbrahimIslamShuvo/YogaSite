import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Category = () => {
    return (
        <div>
            <div className="w-full">
                <div className=" container flex w-full mx-auto">
                    <div className="container flex">
                        <div className="flex items-center gap-10 w-1/2">
                            <div className="grid gap-8 px-15">
                                <div className="">
                                    <h4 className='text-sm text-red-400'>MEDITATION</h4>
                                    <h1 className='text-3xl font-bold font-sans'>MEDITATION</h1>
                                    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nemo!</p>
                                </div>
                                <NavLink to={"/meditationCourse"}>
                                    <div className="flex items-center gap-2 text-lg font-semibold text-red-400 group">
                                        <p className=''>Explore More</p>
                                        <FaArrowRight className=' transform group-hover:opacity-0 ' />
                                        <FaArrowRight className=' transform duration-500 -translate-x-10 group-hover:-translate-x-6 opacity-0 group-hover:opacity-100 ' />
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="w-1/2 overflow-hidden">
                            <img className='hover:scale-110 duration-500' src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/event-single-img-5-550x550.jpg" alt="" />
                        </div>
                    </div>
                    <div className="container flex">
                        <div className="flex items-center gap-10 w-1/2">
                            <div className="grid gap-8 px-15">
                                <div className="">
                                    <h4 className='text-sm text-red-400'>YOGA</h4>
                                    <h1 className='text-3xl font-bold font-sans'>YOGA CLASS</h1>
                                    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nemo!</p>
                                </div>
                                <NavLink to={"/yogaCourse"}>
                                    <div className="flex items-center gap-2 text-lg font-semibold text-red-400 group">
                                        <p className=''>Explore More</p>
                                        <FaArrowRight className=' transform group-hover:opacity-0 ' />
                                        <FaArrowRight className=' transform duration-500 -translate-x-10 group-hover:-translate-x-6 opacity-0 group-hover:opacity-100 ' />
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