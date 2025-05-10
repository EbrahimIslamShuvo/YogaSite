import React from 'react';
import CountUp from 'react-countup';

const Count = () => {
    return (
        <div>
            <div className="">
                <div className=" container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4  justify-center lg:gap-50 md:gap-2 gap-5 items-center mx-auto my-20">
                    <div className="teko-font text-center">
                        <CountUp className='text-red-400 text-7xl font-semibold' end={168} duration={5} />
                        <p className='text-xl font-semibold'>SATISFIED CLIENTS</p>
                    </div>
                    <div className="teko-font text-center">
                        <CountUp className='text-red-400 text-7xl font-semibold' end={2590} duration={5} />
                        <p className='text-xl font-semibold'>LIVES TOUCHED</p>
                    </div>
                    <div className="teko-font text-center">
                        <CountUp className='text-red-400 text-7xl font-semibold' end={347} duration={5} />
                        <p className='text-xl font-semibold'>TEACHERS CERTIFIED</p>
                    </div>
                    <div className="teko-font text-center">
                        <CountUp className='text-red-400 text-7xl font-semibold' end={1912} duration={5} />
                        <p className='text-xl font-semibold'>TEACHERS CERTIFIED</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Count;