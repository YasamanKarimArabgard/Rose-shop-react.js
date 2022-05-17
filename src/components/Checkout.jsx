import { useAuth } from "../context/AuthProvider";
import { Button, Divider } from "@mui/material";
import Input from '../common/Input/Input';
import * as Yup from 'yup';
import { useFormik, validateYupSchema } from "formik";
import { useState } from "react";
import { useCart } from '../context/CartProvider'
import { useNavigate } from "react-router-dom";

const initialValues = {
    address: '',
    cartNumber: '',
    validThrough: '',
    cvcCode: ''
}

const validationSchema = Yup.object({
    address: Yup.string()
        .required('address is required'),
    cartNumber: Yup.string()
        .required('cart number is required')
        .matches(/^[0-9]{16}$/, 'cart number is not valid')
        .nullable(),
    validThrough: Yup.string()
        .required('valid through is required'),
    cvcCode: Yup.string()
        .required('cvc code is required')
        .matches(/^[0-9]{4}$/, 'cvc code is not valid')
        .nullable(),
})

const Checkout = () => {

    const [error, setError] = useState(null);
    const { cart, total } = useCart();

    const Auth = useAuth();
    const navigate = useNavigate()
    
    // console.log(cart);
    const onSubmit = () => {
        navigate('/')
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true
    });


    return (
        <main className="main_container col-11 d-flex flex-wrap flex-md-nowrap justify-content-between mt-3">
            {Auth ? <>
                <section className="col-12 col-md-8 bg-white p-2 m-1 d-flex flex-column align-items-center rounded border order-2 order-md-1">
                    <div className="col-12 col-md-11 d-flex flex-column">
                        <h6>Customer informations</h6>
                        <Divider />
                        <p>Name : {Auth.name}</p>
                        <p>Email : {Auth.email}</p>
                        <p>Phone number : {Auth.phoneNumber}</p>
                    </div>
                    <div className="col-12 col-md-11 mt-2">
                        <h6>Payment details</h6>
                        <Divider />
                        <form
                            onSubmit={formik.handleSubmit}
                            className='form_container p-1 bg-white'>
                            <Input
                                formik={formik}
                                name='address'
                                label='Address'
                                type="text"
                            />
                            <Input
                                formik={formik}
                                name='cartNumber'
                                label='Cart number'
                                type="text"
                            />
                            <div className="col-12 col-md-5 d-flex justify-content-between mt-1">
                                <Input
                                    formik={formik}
                                    name='validThrough'
                                    label='Valid through'
                                    type="date"
                                />
                                <Input
                                    className='mx-2'
                                    formik={formik}
                                    name='cvcCode'
                                    label='Cve code'
                                    type="text"
                                />
                            </div>
                            <Button type="submit" variant="contained" color="secondary" sx={{ width: '50%', my: 1 }}>purches</Button>
                        </form>
                    </div>
                </section>
                <section className="col-12 col-md-4 bg-white p-2 m-1 rounded border order-1 order-md-2">
                    <h6>Order</h6>
                    <Divider />
                    <div className="col-12 col-md-11">
                        {cart.map(item => (
                            <ul class="order-list list-group list-group-flush col-12 col-md-12 mb-2 mx-2">
                                <li class="order_item list-group-item col-12 d-flex align-items-center justify-content-between" key={item.id}>
                                    <img src={item.image} className='item-img'></img>
                                    <p>{item.name}</p>
                                    <p>{item.quantity}</p>
                                    <p>{total}</p>
                                </li>
                                <Divider />
                            </ul>
                        ))}
                    </div>
                </section>
            </> : <main className="col-12 col-md-12 d-flex justify-content-center">
                <h4 className='mt-5 text-secondary'>Please login :)</h4>
            </main>
            }
        </main>
    );
};

export default Checkout;