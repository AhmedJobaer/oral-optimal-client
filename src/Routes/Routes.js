import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ServiceDetail from "../Pages/Home/Services/ServiceDetail";
import Services from "../Pages/Home/Services/Services";
import Login from "../Pages/Login/Login";
import Review from "../Pages/Review/Review";
import Register from "../Register/Register";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/serviceDetail/:id',
                element: <ServiceDetail></ServiceDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/serviceDetail/${params.id}`)
            },
            {
                path: '/addReview/:id',
                element: <Review></Review>,
                loader: ({ params }) => fetch(`http://localhost:5000/serviceDetail/${params.id}`)

            }
        ]
    }
]);

export default router;