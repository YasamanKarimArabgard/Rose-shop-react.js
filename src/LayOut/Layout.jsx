import Navigation from "../components/Navigation";

const Layout = ({ children }) => {
    return (
        <div className="col-12">
            <Navigation />
            {children}
        </div>
    );
};

export default Layout;