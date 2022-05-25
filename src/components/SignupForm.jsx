import { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuthActions, useAuth } from "../context/AuthProvider";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Input from '../common/Input/Input';
import signupPost from '../services/SignupServices';

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
        .min(4, 'Name lenght is not valid'),
    email: Yup.string()
        .required('Email is required'),
    phoneNumber: Yup.string()
        .required('phoneNumber is required')
        .matches(/^[0-9]{11}$/, 'Phonenumber is not valid')
        .nullable(),
    password: Yup.string()
        .required('Password is requires'),
    // .matches(/^(?=.*[A-Za-z])(P=.*\d)(?=.*[@$!%#?&])LA-Za-z\d@$!%*#?&]{8,J}$/
    //     , 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Char'),
    passwordConfirm: Yup.string()
        .required('password confiramtion is required')
        .oneOf([Yup.ref('password'), null], 'password must match')
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
        <main className='SignupForm_container col-12 col-md-10 d-flex flex-column align-items-center mt-3'>
            <h5>Signup Form</h5>
            <form onSubmit={formik.handleSubmit} className='singupForm col-11 col-md-8 border rounded p-1 mt-1 bg-white'>
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
                <button type='submit' className='signupSubmit-btn col-12 btn btn-sm btn-primary my-1' disabled={!formik.isValid}>Signup</button>
                {error && <p className='text-danger'>{error}</p>}
                <p className='signup-info text-info m-1'>already have an account ? <Link to={`/login?redirect=${redirect}`}>login</Link></p>
            </form>
        </main>
    );
};

export default Signup;
