import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const HeroSection = () => {
    return (
        <div className='flex justify-between items-center gap-5 md:pl-16 text-white'>

            <div className='flex gap-6 lg:gap-10 items-center w-4/6'>
                <ul className="flex flex-col gap-6 text-3xl xl:text-4xl ">
                    <li className="text-para-1 hover:text-primary-main cursor-pointer transition"><FaFacebook></FaFacebook></li>
                    <li className="text-para-1 hover:text-primary-main cursor-pointer transition"><FaInstagram></FaInstagram></li>
                    <li className="text-para-1 hover:text-primary-main cursor-pointer transition"><FaLinkedin></FaLinkedin></li>
                    <li className="text-para-1 hover:text-primary-main cursor-pointer transition"><FaTwitter></FaTwitter></li>
                </ul>
                <div className="space-y-6">
                    <p className='text-para-2 font-semibold text-xl inline-flex items-center gap-3'>Innovative Ideas <span className="rounded-ball"></span></p>
                    <h2 className='my-banner-title'>We Offer You <span className='text-primary-main'>A <br /> Digital</span> <span className="inline-flex items-center gap-3"><span>Platform</span><span className="rounded-ball lg:mt-3"></span></span></h2>
                    <p className='text-para-1 pr-14 lg:pr-24 text-lg'>Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Nisl purus in mollis nunc sed id sempe egestas quis ips. </p>
                    <div className="inline-flex gap-3 items-center font-semibold text-primary-main relative pl-16 cursor-pointer group hover:pl-0 hover:pr-16 transition-all duration-500">
                        <hr  className="h-px w-14 bg-para-2 opacity-70 absolute left-0 top-1/2 -translate-y-1/2 visible group-hover:invisible group-hover:opacity-0 duration-500"/>
                        <hr  className="h-px w-14 bg-para-2 absolute right-0 top-1/2 -translate-y-1/2 invisible opacity-0 group-hover:opacity-70 group-hover:visible duration-500"/>
                        <span className="rounded-ball !h-2 !w-2"></span>
                        <span className="">Get Started</span>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <img src="https://gaaga.wpengine.com/rtl-demo/wp-content/uploads/sites/3/2023/06/Gaaga-Slider-1-Image-1-2048x1796.jpg" className='h-[calc(100vh-60px)] w-full' alt="" />
            </div>

        </div>
    );
};

export default HeroSection;