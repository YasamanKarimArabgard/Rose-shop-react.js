import Home from "../components/Home";
import Layout from "../LayOut/Layout";


const HomePage = () => {

    return (
        <Layout>
            <main className="col-12 d-flex justify-content-center">
                <Home/>
            </main>
        </Layout>
    );
};

export default HomePage;