import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const BlogCard = ({ blog }) => {
    return (
        <div>
            <div className="">
                <div className="group w-96 bg-white">
                    <div className="w-96 overflow-hidden">
                        <img className='tranform duration-500 group-hover:scale-110' src={blog.thumbnail} alt="" />
                    </div>
                    <div className="p-5">
                        <div className="text-start">
                            <h4 className='ubuntu-font text-gray-300 mb-4'>{blog.publishDate}</h4>
                            <h1 className='ubuntu-font text-xl font-semibold'>{blog.title}</h1>
                            <p className='text-sm text-gray-400'>{blog.shortDescription}</p>
                        </div>
                        <div className="">
                            <div className="flex items-center gap-2 font-semibold text-red-400 group mt-5">
                                <p className='text-lg' >Explore More</p>
                                <FaArrowRight className=' transform group-hover:opacity-0 text-[18px]' />
                                <FaArrowRight className=' transform duration-500 -translate-x-10 group-hover:-translate-x-6.5 opacity-0 group-hover:opacity-100 text-[18px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;