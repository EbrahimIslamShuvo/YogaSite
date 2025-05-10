import React, { useEffect, useState } from 'react';
import BlogCard from '../../../../Component/BlogCard';
import { TextField } from '@mui/material';
import { FaArrowRight } from 'react-icons/fa6';

const Blog = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('/Blog.json') // ✅ from public folder
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    const topBlogs = blogs ? blogs.slice(0, 2) : [];

    return (
        <div>
            {/* Hero Section */}
            <div
                className="bg-fixed"
                style={{
                    backgroundImage: "url('https://prowess.qodeinteractive.com/wp-content/uploads/2018/03/h4-parallax-2.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className=" flex flex-col items-center justify-center text-center gap-10 px-4 py-20">
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4">TAKE CHARGE OF YOUR LIFE</h1>
                        <p className="text-lg max-w-4xl mx-auto text-gray-500">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nean commodo ligula eget dolor. Cum sociis natoque penatibus et magnis dis.
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="flex flex-col md:flex-row items-center gap-20">
                            {topBlogs.map(blog => (
                                <BlogCard key={blog.id} blog={blog} />
                            ))}
                        </div>
                        <div className="w-96 flex flex-col gap-7">
                            <div className="">
                                <h1 className='teko-font text-3xl font-bold'>NEWSLETTER</h1>
                                <p className='ubuntu-font text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro explicabo qui optio numquam ipsam incidunt.</p>
                            </div>
                            <div className="grid gap-10">
                                <TextField
                                    id="outlined-name"
                                    label="Name"
                                    fullWidth
                                    sx={{
                                        '& label.Mui-focused': {
                                            color: '#F34E3A',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#F34E3A',
                                            },
                                        },
                                    }}
                                />
                                <TextField
                                    id="outlined-email"
                                    label="Email"
                                    fullWidth
                                    sx={{
                                        '& label.Mui-focused': {
                                            color: '#F34E3A',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#F34E3A',
                                            },
                                        },
                                    }}
                                />
                                <TextField
                                    id="outlined-phone"
                                    label="Phone"
                                    fullWidth
                                    sx={{
                                        '& label.Mui-focused': {
                                            color: '#F34E3A',
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#F34E3A',
                                            },
                                        },
                                    }}
                                />
                                <div className="group flex items-center gap-0.5">
                                    <div className="bg-red-400 text-white px-4 py-2 font-bold text-sm">
                                        <p className='ubuntu-font'>SUBSCRIBE</p>
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
        </div>
    );
};

export default Blog;
