import { useAuth } from "../context/AuthProvider";
import { Button, Divider, Typography } from "@mui/material";
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
        <main className="checkout_container col-11 d-flex flex-wrap flex-md-nowrap justify-content-between mt-3">
            {Auth ? <>
                <section className="checkout_customer-information col-12 col-md-9 bg-white p-2 m-1 d-flex flex-column align-items-center rounded border order-2 order-md-1">
                    <div className="customer_information col-12 col-md-11 d-flex flex-column">
                        <h6>Customer informations</h6>
                        <Divider />
                        <div className="col-12 mt-2">
                            <div className="col-12 d-flex">
                                <p className="text-secondary mx-2">Name :</p>
                                <p>{Auth.name}</p>
                            </div>
                            <div className="col-12 d-flex">
                                <p className="text-secondary mx-2">Mail :</p>
                                <p>{Auth.email}</p>
                            </div><div className="col-12 d-flex">
                                <p className="text-secondary mx-2">phone number :</p>
                                <p>{Auth.phoneNumber}</p>
                            </div>
                        </div>
                    </div>
                    <div className="customer_information-payment col-12 col-md-11 mt-2">
                        <h6>Payment details</h6>
                        <Divider />
                        <form
                            onSubmit={formik.handleSubmit}
                            className='form_container p-1 bg-white mt-1'>
                            <Input
                                formik={formik}
                                name='address'
                                label='Your address'
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
                            <Button variant="outlined" sx={{ mr: 1 }} onClick={() => navigate('/cart')}>Back</Button>
                            <Button type="submit" variant="contained" color="secondary" sx={{ width: '50%', my: 1 }} disableElevation>purches</Button>
                        </form>
                    </div>
                </section>
                <section className="order col-12 col-md-3 bg-white p-2 m-1 rounded border order-1 order-md-2">
                    <h6>Order summery</h6>
                    <Divider />
                    <div className="col-12 col-md-12">
                        {cart.map(item => (
                            <ul class="order-list list-group list-group-flush col-12 col-md-12 mb-2 mx-2">
                                <li class="order_item list-group-item col-12 d-flex align-items-center justify-content-between" key={item.id}>
                                    <p className="col-2 text-secondary">✕{item.quantity}</p>
                                    <p className="col-6 text-secondary">{item.name}</p>
                                    <p className="col-3 text-secondary text-end">${item.quantity * item.price}</p>
                                </li>
                            </ul>
                        ))}
                    </div>
                    <Divider />
                    <div className="col-12 d-flex justify-content-between m-2">
                        <Typography>Order total :</Typography>
                        <Typography sx={{ mr: 2 }}>${total}</Typography>
                    </div>
                    <Divider />
                    <div className="col-12">
                        <form className="col-12 d-flex justify-content-between my-1">
                            <input placeholder="Coupen code" className="col-8 w-75 form-control shadow-none" />
                            <Button variant="outlined" size="small" disableElevation>submit</Button>
                        </form>
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