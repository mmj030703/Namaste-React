import APP_LOGO_IMAGE_URL from '../utils/constants';

const Header = () => (
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
            </ul>
        </nav>
    </header>
);

export default Header;