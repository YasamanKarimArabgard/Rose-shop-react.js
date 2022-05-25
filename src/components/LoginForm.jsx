import { useState, useEffect } from "react";
import Input from "../common/Input/Input";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import LoginUser from '../services/LoginServices';
import { useAuthActions, useAuth } from '../context/AuthProvider';

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
        if (auth) navigate('/checkout')
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
        <main className="loginForm_container col-12 col-md-10 d-flex flex-column align-items-center mt-3">
            <h5>Login Form</h5>
            <form onSubmit={formik.handleSubmit} className='loginForm_controls col-11 col-md-8 border rounded p-1 mt-1 bg-white'>
                <Input formik={formik} name='email' label='email' type="email" />
                <Input
                    formik={formik}
                    name='password'
                    label='password'
                    type='password' />
                {error && <p className="text-danger">{error}</p>}
                <button type="submit" className="login-submit-btn col-12 btn btn-sm btn-primary my-1" disabled={!formik.isValid}>login</button>
                <p className="login-info text-info m-1">din't you have an account ? <Link to={`/signup?redirect=${redirect}`}>Siginup</Link></p>
            </form>
        </main>
    );
};

export default Login;