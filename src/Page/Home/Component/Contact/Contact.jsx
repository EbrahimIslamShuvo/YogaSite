import React from 'react';
import { TextField } from '@mui/material';
import { FaArrowRight } from 'react-icons/fa'; // Assuming you are using react-icons

const Contact = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center text-center gap-10 px-4 py-20">
                <div>
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">Take CHARGE OF YOUR LIFE</h1>
                    <p className="text-lg max-w-4xl mx-auto text-gray-500">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nean commodo ligula eget dolor. Cum sociis natoque penatibus et magnis dis.
                    </p>
                </div>
                <div className="w-full max-w-4xl"> {/* Set width to 100% and max-w-4xl */}
                    {/* Form Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Added grid layout with gap */}
                        <TextField
                            id="outlined-first-name"
                            label="First Name"
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
                            id="outlined-last-name"
                            label="Last Name"
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
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"> {/* Added grid layout with gap */}
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
                    </div>
                    <div className="mt-8"> {/* Added margin-top */}
                        <TextField
                            id="outlined-comment"
                            label="Comment"
                            multiline
                            maxRows={4}
                            rows={4}
                            fullWidth
                            sx={{
                                '& label.Mui-focused': {
                                    color: '#1B4B36',
                                },
                                '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#1B4B36',
                                    },
                                },
                            }}
                        />
                    </div>
                    <div className="group flex items-center gap-2 mt-8"> {/* Adjusted margin and gap */}
                        <div className="bg-red-400 text-white px-4 py-2 font-bold text-sm cursor-pointer">
                            <p className='ubuntu-font'>SEND MESSAGE</p>
                        </div>
                        <div className="flex items-center bg-red-400 text-white py-2.5 cursor-pointer">
                            <FaArrowRight className='transform translate-x-2 group-hover:opacity-0' />
                            <FaArrowRight className='transform duration-500 -translate-x-5 group-hover:-translate-x-2 opacity-0 group-hover:opacity-100' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
