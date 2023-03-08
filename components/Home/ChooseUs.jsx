import React from 'react';

const ChooseUs = () => {
    return (
        <div className=' bg-[#012A4A]'>
            <div className='lg:w-7/12 mx-auto lg:px-0 px-2'>
                <h1 className='text-center text-white pt-[61px] text-[30px] lg:text-[40px] font-light'>Why <span className='font-bold'>Choose</span> Us</h1>
                <p className='text-center text-[16px] text-gray-200 pt-[16px]'>Our Achievement</p>

                <div className='py-[70px] flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left'>
                    <div>
                        <h3 className='text-[40px] font-bold text-secondary text-yellow-400'>8550+</h3>
                        <p className='text-white text-2xl'>Happy Patients</p>
                        <span className='text-[#B5B5B5] block pt-[17px]'>Over the success critical patients surgery in the clinic</span>
                    </div>
                    <div>
                        <h3 className='text-[40px] font-bold text-secondary text-yellow-400'>80+</h3>
                        <p className='text-white text-2xl'>Expert Doctors</p>
                        <span className='text-[#B5B5B5] block mt-[17px]'>The medical professional
                            doctors available in the clinic</span>
                    </div>
                    <div>
                        <h3 className='text-[40px] font-bold text-secondary text-yellow-400'>47+</h3>
                        <p className='text-white text-2xl'>Health Deparments</p>
                        <span className='text-[#B5B5B5] block mt-[17px]'>Total health departments available in our medical clinic</span>
                    </div>
                    <div>
                        <h3 className='text-[40px] font-bold text-secondary text-yellow-400'>2250+</h3>
                        <p className='text-white text-2xl'>Total Branches</p>
                        <span className='text-[#B5B5B5] block mt-[17px]'>Total medical branches
                            available in over the</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;