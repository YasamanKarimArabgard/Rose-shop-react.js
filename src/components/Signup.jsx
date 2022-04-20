import { useFormik } from "formik";
import * as Yup from 'yup';
import Input from '../common/Input/Input';
import { Link } from "react-router-dom";


const initialValues = {
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    passwordConfirm: ''
}

const onSubmit = (Values) => {
    console.log(Values);
}

const validationSchema = Yup.object({
    name: Yup.string()
        .required('Name is required')
        .min(6, 'Name lenght is not valid'),
    email: Yup.string()
        .required('Email is required'),
    phoneNumber: Yup.string()
        .required('phoneNumber is required')
        .matches(/^[0-9]{11}$/, 'Phonenumber is not valid')
        .nullable(),
    password: Yup.string()
        .required('Password is requires')
        .matches(/^(?=.*[A-Za-z])(P=.*\d)(?=.*[@$!%#?&])LA-Za-z\d@$!%*#?&]{8,J}$/
            , 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Char'),
    passwordConfirm: Yup.string()
        .required('password confiramtion is required')
        .oneOf([Yup.ref('password'), null], 'password must match')
})

const Signup = () => {

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true
    });

    return (
        <main className="main_container col-10 d-flex flex-column align-items-center mt-5">
            <h5>Signup Form</h5>
            <form onSubmit={formik.handleSubmit} className='form_container col-8 border rounded p-1 mt-1 bg-white'>
                <Input formik={formik} name='name' label='name' />
                <Input formik={formik} name='email' label='email' type="email" />
                <Input formik={formik} name='phoneNumber' label='phone number' type="tel" />
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
                <button type="submit" className="submit-btn col-3 btn btn-sm btn-primary my-1" disabled={!formik.isValid}>Signup</button>
                <p className="text-info m-1">already have an account ? <Link to='/login'>login</Link></p>
            </form>
        </main>
    );
};

export default Signup;