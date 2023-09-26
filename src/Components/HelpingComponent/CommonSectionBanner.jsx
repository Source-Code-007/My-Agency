import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CommonSectionBanner = ({title, bgImg}) => {
    return (
        <div className='bg-dark-2 text-white commonSectionBanner bg-cover bg-top bg-blend-overlay' style={{backgroundImage: `url(${bgImg})`}}>
            <div className='my-container h-[340px] md:h-[425px] flex flex-col gap-6 items-center justify-center relative'>
                <h2 className='font-light text-3xl md:text-5xl flex items-center gap-3'><span className='rounded-ball lg:mt-2'></span> {title} </h2>
                <div className='flex items-center gap-2 text-xl'><Link to={'/'} className='font-semibold hover:text-primary-main'>Home</Link> <FaAngleRight></FaAngleRight> <span className='text-primary-main'>{title}</span></div>
            </div>
        </div>
    );
};

export default CommonSectionBanner;