import APP_LOGO_IMAGE_URL from '../utils/constants';
import { useState } from 'react';

const Header = () => {
    // Normal JS Variable
    // let loginBtnValue = 'Login'; 

    // Powerfull React Local State Variable
    const [loginBtnValue, setLoginBtnValue] = useState('Login');

    return (
        <header>
            <div className='logo-container'>
                <img alt='Logo Image' src={APP_LOGO_IMAGE_URL} />
                <h3>NamasteFood</h3>
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li><i className="fa-solid fa-cart-shopping"></i></li>
                    <li className='login' 
                        onClick={() => {
                            loginBtnValue === 'Login'? setLoginBtnValue('Logout') : setLoginBtnValue('Login');
                        }}
                    >
                        <button>
                            {loginBtnValue}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;