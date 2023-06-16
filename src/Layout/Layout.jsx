import Footer from "../components/Footer";
import Naviagation from "../components/Navigation/Naviagation";

const Layout = ({ children }) => {
    return (
        <div className="layout_container col-span-12 bg-purple-50 max-h-screen h-auto">
            <Naviagation/>
            <main className="main-layout col-span-12 min-h-screen h-auto">
                    {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;







