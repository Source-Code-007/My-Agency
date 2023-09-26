import '../auth.css'
import logo1 from '../../../assets/logo-1.png'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaApple, FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import signinLoadingLottie from '/public/assets/assets/lottie/successfully-registration-lottie.json'
import signinLottie from '/public/assets/assets/lottie/signin-lottie.json'
import Lottie from 'lottie-react';


const Login = () => {
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
    const handleSigninFunc = (form) => {
        setLoading(true);
        setError('')
        setSuccess('')
        const { signinEmail, signinPass } = form;

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(signinEmail)) {
            setError(
                "Please provide valid email!"
            );
            setLoading(false)
            return;
        }

        setLoading(false)
        console.log(signinEmail, signinPass);
    }

    return (
        <div className="grid grid-cols-12 min-h-screen bg-dark-1 p-5 md:p-10 lg:pt-24">
            <div className="hidden md:flex md:col-span-6 lg:col-span-7 items-center justify-center">
                <Lottie
                    animationData={loading ? signinLoadingLottie : signinLottie}
                    loop={true}
                    className="h-5/6 lg:h-[75%] w-5/6 lg:w-[75%] mx-auto"
                />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-5 py-6 px-4">
                <form className='space-y-5 md:space-y-7 px-4 pt-0 md:pt-8 lg:pt-14' onSubmit={handleSubmit(handleSigninFunc)}>
                    <h2> <Link to={'/'}><img src={logo1} alt="" /></Link></h2>
                    <h2 className='my-subtitle text-white'> Login to your account</h2>


                    <div className="form-item">
                        <input type="text" id="signinEmail" className='authInp' {...register("signinEmail", { required: true })} />
                        <label htmlFor="signinEmail">Email</label>
                        {errors.signinEmail && (<p className="text-red-500"> Email required</p>)}
                    </div>
                    <div className="form-item relative">
                        <input type={`${isShowPass ? "text" : "password"}`} id="signinPass" className='authInp' {...register("signinPass", { required: true })} />
                        <label htmlFor="signinPass">Password</label>
                        <span
                            className="absolute right-2 top-4 text-white cursor-pointer" onClick={() => setIsShowPass(!isShowPass)}>{isShowPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}{" "}</span>
                        {errors.signinPass && (<p className="text-red-500"> Password required</p>)}
                    </div>

                    {/* Remember me and forget password */}
                    <div className='flex gap-3 flex-col md:flex-row justify-between'>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" name="terms" aria-describedby="terms" type="checkbox" {...register("signinRememberMe")} className="w-4 h-4" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="text-slate-300"> Remember me </label>
                                </div>
                            </div>
                        </div>
                        <div className='text-slate-300'><Link to={'/reset-password'} className='hover:underline'>Forgot Password</Link></div>
                    </div>

                    {error && <p className="text-red-500">*{error}</p>}
                    {success && <p className="text-green-500">{success}</p>}

                    <button className='authBtn w-full' type='submit'>Sign in</button>

                    {/* or login with */}
                    <div className="flex items-center my-2">
                        <hr className="flex-grow" />
                        <span className="mx-2 text-slate-300">Or login with</span>
                        <hr className="flex-grow" />
                    </div>
                    <button className="authBtn w-full flex items-center justify-center"><FaGoogle className="mr-2"></FaGoogle> Continue with Google</button>
                    <button className="authBtn w-full flex items-center justify-center"><FaApple className="mr-2"></FaApple> Continue with Apple</button>
                    <p className="text-sm font-light text-slate-300 text-center"> Don{"'"}t have an account? <Link to="/sign-up" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Signup</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;