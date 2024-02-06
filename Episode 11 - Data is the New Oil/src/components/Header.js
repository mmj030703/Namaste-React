import APP_LOGO_IMAGE_URL from '../utils/constants';
import { useState, useContext } from 'react';
// Link is a component given by react router dom to link to different pages. It is like anchor tag but it does not reloads the whole page instead only the routed component is loaded.
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import CartContext from '../utils/CartContext';

const Header = () => {
    // Normal JS Variable
    // let loginBtnValue = 'Login'; 

    // Powerfull React Local State Variable
    const [loginBtnValue, setLoginBtnValue] = useState('Login');

    //* Consuming the Context Data
    const { loggedInUsername } = useContext(UserContext);
    const { noOfItems } = useContext(CartContext);

    const onlineStatus = useOnlineStatus();

    return (
        <header className='flex justify-between items-center px-4 py-2 shadow-[1px_1px_5px_#515151]'>
            <div className='logo-container'>
                <Link to="/" className='flex items-center gap-x-2'>
                    <img className='w-[75px]' alt='Logo Image' src={APP_LOGO_IMAGE_URL} />
                    <h3 className='font-bold text-2xl'>NamasteFood</h3>
                </Link>
            </div>
            <nav>
                <ul className='flex gap-x-4 text-lg'>
                    <li className='px-3 py-2'>Active: {(onlineStatus === false) ? '🔴' : '🟢'}</li>
                    <li className='hover:bg-gray-200 px-3 py-2 cursor-pointer'><Link to="/">Home</Link></li>
                    <li className='hover:bg-gray-200 px-3 py-2 cursor-pointer'><Link to="/about">About</Link></li>
                    <li className='hover:bg-gray-200 px-3 py-2 cursor-pointer'><Link to="/contact">Contact</Link></li>
                    <li className='hover:bg-gray-200 px-3 py-2 cursor-pointer'><Link to="/grocery">Grocery</Link></li>
                    <li className='hover:bg-gray-200 px-3 py-2 cursor-pointer'><i className="fa-solid fa-cart-shopping"><span className='font-mono text-2xl'>{noOfItems}</span></i></li>
                    <li className='login hover:bg-gray-200 px-3 py-2 cursor-pointer'
                        onClick={() => {
                            loginBtnValue === 'Login' ? setLoginBtnValue('Logout') : setLoginBtnValue('Login');
                        }}
                    >
                        <Link to="/login">
                            <button>
                                {loginBtnValue}
                            </button>
                        </Link>
                    </li>
                    <li className='hover:bg-gray-200 px-3 py-2 cursor-pointer font-bold'>{loggedInUsername}</li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;