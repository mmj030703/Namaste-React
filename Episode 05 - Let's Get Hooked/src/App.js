////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* ------------------------------------------------ Be Curious - By Akshay Saini Bhaiya -----------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//& Food Ordering App

import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.querySelector('.root'));

//* Whenever a State Variable updates, react will re-render my component.

const AppLayout = () => (
    <div className='app-layout'>
        <Header />
        <Body />
        <Footer />
    </div>
);

root.render(<AppLayout />);