import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../../../Component/Shared/Button';

const Category = () => {
    return (
        <div>
            <div className="w-full">
                <div className="flex flex-col lg:flex-row w-full mx-auto">
                    <div className="flex lg:w-1/2 w-full">
                        <div className="flex items-center md:gap-10 w-1/2">
                            <div className="grid gap-2 md:gap-8 px-15">
                                <div className="">
                                    <h4 className='md:text-sm text-[11px] text-red-400 font-semibold'>MEDITATION</h4>
                                    <h1 className='md:text-3xl  text-xl font-bold font-sans'>MEDITATION</h1>
                                    <p className='text-gray-500 md:text-base text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nemo!</p>
                                </div>
                                <NavLink to={"/meditationCourse"}>
                                    <Button name={"Explore More"}></Button>
                                </NavLink>
                            </div>
                        </div>
                        <div className="w-1/2 overflow-hidden">
                            <img className='hover:scale-110 duration-500' src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/event-single-img-5-550x550.jpg" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-row-reverse lg:flex-row lg:w-1/2 w-full">
                        <div className="flex items-center md:gap-10 w-1/2">
                            <div className="grid gap-2 md:gap-8 px-15">
                                <div className="">
                                    <h4 className='md:text-sm text-[11px] text-red-400 font-semibold'>YOGA</h4>
                                    <h1 className='md:text-3xl text-xl font-bold font-sans'>YOGA</h1>
                                    <p className='text-gray-500 md:text-base text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nemo!</p>
                                </div>
                                <NavLink to={"/yogaCourse"}>
                                    <Button name={"Explore More"}></Button>
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