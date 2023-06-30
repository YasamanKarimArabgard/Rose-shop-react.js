import { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuthActions, useAuth } from "../context/AuthProvider";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Input from '../common/Input/Input';
import signupPost from '../services/SignupServices';
import signupImg from '../assets/images/signin.png';

const initialValues = {
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    passwordConfirm: ''
}


const validationSchema = Yup.object({
    name: Yup.string()
        .required('Name is required')
        .min(4, 'Name lenght is not valid.'),
    email: Yup.string()
        .required('Email is required.'),
    phoneNumber: Yup.string()
        .required('phoneNumber is required.')
        .matches(/^[0-9]{11}$/, 'Phonenumber is not valid.')
        .nullable(),
    password: Yup.string()
        .required('Password is required.')
        // .matches(/^(?=.*[A-Za-z])(P=.*\d)(?=.*[@$!%#?&])LA-Za-z\d@$!%*#?&]{8,J}$/
        //     , 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Char.'),
    ,passwordConfirm: Yup.string()
        .required('password confiramtion is required.')
        .oneOf([Yup.ref('password'), null], 'password must match.')
})

const Signup = () => {

    const [error, setError] = useState(null);
    const [searchParams] = useSearchParams();

    const navigate = useNavigate();
    const setAuth = useAuthActions()
    const auth = useAuth();
    const redirect = searchParams.get('redirect') || '';

    useEffect(() => {
        if (auth) navigate('/checkout')
    }, [redirect, auth])

    const onSubmit = async (values) => {
        const { name, email, phoneNumber, password } = values;
        const userData = {
            name,
            email,
            phoneNumber,
            password
        }
        try {
            const { data } = await signupPost(userData);
            setAuth(data);
            setError(null)
            navigate('/' + redirect, { replace: true })
        } catch (error) {
            if (error.response && error.response.data.message) {
                setError(error.response.data.message)
            }
        }
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true
    });

    return (
        <main className='SignupForm col-span-10 col-start-2 row-start-4 md:row-start-5 min-h-screen max-w-screen-2xl'>
            <main className='SignupForm_container w-full bg-white h-fit flex justify-between rounded-lg shadow-xs p-1'>
                <div className='siginup_info w-full md:w-2/3 flex flex-col justify-center items-center'>
                    <h5 className='signup-title text-2xl font-bold text-slate-800 my-2'>Signup Form</h5>
                    <div className='signup_form_container w-full h-fit rounded-lg p-3 flex justify-center items-center'>
                        <form onSubmit={formik.handleSubmit} className='singup_form w-full md:w-1/2'>
                            <Input formik={formik} name='name' label='name' />
                            <Input formik={formik} name='email' label='email' type='email' />
                            <Input formik={formik} name='phoneNumber' label='phone number' type='tel' />
                            <Input
                                formik={formik}
                                name='password'
                                label='password'
                                type='password' />
                            <Input
                                formik={formik}
                                name='passwordConfirm'
                                label='password confirmation'
                                type='password' />
                            <button type='submit' className='signupSubmit-btn py-3 mb-2 bg-purple-700 text-white w-full rounded-md cursor-pointer' disabled={!formik.isValid}>Sign up</button>
                            {error && <p className='text-danger'>{error}</p>}
                            <p className='signup-info mt-2 text-slate-800'>already have an account ? <Link to={`/login?redirect=${redirect}`} className='text-purple-500 underline'>login</Link></p>
                        </form>
                    </div>
                </div>
                <div className='hidden signUpImg_container w-1/3 md:flex justify-center items-center bg-purple-100 rounded-lg rounded-bl-3xl'>
                    <img className='signup-img w-1/2 h-auto' src={signupImg} alt='sign up form' />
                </div>
            </main>
        </main>
    );
};

export default Signup;
