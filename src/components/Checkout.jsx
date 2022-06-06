import { useAuth } from "../context/AuthProvider";
import { Button, Divider, Typography } from "@mui/material";
import { useCart } from '../context/CartProvider'
import { useNavigate } from "react-router-dom";

const Checkout = () => {

    const { cart, total } = useCart();

    const Auth = useAuth();
    const navigate = useNavigate()

    return (
        <main className="checkout_container col-11 d-flex flex-wrap flex-md-nowrap justify-content-between mt-3">
            {Auth && cart.length > 0 ? <>
                <section className="checkout_customer-information col-12 col-md-9 bg-white p-2 m-1 d-flex flex-column align-items-center rounded border order-2 order-md-1">
                    <div className="customer_information col-12 col-md-11 d-flex flex-column">
                        <h6>Customer informations</h6>
                        <Divider />
                        <div className="col-12 mt-3">
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
                    <div className="checkout-submit-button col-12 d-flex justify-content-center align-items-center">
                        <Button variant="outlined" sx={{ mr: 1 }} onClick={() => navigate('/cart')}>Back</Button>
                        <Button type="submit" variant="contained" color="secondary" sx={{ width: '50%', my: 1 }} onClick={() => navigate('/')} disableElevation>purches</Button>
                    </div>
                </section>
                <section className="order col-12 col-md-3 bg-white p-2 m-1 rounded border order-1 order-md-2">
                    <h6>Order summery</h6>
                    <Divider />
                    <div className="col-12 col-md-12">
                        <ul className="order-list list-group list-group-flush col-12 col-md-12 mb-2 mx-2">
                            {cart.map(item => (
                                <li className="order_item list-group-item col-12 d-flex align-items-center justify-content-between" key={item.id}>
                                    <p className="col-6 text-secondary">{item.name}</p>
                                    <p className="col-2 text-secondary">✕{item.quantity}</p>
                                    <p className="col-3 text-secondary text-end">${item.quantity * item.price}</p>
                                </li>
                            ))}
                        </ul>
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
            </> : <main className="col-12 col-md-12 d-flex flex-column align-items-center">
                <h5 className='mt-5 my-4 text-danger text-center'>You are not in your account or <br /> Your cart is empty </h5>
                <Button variant="outlined" sx={{ mr: 1, width: '25%' }} onClick={() => navigate('/')}>Back</Button>
            </main>
            }
        </main>
    );
};

export default Checkout;