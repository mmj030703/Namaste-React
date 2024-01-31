import APP_LOGO_IMAGE_URL from '../utils/constants';
import { useState, useEffect} from 'react';
// Link is a component given by react router dom to link to different pages. It is like anchor tag but it does not reloads the whole page instead only the routed component is loaded.
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
    // Normal JS Variable
    // let loginBtnValue = 'Login'; 

    // Powerfull React Local State Variable
    const [loginBtnValue, setLoginBtnValue] = useState('Login');
    const onlineStatus = useOnlineStatus();

    return (
        <header>
            <div className='logo-container'>
                <Link to="/">
                    <img alt='Logo Image' src={APP_LOGO_IMAGE_URL} />
                    <h3>NamasteFood</h3>
                </Link>
            </div>
            <nav>
                <ul>
                    <li>Active: {(onlineStatus === false) ? '🔴' : '🟢'}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><i className="fa-solid fa-cart-shopping"></i></li>
                    <li className='login' 
                        onClick={() => {
                            loginBtnValue === 'Login'? setLoginBtnValue('Logout') : setLoginBtnValue('Login');
                        }}
                    >
                        <Link to="/login">
                            <button>
                                {loginBtnValue}
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;