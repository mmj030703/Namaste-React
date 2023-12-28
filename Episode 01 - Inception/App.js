////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* ------------------------------------------------ Be Curious - By Akshay Saini Bhaiya -----------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
& React
&   - It is a library.  
&   - It can be used in any big or small portion of our webpage
&   - It can be used either by including the CDN links of React in the project or by installing react in your project.
&   - It can be used in existing projects even if there are other libraries used in that app like jquery, etc.
&   - Used to create production ready applications.
/*

/*
 &  CDN Files React & ReactDOM
 &  React 
 &      - It is used for building reusable UI Components & manage their states, etc. 
 &  
 &  ReactDOM
 &      - It is used for rendering the react elements (components) into the Browser DOM.
 &      - It complements React by facilitating the interaction between React's Virtual DOM and the browser's actual DOM, enabling efficient rendering and updates of React components.
 & 
*/

//* Creating a H1 tag using React => using createElement;
/*
React.createElement(
    arg1, //? name of tag to be created
    arg2, //? object for setting atrributes like id, classes, custom attributes like data-person-id
    arg3  //? pass ReactElement or array of ReactElement :: for setting child or array of childs like textnode, any child element. 
);
*/ 

/*
const heading = React.createElement(                       //& This heading here is an object(ReactElement) :: It is virtual representation of what should be rendered. 
    'h1',                                                  //& Which is converted while rendering into the element or html structure which browser understands
    {                                                      //& Then it is painted on the webpage.
        className: "heading head-1",
        title: "Heading",
        "data-head-id": 10 
    }, 
    "Hello World from React using External File."
);
const root = ReactDOM.createRoot(document.querySelector('.root'));

root.render(heading);           //? When we render the element inside the root it will replace the existing elements.

*/


// ----------------------------------------------------------------------------------------------------------------------
//* Creating a nested structure using React => using createElement;
/**
 *   <div class="parent">
 *      <h1>This is a nested structure.</h1>
 *   </div>
*/

/*
const parent = React.createElement(
    'div',
    {
        class: "parent"
    },
    React.createElement('h1', {}, "This is a nested structure.")
);

const root = ReactDOM.createRoot(document.querySelector('.root'));

root.render(parent);
*/
// ----------------------------------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------------------------------
//* Creating a nested structure with siblings using React => using createElement;
/**
 *   <div class="parent">
 *      <h1>This is h1 tag.</h1>
 *      <h2>This is h2 tag.</h2>
 *   </div>
*/

/*
const parent = React.createElement(
    'div',
    {
        class: "parent"
    },
    [
        React.createElement('h1', {}, "This is h1 tag."),      // sibling 1
        React.createElement('h2', {}, "This is h2 tag.")       // sibling 2
    ]
);

const root = ReactDOM.createRoot(document.querySelector('.root'));

root.render(parent);
*/
// ----------------------------------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------------------------------
//* Creating a nested structure (more complex) using React => using createElement;
/**
 *   <div class="parent">
 *      <div class="child1">
 *          <h1>This is child1 h1 tag.</h1>
 *          <h2>This is child1 h2 tag.</h2>
 *      </div>
 *      <div class="child2">
 *          <h1>This is child2 h1 tag.</h1>
 *          <h2>This is child2 h2 tag.</h2>
 *      </div>
 *   </div>
*/

/*
const parent = React.createElement(
    'div',
    {
        class: "parent"
    },
    [
        React.createElement(
            'div',
            {
                class: "child1" 
            },
            [
                React.createElement('h1', {}, "This is child1 h1 tag."),
                React.createElement('h2', {}, "This is child1 h2 tag.")
            ]
        ),
        React.createElement(
            'div',
            {
                class: "child2" 
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
*/
// ----------------------------------------------------------------------------------------------------------------------