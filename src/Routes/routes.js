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
    { id: 1, path: '/', element: <HomePage /> },
    { id: 2, path: '/cart', element: <Cart /> },
    { id: 3, path: '/checkout', element: <CheckoutPage /> },
    { id: 4, path: '/signup', element: <SignupPage /> },
    { id: 5, path: '/login', element: <LoginPage /> },
    { id: 6, path: '/dresses', element: <ProductsPage /> },
    { id: 7, path: '/dresses/:id', element: <HomePage /> },
    { id: 8, path: '/profile', element: <ProfilePage /> },
    { id: 9, path: '/about-us', element: <AboutUsPage /> },
    { id: 10, path: '/*', element: <NotFoundPage /> },

]

export default route;