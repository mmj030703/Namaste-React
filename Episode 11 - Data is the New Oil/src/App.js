////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* ------------------------------------------------ Be Curious - By Akshay Saini Bhaiya -----------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//& Food Ordering App

import React, { lazy, Suspense, useEffect, useState } from 'react';
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
// import Grocery from './components/Grocery';        //* We will not import Grocery this way we will do it using lazy so that separate bundle of it is created
import UserContext from './utils/UserContext';
import CartContext from './utils/CartContext';

//* For making the app performant and fast we use Lazy Loading Mechanism by using lazy function & Suspense Component
const Grocery = lazy(() => import('./components/Grocery'));

const root = ReactDOM.createRoot(document.querySelector('.root'));

//* Whenever a State Variable updates, react will re-render my component.

const AppLayout = () => {

    const [username, setUsername] = useState('Default');

    // User Authentication Code....
    useEffect(() => {
        // Fetching User Data....
        setUsername('Sachin Tendulkar');
    }, []);

    return (
        <CartContext.Provider value={{noOfItems: 5}}>
            <UserContext.Provider value={{ loggedInUsername: username, surname: 'Jain' }}>
                <div className='app-layout'>
                    <Header />
                    {/* Child Routes Components will render here the Header & Component remains intact */}
                    <UserContext.Provider value={{ loggedInUsername: username, setUsername }}>
                        <Outlet />
                    </UserContext.Provider>
                    <Footer />
                </div>
            </UserContext.Provider>
        </CartContext.Provider>
    );
}

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
                path: '/grocery',
                element: (
                    <Suspense fallback={<h1>Loading....</h1>}>
                        <Grocery />
                    </Suspense>
                )
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