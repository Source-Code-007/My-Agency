import React from 'react';
import CommonSectionBanner from '../../Components/HelpingComponent/CommonSectionBanner';
import servicesBg from '/public/assets/img/banner-bg/services.jpg'

const Services = () => {
    return (
        <div>
            <CommonSectionBanner title={'Services'} bgImg={servicesBg} />


        </div>
    );
};

export default Services;