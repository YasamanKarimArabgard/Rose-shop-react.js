import Navigation from "../components/Navigation";
import './Layout.css'

const Layout = ({ children }) => {
    return (
        <div className="layout col-12 bg-light">
            <Navigation />
              <main className="col-12 d-flex flex-column align-items-center my-2">
                  {children}
              </main>
        </div>
    );
};

export default Layout;