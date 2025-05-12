import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const Button = ({name}) => {
    return (
        <div>
            <div className="flex items-center md:gap-2 gap-0.5 font-semibold text-red-400 group">
                <p className='lg:text-lg md:text-[13px] text-[12px]' >{name}</p>
                <FaArrowRight className=' transform group-hover:opacity-0 text-[12px] md:text-[18px]' />
                <FaArrowRight className=' transform duration-500 -translate-x-10 group-hover:-translate-x-3.5 md:group-hover:-translate-x-6.5 opacity-0 group-hover:opacity-100 text-[12px] md:text-[18px]' />
            </div>
        </div>
    );
};

export default Button;