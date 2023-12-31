import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import footerBg from '/public/assets/img/footerBgOne.jpg'
import logo from '/public/assets/img/logo.png'
import MyMotion from "../../Components/HelpingComponent/MyMotion";

const Footer = () => {

    return (
        <footer className='bg-center bg-cover bg-blend-overlay bg-slate-900 bg-fixed' style={{ backgroundImage: `url(${footerBg})` }}>

            <div className='grid grid-cols-1 lg:grid-cols-12 max-w-7xl mx-10 xl:mx-auto py-24 text-white'>
                <div className='flex justify-between col-span-3'>
                    <ul className='space-y-3'>
                        <span className="footer-title">Important Links</span>
                        <li><Link className="text-slate-300 hover:text-primary-main transition" to={'/'}>Home</Link></li>
                        <li><Link className="text-slate-300 hover:text-primary-main transition" to={'/about-us'}>Services</Link></li>
                        <li><Link className="text-slate-300 hover:text-primary-main transition" to={'/classes'}>Vision</Link></li>
                        <li><Link className="text-slate-300 hover:text-primary-main transition" to={'/services'}>Mision</Link></li>
                    </ul>
                    <ul className='space-y-3'>
                        <span className="footer-title">About</span>
                        <li><Link className="text-slate-300 hover:text-primary-main transition">About us</Link></li>
                        <li><Link className="text-slate-300 hover:text-primary-main transition">Our story</Link></li>
                        <li><Link className="text-slate-300 hover:text-primary-main transition">Join our team</Link></li>
                    </ul>
                </div>

                <div className='col-span-6 flex justify-center items-center'>
                    <MyMotion
                        y={-100}
                    >
                        <div className='rounded-full h-64 w-64 flex flex-col justify-center items-center space-y-4 bg-dark-2'>
                            <img src={logo} className="h-12 w-12 rounded-full" alt="" />
                            <h2 className='font-bold text-2xl'>My Agency</h2>
                            <div className='relative'>
                                <p className='font-bold pb-2'>Established . 2018</p>
                                <div className='h-0.5 w-10 bg-primary-main absolute top-full left-0 right-0 mx-auto'></div>
                            </div>
                            <ul className='flex gap-2 text-xl'>
                                <li> <Link className='rounded-full h-10 w-10 border border-primary-main flex justify-center items-center'> <FaFacebookF></FaFacebookF> </Link> </li>
                                <li> <Link className='rounded-full h-10 w-10 border border-primary-main flex justify-center items-center'> <FaTwitter></FaTwitter> </Link> </li>
                                <li> <Link className='rounded-full h-10 w-10 border border-primary-main flex justify-center items-center'> <FaGithub></FaGithub> </Link> </li>
                            </ul>
                        </div>
                    </MyMotion>
                </div>

                <div className='col-span-3'>
                    <ul className='space-y-3'>
                        <span className="footer-title">Legal</span>
                        <li><Link className="text-slate-300 hover:text-primary-main transition">Terms of use</Link></li>
                        <li><Link className="text-slate-300 hover:text-primary-main transition">Privacy policy</Link></li>
                        <li><Link className="text-slate-300 hover:text-primary-main transition">Meet Cookie policy</Link></li>
                    </ul>
                </div>
            </div>

            <div className='text-center border-t border-t-slate-800 text-slate-300'>
                <p className='py-6 font-bold'>Copyright © 2023 - All right reserved by <span className="text-primary-main text-lg">My Agency</span></p>
            </div>
        </footer>
    );
};

export default Footer;