import { useState, useEffect } from "react";
import Input from "../common/Input/Input";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import LoginUser from '../services/LoginServices';
import { useAuthActions, useAuth } from '../context/AuthProvider';
import signupImg from '../assets/images/signin.png';

const initialValues = {
    email: '',
    password: '',
}

const validationSchema = Yup.object({
    email: Yup.string()
        .required('Email is required'),
    password: Yup.string()
        .required('Password is requires')
})

const Login = () => {

    const [error, setError] = useState(null);
    const [searchParams] = useSearchParams();

    const navigate = useNavigate();
    const setAuth = useAuthActions();
    const auth = useAuth();
    const redirect = searchParams.get('redirect') || '';

    useEffect(() => {
        if (auth) navigate('/checkout');
    }, [redirect, auth])

    const onSubmit = async (values) => {
        try {
            const { data } = await LoginUser(values);
            setAuth(data)
            setError(null)
            navigate('/' + redirect, { replace: true });
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
        <main className="loginForm col-span-10 col-start-2 row-start-4 min-h-screen">
            <main className="loginForm_container w-full bg-white rounded-md p-1 flex justify-between">
                <div className="login_information w-full md:w-2/3 flex flex-col justify-center items-center">
                    <h5 className="login-title text-2xl font-bold text-slate-800 my-2">Login Form</h5>
                    <div className="login_form_container  w-full h-fit rounded-lg p-3 flex justify-center items-center">
                        <form onSubmit={formik.handleSubmit} className='login_form w-full md:w-1/2'>
                            <Input
                                formik={formik}
                                name='email'
                                label='email'
                                type="email" />
                            <Input
                                formik={formik}
                                name='password'
                                label='password'
                                type='password' />
                            {error && <p className="text-danger">{error}</p>}
                            <button type="submit" className="login-submit-btn  py-3 mb-2 bg-purple-700 text-white w-full rounded-md cursor-pointer" disabled={!formik.isValid}>login</button>
                            <p className="login-info mt-2 text-slate-800">haven't an account ? <Link to={`/signup?redirect=${redirect}`} className="text-purple-500 underline">Siginup</Link></p>
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

export default Login;