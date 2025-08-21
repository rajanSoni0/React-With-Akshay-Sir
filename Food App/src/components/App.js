import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./About"
import Contact from "./Contact";
import RestaurantMenu from "./RestaurantMenu";


const Grocery = lazy(() => import("./Grocery"));
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path:"restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path:"/grocery",
                element: (
                <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
                )
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);