
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header2({ scroll, handlePopup, handleSidebar, handleMobileMenu }) {
    return (
        <>

        {/*Start Main Header Two*/}
        <header className="main-header main-header-two">
            <nav className="main-menu">
                <div className="main-menu__wrapper">
                    <div className="container">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-header-two__inner">
                                <div className="logo-box-two">
                                    <Link href="/"><img src="assets/images/resources/logo-2.png" alt=""/></Link>
                                </div>

                                <div className="main-header-two__top">
                                    <div className="main-header-two__top-inner">
                                        <div className="main-header-two__top-left">
                                            <div className="header-contact-style2">
                                                <ul>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-clock"></span>
                                                        </div>

                                                        <div className="text-box">
                                                            <p className="text1">Opening Hours</p>
                                                            <p className="text2">Mon - Sat: 8am - 5pm</p>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-email"></span>
                                                        </div>

                                                        <div className="text-box">
                                                            <p className="text1">Send Us Mail</p>
                                                            <p className="text2"><Link
                                                                    href="mailto:yourmail@email.com">support@logistra.com</Link>
                                                            </p>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-phone2"></span>
                                                        </div>

                                                        <div className="text-box">
                                                            <p className="text1">Make A Call</p>
                                                            <p className="text2"><Link href="tel:1234567890">680 123 456
                                                                    789</Link></p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="main-header-two__top-right">
                                            <div className="header-social-link-style2">
                                                <div className="title-box">
                                                    <p>Follow Us On:</p>
                                                </div>
                                                <ul>
                                                    <li><Link href="#"><span className="icon-facebook-f"></span></Link></li>
                                                    <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                                    <li><Link href="#"><span className="icon-twitter1"></span></Link></li>
                                                    <li><Link href="#"><span className="icon-linkedin"></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="main-header-two__bottom">
                                    <div className="shape1"></div>
                                    <div className="main-header-two__bottom-inner">

                                        <div className="main-header-two__bottom-left">
                                            <div className="main-header-two__menu">
                                                <div className="main-menu__main-menu-box">
                                                    <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i
                                                            className="fa fa-bars"></i></Link>
                                                    <Menu />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="main-header-two__bottom-right">
                                            <div className="header-search-box-two">
                                                <Link href="#" className="main-menu__search search-toggler icon-search" onClick={handlePopup}></Link>
                                            </div>


                                            <div className="sidebar-icon">
                                                <Link className="navSidebar-button icon2" href="#" onClick={handleSidebar}>
                                                    <span className="nav-sidebar-menu-1"></span>
                                                    <span className="nav-sidebar-menu-2"></span>
                                                    <span className="nav-sidebar-menu-3"></span>
                                                </Link>
                                            </div>

                                            <div className="btn-box">
                                                <Link className="thm-btn" href="contact">Track Order
                                                    <i className="icon-right-arrow21"></i>
                                                    <span className="hover-btn hover-bx"></span>
                                                    <span className="hover-btn hover-bx2"></span>
                                                    <span className="hover-btn hover-bx3"></span>
                                                    <span className="hover-btn hover-bx4"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        {/*End Main Header Two*/}

        <div className={`stricky-header stricky-header--style2 stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
                <div className="main-menu__wrapper">
                    <div className="container">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-header-two__inner">
                                <div className="logo-box-two">
                                    <Link href="/"><img src="assets/images/resources/logo-2.png" alt=""/></Link>
                                </div>

                                <div className="main-header-two__top">
                                    <div className="main-header-two__top-inner">
                                        <div className="main-header-two__top-left">
                                            <div className="header-contact-style2">
                                                <ul>
                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-clock"></span>
                                                        </div>

                                                        <div className="text-box">
                                                            <p className="text1">Opening Hours</p>
                                                            <p className="text2">Mon - Sat: 8am - 5pm</p>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-email"></span>
                                                        </div>

                                                        <div className="text-box">
                                                            <p className="text1">Send Us Mail</p>
                                                            <p className="text2"><Link
                                                                    href="mailto:yourmail@email.com">support@logistra.com</Link>
                                                            </p>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="icon">
                                                            <span className="icon-phone2"></span>
                                                        </div>

                                                        <div className="text-box">
                                                            <p className="text1">Make A Call</p>
                                                            <p className="text2"><Link href="tel:1234567890">680 123 456
                                                                    789</Link></p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="main-header-two__top-right">
                                            <div className="header-social-link-style2">
                                                <div className="title-box">
                                                    <p>Follow Us On:</p>
                                                </div>
                                                <ul>
                                                    <li><Link href="#"><span className="icon-facebook-f"></span></Link></li>
                                                    <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                                    <li><Link href="#"><span className="icon-twitter1"></span></Link></li>
                                                    <li><Link href="#"><span className="icon-linkedin"></span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="main-header-two__bottom">
                                    <div className="shape1"></div>
                                    <div className="main-header-two__bottom-inner">

                                        <div className="main-header-two__bottom-left">
                                            <div className="main-header-two__menu">
                                                <div className="main-menu__main-menu-box">
                                                    <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i
                                                            className="fa fa-bars"></i></Link>
                                                    <Menu />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="main-header-two__bottom-right">
                                            <div className="header-search-box-two">
                                                <Link href="#" className="main-menu__search search-toggler icon-search" onClick={handlePopup}></Link>
                                            </div>


                                            <div className="sidebar-icon">
                                                <Link className="navSidebar-button icon2" href="#" onClick={handleSidebar}>
                                                    <span className="nav-sidebar-menu-1"></span>
                                                    <span className="nav-sidebar-menu-2"></span>
                                                    <span className="nav-sidebar-menu-3"></span>
                                                </Link>
                                            </div>

                                            <div className="btn-box">
                                                <Link className="thm-btn" href="contact">Track Order
                                                    <i className="icon-right-arrow21"></i>
                                                    <span className="hover-btn hover-bx"></span>
                                                    <span className="hover-btn hover-bx2"></span>
                                                    <span className="hover-btn hover-bx3"></span>
                                                    <span className="hover-btn hover-bx4"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>{/* /.sticky-header__content */}
        </div>{/* /.stricky-header */}
        <MobileMenu handleMobileMenu={handleMobileMenu} />
        

        </>
    )
}
