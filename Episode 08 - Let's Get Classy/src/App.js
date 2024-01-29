////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* ------------------------------------------------ Be Curious - By Akshay Saini Bhaiya -----------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//& Food Ordering App

import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Error from './components/Error';
import RestaurantPage from './components/RestaurantPage';
import { createBrowserRouter, RouterProvider, Outlet } from '../node_modules/react-router-dom'

const root = ReactDOM.createRoot(document.querySelector('.root'));

//* Whenever a State Variable updates, react will re-render my component.

const AppLayout = () => (
    <div className='app-layout'>
        <Header />
        {/* Child Routes Components will render here the Header & Component remains intact */}
        <Outlet/>
        <Footer />
    </div>
);

const appRouter = createBrowserRouter([
    // Creating Routes
    {
        path: '/',
        element: <AppLayout />,
        //& Providing Child Routes 
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },   
            {
                path: '/login',
                element: <Login />
            },         
            {
                path: '/restaurant/:resId',
                element: <RestaurantPage />
            }            
        ],
        errorElement: <Error />
    },
    //& Other Routes
    /*
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    }
    */
]);

root.render(<RouterProvider router={appRouter} />);