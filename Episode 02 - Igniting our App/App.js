////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* ------------------------------------------------ Be Curious - By Akshay Saini Bhaiya -----------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import ReactDOM from 'react-dom/client'

const parent = React.createElement(
    'div',
    {
        class: "parent"
    },
    [
        React.createElement(
            'div',
            {
                className: "child1" 
            },
            [
                React.createElement('h1', {}, "This is 1st child."),
                React.createElement('h2', {}, "This is 2nd child.")
            ]
        ),
        React.createElement(
            'div',
            {
                className: "child2" 
            },
            [
                React.createElement('h1', {}, "This is child2 h1 tag."),
                React.createElement('h2', {}, "This is child2 h2 tag.")
            ]
        ),
    ]
);

console.log(parent);

const root = ReactDOM.createRoot(document.querySelector('.root'));

root.render(parent);
