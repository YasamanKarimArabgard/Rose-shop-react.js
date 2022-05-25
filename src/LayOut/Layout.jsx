import Footer from "../components/Footer";
import Navigation from "../components/Navigation/Navigation"
import './Layout.css'

const Layout = ({ children }) => {
    return (
        <div className="layout_container col-12 bg-light d-flex flex-column">
            <Navigation />
            <main className="main-layout col-12 d-flex flex-column align-items-center">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;