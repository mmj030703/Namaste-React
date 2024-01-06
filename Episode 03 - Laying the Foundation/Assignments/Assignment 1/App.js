import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector('.root'));

//& Create a Nested header Element using React.createElement(h1,h2,h3 inside a
//& div with class “title”)

// Way 1
/*
const title = React.createElement(
    'div', 
    {
        className: "title"
    },
    React.createElement('h1', {}, "Heading 1"), 
    React.createElement('h2', {}, "Heading 2"), 
    React.createElement('h3', {}, "Heading 3") 
);

*/ 

// Way 2
/*
const title = (
    <div className="title">
        <h1>Heading 1 using JSX</h1>      
        <h2>Heading 2 using JSX</h2>      
        <h3>Heading 3 using JSX</h3>      
    </div>
);
*/

const Heading = function() {
    return (
        <h1>Heading from Heading Component</h1>
    );
}

// Way 3
const TitleComponent = () => (
    <div className="title">
        <h1 className="head1" style={{color:'red'}}>Heading 1 using Component</h1>
        <h2 className="head2" style={{color:'red'}}>Heading 2 using Component</h2>
        <h3 className="head3" style={{color:'red'}}>Heading 3 using Component</h3>
        <Heading/>
    </div>
);



// root.render(title);
root.render(<TitleComponent></TitleComponent>);