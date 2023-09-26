import '../auth.css'
import logo1 from '../../../assets/logo-1.png'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaApple, FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import successRegistrationLottie from '/public/assets/lottie/successfully-registration-lottie.json'
import registrationLoadingLottie from '/public/assets/lottie/registration_loading.json'
import signupLottie from '/public/assets/lottie/signup-lottie.json'
import Lottie from 'lottie-react';


const Signup = () => {
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [isShowPass, setIsShowPass] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const handleSignupFunc = (form) => {
        setLoading(true);
        setError('')
        setSuccess('')
        const { firstName, lastName, authEmail, authPass, terms } = form;

        // password regexp
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!passwordRegex.test(authPass)) {
            setError(
                "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit."
            );
            setLoading(false)
            return;
        }
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(authEmail)) {
            setError(
                "Please provide valid email!"
            );
            setLoading(false)
            return;
        }
        setLoading(false)
        console.log(firstName, lastName, authEmail, authPass, terms);
    }

    return (
        <div className="grid grid-cols-12 min-h-screen bg-dark-1 p-5 md:p-10 lg:pt-24">
            <div className="hidden md:flex justify-center md:col-span-6 lg:col-span-7">
                <Lottie
                    animationData={
                        success
                            ? successRegistrationLottie
                            : loading
                                ? registrationLoadingLottie
                                : signupLottie
                    }
                    loop={true}
                    className="h-5/6 lg:h-[75%] w-5/6 lg:w-[75%] mx-auto"
                />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-5 py-6 px-4">
                <form className='space-y-5 md:space-y-7 px-4 pt-0 md:pt-8 lg:pt-14' onSubmit={handleSubmit(handleSignupFunc)}>
                    <h2> <Link to={'/'}><img src={logo1} alt="" /></Link></h2>
                    <h2 className='my-subtitle text-white'> Create your account</h2>

                    <div className='flex flex-col md:flex-row items-center gap-4'>
                        <div className="form-item w-full">
                            <input type="name" id="firstName" className='authInp' {...register("firstName", { required: true })} />
                            <label htmlFor="firstName">First Name</label>
                            {errors.firstName && (<p className="text-red-500"> First name required!</p>)}
                        </div>
                        <div className="form-item w-full">
                            <input type="name" id="lastName" className='authInp' {...register("lastName", { required: true })} />
                            <label htmlFor="lastName">Last Name</label>
                            {errors.lastName && (<p className="text-red-500"> Last name required!</p>)}
                        </div>
                    </div>
                    <div className="form-item">
                        <input type="text" id="signupEmail" className='authInp' {...register("authEmail", { required: true })} />
                        <label htmlFor="signupEmail">Email</label>
                        {errors.authEmail && (<p className="text-red-500"> Email required!</p>)}
                    </div>
                    <div className="form-item relative">
                        <input type={`${isShowPass ? "text" : "password"}`} id="signupPassword" className='authInp' {...register("authPass", { required: true })} />
                        <label htmlFor="signupPassword">Password</label>
                        <span
                            className="absolute right-2 top-4 text-white cursor-pointer" onClick={() => setIsShowPass(!isShowPass)}>{isShowPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}{" "}</span>
                        {errors.authPass && (<p className="text-red-500"> Password required</p>)}
                    </div>
                    {/* terms of services */}
                    <div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" name="terms" aria-describedby="terms" type="checkbox" {...register("terms", { required: true })} className="w-4 h-4" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="text-slate-300"> I agree to <Link href={"/terms"} className="link-hover link-primary">Privacy Policy</Link> and
                                        <Link href={"/terms"} className="link-hover link-primary"> Terms of Condition</Link>
                                    </label>
                                </div>
                            </div>
                        </div>
                        {errors.terms && (<p className="text-red-500"> You need to checked terms & condition!</p>)}
                    </div>
                    {error && <p className="text-red-500">*{error}</p>}
                    {success && <p className="text-green-500">{success}</p>}

                    <button className='authBtn w-full' type='submit'>Signup</button>

                    {/* or login with */}
                    <div className="flex items-center my-2">
                        <hr className="flex-grow" />
                        <span className="mx-2 text-slate-300">Or login with</span>
                        <hr className="flex-grow" />
                    </div>
                    <button className="authBtn w-full flex items-center justify-center"><FaGoogle className="mr-2"></FaGoogle> Continue with Google</button>
                    <button className="authBtn w-full flex items-center justify-center"><FaApple className="mr-2"></FaApple> Continue with Apple</button>
                    <p className="text-sm font-light text-slate-300 text-center"> Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Log in</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Signup;