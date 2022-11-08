import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ServiceDetail from "../Pages/Home/Services/ServiceDetail";
import Services from "../Pages/Home/Services/Services";

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
                path: '/serviceDetail/:id',
                element: <ServiceDetail></ServiceDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/serviceDetail/${params.id}`)
            }
        ]
    }
]);

export default router;