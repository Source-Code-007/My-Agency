import { useEffect, useState } from "react";
import logo from '/public/assets/img/logo.png'
import { motion } from "framer-motion"
import ActiveLink from "../../Components/HelpingComponent/ActiveLink";
import MyLoading from "../../Components/HelpingComponent/MyLoading";


const Nav = () => {
    const [isTop, setIsTop] = useState(true);

    // for conditionally set navbar bg
    useEffect(() => {
        const handleScroll = () => {
            const scrolledToTop = window.pageYOffset < 200;
            setIsTop(scrolledToTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const menu =
        <>

            <li><ActiveLink to={'/'}>Home</ActiveLink></li>
            <li><ActiveLink to={'/about-us'}>About us</ActiveLink></li>
            <li><ActiveLink to={'/vision'}>Vision</ActiveLink></li>

        </>

    return (



        <nav className={`navbar px-8 bg-slate-900 transition duration-500 shadow ${isTop ? 'bg-opacity-40' : 'bg-opacity-90'} fixed z-50`}>
            <div className="navbar-start w-fit md:w-3/6">
                {/* Mobile menu */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden !text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-slate-800 bg-opacity-95 mt-3 p-2 shadow space-y-5 rounded-box w-52">
                        {menu}
                    </ul>
                </div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: .2, type: "spring", stiffness: 70 }}
                >

                    <a className="text-2xl font-bold cursor-pointer text-white items-center gap-2 hidden md:flex"><img className="w-12 h-12" src={logo} alt="" /> Agency</a>
                </motion.div>

            </div>
                {/* Desktop menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end w-full md:w-3/6">


                {/* {
                    authLoading ? <MyLoading></MyLoading> : user ? <>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, x: 100 },
                                visible: { opacity: 1, x: 0 }
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ delay: .2, type: "spring", stiffness: 70 }}
                            className="flex"
                        >
                            <Link><img className="h-12 w-12 rounded-full mx-2" src={user.photoURL} alt="" /></Link>
                            <button onClick={handleSignoutFunc} className='cmn-btn-two'>Signout</button>
                        </motion.div>
                    </> : <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 100 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: .2, type: "spring", stiffness: 70 }}
                    >
                        <Link to={'/signin'}><button className="cmn-btn-two">Signin</button></Link>
                    </motion.div>
                } */}
            </div>
        </nav>
    );
};

export default Nav;