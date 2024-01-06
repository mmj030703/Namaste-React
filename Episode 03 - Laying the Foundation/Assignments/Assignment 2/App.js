import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector('.root'));

//& Question
//& Create a Header Component from scratch using Functional Components with JSX

//& Tasks
/*
?  ○ Add a Logo on left
?  ○ Add a search bar in middle
?  ○ Add User icon on right
?  ○ Add CSS to make it look nice
*/

const Logo = () => (
    <img className="logo" src="https://www.adobe.com/express/learn/blog/media_1d655233eb376c5272e418b6de9c75bd7610aa558.png?width=750&format=png&optimize=medium" />
);

const SearchBar = () => (
    <input type="text" className="input" placeholder="Search your Blog" />
);

const UserIcon = () => (
    <img className="user-icon" src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7915728/user-icon-md.png" />
);

const HeaderComponent = () => (
    <header>
        <Logo/>
        <SearchBar/>
        <UserIcon/>
    </header>
);

root.render(<HeaderComponent/>);