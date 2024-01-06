////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* ------------------------------------------------ Be Curious - By Akshay Saini Bhaiya -----------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.querySelector('.root'));

//* In JSX, We can atrributes name in camelCase.
// const heading = <h1 className='head'>Heading 1</h1>;

// const heading = (<h1 className='head'>Heading 1</h1>);

//? React Element
//* Inside () it is a JSX Code which is converted to a React Element by Babel package in the node_modules. So we can say that is a normal React Element.   
//* If we have more than one line of code than we wrap JSX into ()
/*
const nav = (
    <nav>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
);

root.render(nav);
*/

//? Components => 1) Class Based Component 2) Functional Component
//* Component name's first letter is always Capital i.e. it should be in Pascal Case i.e ComponentName
//* We will see Class Based Component afterwards in this course as it is not used in Modern React Development.
//* Functional Components are Latest and preferred way writing components in Modern React Development.

//? Functional Component :: It is a normal JS function which return a piece of JSX or a React Element.

//* Multiple Ways of writing Functional Component
//& Way 1
/*
const HeadingComponent = () => {
    return <h1 className='head'>1st way of creating Functional Component in React.</h1>
};
*/

//& Way 2
/*
const HeadingComponent = () => <h1 className='head'>2nd way of creating Functional Component in React.</h1>;
*/

//& Way 3
/*
const HeadingComponent = () => (<h1 className='head'>3rd way of creating Functional Component in React.</h1>);
*/

//& Way 4
const HeadingComponent = () => (
    <h1 className='head'>4th way of creating Functional Component in React.</h1>
);

//* We can also use normal function keyword to make Functional Components.
/*
const HeadingComponent1 = function () {
    return <h1 className='head'>5th way of creating Functional Component in React.</h1>
};
*/

//* How to put any Component inside another Component. This process of puting one component inside another is called Component Composition. 
/*
const ContainerComponent = () => (
    <div>
        <HeadingComponent/>
        <h2 className='head2'>Inside h2 tag of Container Component.</h2>
    </div>
);
*/

//* To write anty piece of JS Code we can write it inside {}. 
const number = 100;

const listElement = <li>Testinomial {number} </li>;

//* To put React Element inside a React Component we {} and inside these we can write variable name of React Element. 

// React Component
const Navbar = () => (
    <nav>
        <ul>
            <li>Home {number}</li>
            <li>About Us</li>
            <li>Contact</li>
            {listElement}
        </ul>
    </nav>
);


//* We can put any stuff anywhere like element inside component, component inside component, element inside element, component inside element.
//& Putting Element inside element
const spanElement = <span>Span Element</span>;   
const heroHeadingElement = <h1>Hello World {spanElement}</h1>;

//& Putting Component inside Element
const SpanComponent = () => (
    <span>Span inside Container</span>
);

//* We can put component in different ways 
const containerElement = (
    <div>
        <SpanComponent/>
        <SpanComponent></SpanComponent>
        {SpanComponent()}
    </div>
);


//* JSX Can prevent Cross Site Scripting Attacks by sanitizing the data inserted in the {} so developer can freely write code without thinking about these threats of XSS Attacks  


//* For rendering components we can pass it like this <Component/>, <Component></Component>, Component()  
// root.render(<ContainerComponent/>);
// root.render(<Navbar/>);
// root.render(<Navbar></Navbar>);
// root.render(Navbar());
// root.render(heroHeadingElement);
root.render(containerElement);