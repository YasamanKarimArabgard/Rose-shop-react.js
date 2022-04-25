import { useAuth } from "../context/AuthProvider";

const Checkout = () => {

    const Auth = useAuth();
    return (
        <main className="main_container col-10 d-flex flex-column align-items-center mt-5">
            { Auth ? 
                <section>
                    <p>{Auth.name}</p>
                    <p>{Auth.email}</p>
                    <p>{Auth.phoneNumber}</p>
                </section> : <p>please login</p>
            }
        </main>
    );
};

export default Checkout;