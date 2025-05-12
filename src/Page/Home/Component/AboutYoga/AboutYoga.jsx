import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import Button from '../../../../Component/Shared/Button';

const AboutYoga = () => {
    return (
        <div>
            <div className=" ">
                <div className="flex flex-col md:flex-row-reverse lg:flex-row items-center w-full">
                    <div className="md:w-1/2">
                        <img className='' src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/h4-single-img.jpg" alt="" />
                    </div>
                    <div className="lg:ms-20 md:px-15 px-15 md:w-1/2">
                        <div className="">
                            <p className=' teko-font text-gray-200 lg:text-[200px] text-[150px]'>01</p>
                            <h1 className='lg:ms-7 ms-6 lg:-mt-38 -mt-29 teko-font lg:text-5xl text-3xl font-semibold'>YOGA IDEALS IN <br />DAILY LIFE</h1>
                            <p className='ms-7 text-gray-500 lg:text-lg text-sm text-justify lg:w-110 md:w-59'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique eum accusamus eveniet illum? Laborum deleniti voluptas nemo quia eius iste!</p>
                        </div>
                        <div className="ms-7 lg:mt-15 mt-5">
                            <Button name={"READ MORE"}></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutYoga;