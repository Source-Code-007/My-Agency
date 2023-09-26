import '../auth.css'
import logo1 from '/public/assets/img/logo.png'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import signinLoadingLottie from '/public/assets/lottie/registration_loading.json'
import verificationAuthLottie from '/public/assets/lottie/verification-auth.json'
import resetPassLottie from '/public/assets/lottie/reset-pass-lottie.json'
import Lottie from 'lottie-react';
import VerificationInput from 'react-verification-input';


const ResetPass = () => {
    const [resetEmailSuccess, setResetEmailSuccess] = useState('')
    const [resetEmailError, setResetEmailError] = useState('')
    const [verificationCodeSuccess, setVerificationCodeSuccess] = useState('')
    const [verificationCodeError, setVerificationCodeError] = useState('')
    const [loading, setLoading] = useState(false)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    // Handle reset pass func
    const handleResetPassFunc = (form) => {
        setLoading(true);
        setResetEmailError('')
        setResetEmailSuccess('')
        const { resetEmail } = form;

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(resetEmail)) {
            setResetEmailError(
                "Please provide valid email!"
            );
            setLoading(false)
            return;
        }

        setLoading(false)
        setResetEmailSuccess('Verification code sent')
        console.log(resetEmail);
    }
    // handle verification code func
    const handleVerificationCodeFunc = (form) => {
        console.log('Hello from verification code func');
    }

    return (
        <div className="grid grid-cols-12 min-h-screen bg-dark-1 p-5 md:p-10 lg:pt-24">
            <div className="hidden md:flex md:col-span-6 lg:col-span-7 justify-center">
                <Lottie
                    animationData={loading ? signinLoadingLottie : resetEmailSuccess ? verificationAuthLottie : resetPassLottie}
                    loop={true}
                    className="h-5/6 lg:h-[70%] w-5/6 lg:w-[70%] mx-auto"
                />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-5 py-6 px-4 flex items-center md:items-start">

                {!resetEmailSuccess ? <form className='space-y-5 md:space-y-7 px-4 pt-0 md:pt-8 lg:pt-32 md:pr-28 lg:pr-32' onSubmit={handleSubmit(handleResetPassFunc)}>
                <h2 className='flex items-center gap-3 my-subtitle text-white'> <Link to={'/'}><img src={logo1} className='h-10 w-10' alt="" /></Link> Agency</h2>
                    <h2 className='my-subtitle text-white'>Reset Your Password</h2>
                    <p className='text-slate-200 pr-10'>Enter the email address that you wish to reset the password for and we{"'"}ll send you an email with the instructions</p>

                    <div className="form-item">
                        <input type="text" id="resetEmail" className='authInp' {...register("resetEmail", { required: true })} />
                        <label htmlFor="resetEmail">Email address</label>
                        {errors.resetEmail && (<p className="text-red-500"> *Email required</p>)}
                    </div>

                    {resetEmailError && <p className="text-red-500">*{resetEmailError}</p>}
                    {resetEmailSuccess && <p className="text-green-500">{resetEmailSuccess}</p>}

                    <button className='authBtn w-full' type='submit'>Reset</button>

                </form> :
                    <form className='space-y-5 md:space-y-7 px-4 pt-0 md:pt-8 lg:pt-32 md:pr-28 lg:pr-32' onSubmit={handleSubmit(handleVerificationCodeFunc)}>
                        <h2> <Link to={'/'}><img src={logo1} alt="" /></Link></h2>
                        <h2 className='my-subtitle text-white'>Verification Code</h2>
                        <p className='text-slate-200 pr-10'>We sent a verification code to your email <span className='font-bold'>{watch('resetEmail')}</span>.  Enter the code from the email.</p>
                        <div className="">
                            <VerificationInput classNames={{
                                container: "container",
                                character: "bg-dark-3 text-slate-50",
                                characterInactive: "character--inactive",
                                characterSelected: "character--selected",
                            }} />
                        </div>

                        {verificationCodeError && <p className="text-red-500">*{verificationCodeError}</p>}
                        {verificationCodeSuccess && <p className="text-green-500">{verificationCodeSuccess}</p>}

                        <button className='authBtn w-full' type='submit'>Reset</button>

                    </form>}
            </div>
        </div>
    );
};

export default ResetPass;