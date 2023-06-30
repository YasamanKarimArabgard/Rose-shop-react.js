import Footer from "../components/Footer";
import Naviagation from "../components/Navigation/Naviagation";

const Layout = ({ children }) => {
    return (
        <div className="layout_container bg-purple-50 h-auto min-h-screen flex flex-col items-center">
            <Naviagation/>
            <main className="main-layout grid grid-cols-12 md:grid-rows-[55px-minmax(500px, _1fr)] gap-8 max-w-screen-2xl min-h-screen w-screen">
                    {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;







