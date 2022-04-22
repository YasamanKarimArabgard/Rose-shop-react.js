import Input from "../common/Input/Input";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginUser from '../services/LoginServices'

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

    const navigate = useNavigate();

    const onSubmit = async (values) => {

        try {
            const { data } = await LoginUser(values);
            console.log(data);
            setError(null)
            navigate('/')
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
        <main className="main_container col-10 d-flex flex-column align-items-center mt-5">
            <h5>Login Form</h5>
            <form onSubmit={formik.handleSubmit} className='form_container col-8 border rounded p-1 mt-1 bg-white'>
                <Input formik={formik} name='email' label='email' type="email" />
                <Input
                    formik={formik}
                    name='password'
                    label='password'
                    type='password' />
                {error && <p className="text-danger">{error}</p>}
                <button type="submit" className="submit-btn col-3 btn btn-sm btn-primary my-1" disabled={!formik.isValid}>login</button>
                <p className="text-info m-1">haven't an account ? <Link to='/signup'>Siginup</Link></p>
            </form>
        </main>
    );
};

export default Login;