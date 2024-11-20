import React from 'react'
import Logo from '../Assets/images/logo.svg'
import Profile from '../Assets/images/avatar/01.jpg'
import '../Assets/css/style.css'
import '../Assets/vendor/glightbox/css/glightbox.css'
import '../Assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '../Assets/vendor/font-awesome/css/all.min.css'
import { Link } from 'react-router-dom/umd/react-router-dom.development'
import SignIn from './googleSignin/signIn'

function Navbar() {
    const email = localStorage.getItem('email');
    const name = localStorage.getItem('name');
    const img = localStorage.getItem('image');
    return (
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com/" />
            <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-7N7LGGGWT1"></script>

            <header className="navbar-light navbar-sticky header-static">
                <nav className="navbar navbar-expand-xl">
                    <div className="container-fluid px-3 px-xl-5">
                        <a className="navbar-brand" href='/'>
                            <img className="light-mode-item navbar-brand-item" src={Logo} alt="logo" width='100' />
                            <img class="dark-mode-item navbar-brand-item" src="../Assets/images/logo-light.svg" alt="logo" />
                        </a>
                        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-animation">
                                <span />
                                <span />
                                <span />
                            </span>
                        </button>
                        <div className="navbar-collapse w-100 collapse" id="navbarCollapse">
                            <ul className="navbar-nav navbar-nav-scroll me-auto">
                                <li><Link to='/text-to-sign' className='nav-link'>Convert</Link></li>
                                <li><Link to='/sign-to-text' className='nav-link'>Sign</Link></li>
                                <li><Link to='/learn-sign' className='nav-link'>Learn Sign</Link></li>
                            </ul>
                        </div>
                        <div className="dropdown ms-1 ms-lg-0">
                            <a className="avatar avatar-sm p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                                {img ? (
                                    <img className="avatar-img rounded-circle shadow image" src={img} alt="avatar" />
                                ) : (
                                    <img className="avatar-img rounded-circle shadow image" src={Profile} alt="avatar" />
                                )}
                            </a>
                            <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">
                                <li className="px-3 mb-3">
                                    <div className="d-flex align-items-center">
                                        <div className="avatar me-3">
                                            {img ? (
                                                <img className="avatar-img rounded-circle shadow image" src={img} alt="avatar" />
                                            ) : (
                                                <img className="avatar-img rounded-circle shadow image" src={Profile} alt="avatar" />
                                            )}
                                        </div>
                                        <div>
                                            {name ? (
                                                <a className="h6" id="name">
                                                    {name}
                                                </a>
                                            ) : (
                                                <a className="h6" id="name">
                                                    Dear User
                                                </a>
                                            )}
                                            {email ? (
                                                <p className="small m-0" id='email'>{email}</p>
                                            ) : (
                                                <p className="small m-0" id='email'>dearuser@gmail.com</p>
                                            )}
                                        </div>
                                    </div>
                                </li>

                                <>
                                    <li> <hr className="dropdown-divider" /></li>
                                    {/* <li><a className="dropdown-item" href="#"><i className="bi bi-person fa-fw me-2" />Edit Profile</a></li> */}
                                    <li><a className="dropdown-item" href="#"><i className="bi bi-gear fa-fw me-2" />Account Settings</a></li>
                                    <li><a className="dropdown-item" href="#"><i className="bi bi-info-circle fa-fw me-2" />Help</a></li>
                                    <SignIn />
                                    <li> <hr className="dropdown-divider" /></li>
                                </>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <script src="../Assets/js/functions.js"></script>
            <script src="../Assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
            <script src="../Assets/vendor/tiny-slider/tiny-slider.js"></script>
            <script src="../Assets/vendor/glightbox/js/glightbox.js"></script>
            <script src="../Assets/vendor/purecounterjs/dist/purecounter_vanilla.js"></script>
        </div>
    );
}

export default Navbar;