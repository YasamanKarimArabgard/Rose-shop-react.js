import AboutUsPage from "../Pages/AboutUsPage"
import Cart from "../Pages/Cart/Cart"
import CheckoutPage from "../Pages/CheckoutPage"
import HomePage from "../Pages/HomePage"
import LoginPage from "../Pages/LoginPage"
import NotFoundPage from "../Pages/NotFoundPage"
import ProductsPage from "../Pages/ProductsPage"
import ProfilePage from "../Pages/ProfilePage"
import SignupPage from "../Pages/SignupPage"


const route = [
    { path: '/', element: <HomePage /> },
    { path: '/cart', element: <Cart /> },
    { path: '/checkout', element: <CheckoutPage /> },
    { path: '/signup', element: <SignupPage /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/dresses', element: <ProductsPage /> },
    { path: '/dresses/:id', element: <HomePage /> },
    { path: '/profile', element: <ProfilePage /> },
    { path: '/about-us', element: <AboutUsPage /> },
    { path: '/*', element: <NotFoundPage /> },

]

export default route;