import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TemperatureContext from '../hooks/TemperatureContext';
import StorageUtility from '../utilities/StorageUtility';
import './Navbar.css';


const Navbar = () => {
    const navigate = useNavigate();

    const _initializeNavbar = () => {
        const $navbarBurgers = Array.prototype.slice.call(
            document.querySelectorAll('.navbar-burger'),
            0
        );
        if ($navbarBurgers.length > 0) {
            $navbarBurgers.forEach((el) => {
                el.addEventListener('click', () => {
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);
                    el.classList.toggle('is-active');
                    $target?.classList.toggle('is-active');
                });
            });
        }
    };

    useEffect(() => {
        _initializeNavbar();
    }, []);

    // @ts-ignore
    const [isCelsiusToggled, setIsCelsiusToggled] = useContext(TemperatureContext);

    const _onNavBarIconClick = () => {
        StorageUtility.setStoredZipCode('');
        navigate(`/`);
    }

    return (
        <nav className='navbar is-fixed-top is-info' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <div className='navbar-item logo'>
                    <img src='/logo.png' alt='logo' width={'40'} height='40' onClick={_onNavBarIconClick} />
                </div>
                {
                    // eslint-disable-next-line
                    <a
                        role='button'
                        className='navbar-burger burger'
                        aria-label='menu'
                        aria-expanded='false'
                        data-target='nav-basic'
                    >
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                    </a>
                }
            </div>
            <div className='navbar-menu is-mobile' id='nav-basic'>
                <div className='navbar-end'>
                    <div className='mt-3 mb-3 nav-text'>
                        <label className='switch'>
                            <input type='checkbox' onClick={() => { setIsCelsiusToggled(!isCelsiusToggled) }} />
                            <span className='slider'></span>
                        </label>
                        <span className='mr-2 ml-2'>
                            {!isCelsiusToggled ? 'Celsius' : 'Fahrenheit'}
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;