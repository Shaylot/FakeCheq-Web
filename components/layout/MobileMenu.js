'use client'
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
    return (
        <>
            <div className="mobile-nav__wrapper">
                <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu} ></div>
                <div className="mobile-nav__content">
                    <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu} ><i className="fa fa-times"></i></span>

                    <div className="logo-box">
                        <Link href="/" aria-label="logo image"><img src="assets/images/resources/logo-1.png" width="150" alt="" /></Link>
                    </div>

                    <div className="mobile-nav__container">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="main-menu__list">
                                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="/">Home</Link>
                                    <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                        <li><Link href="/">Home One</Link></li>
                                        <li><Link href="index2">Home Two</Link></li>
                                        <li><Link href="index3">Home Three</Link></li>
                                        <li><Link href="index-dark">Home Dark</Link></li>
                                    </ul>
                                    <button className={isActive.key == 1 ? "expanded open" : ""} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></button>
                                </li>
                                <li><Link href="/about/">About</Link></li>
                                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href="/#">Services</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>                                 
                                        <li><Link href="service">Services</Link></li>
                                        <li><Link href="international-transport">International
                                                Transport </Link>
                                        </li>
                                        <li><Link href="track-transport">Local Track
                                                Transport</Link>
                                        </li>
                                        <li><Link href="personal-delivery">Fast
                                                Personal Delivery</Link>
                                        </li>
                                        <li><Link href="ocean-transport">Safe Ocean
                                                Transport</Link>
                                        </li>
                                        <li><Link href="warehouse-facility">Warehouse
                                                Facility</Link>
                                        </li>
                                        <li><Link href="emergency-transport">Emergency
                                                Transport </Link>
                                        </li>
                                    </ul>
                                    <button className={isActive.key == 2 ? "expanded open" : ""} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></button>
                                </li>
                                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}><Link href="/#">Projects</Link>
                                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>                                 
                                        <li><Link href="project">Projects</Link></li>
                                        <li><Link href="project-details">Project Details</Link>
                                        </li>
                                    </ul>
                                    <button className={isActive.key == 3 ? "expanded open" : ""} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></button>
                                </li>
                                <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}><Link href="/#">Pages</Link>
                                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>                                 
                                        <li><Link href="team">Team</Link></li>
                                        <li><Link href="team-details">Team Details</Link></li>
                                        <li><Link href="testimonial">Testimonials</Link></li>
                                        <li><Link href="pricing">Pricing</Link></li>
                                        <li><Link href="faq">Faq</Link></li>
                                        <li><Link href="404">404 Error</Link></li>
                                    </ul>
                                    <button className={isActive.key == 4 ? "expanded open" : ""} onClick={() => handleToggle(4)}><span className="fa fa-angle-right" /></button>
                                </li>
                                <li className={isActive.key == 5 ? "dropdown current" : "dropdown"}><Link href="/#">Blog</Link>
                                    <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>                                 
                                        <li><Link href="blog">Blog</Link></li>
                                        <li><Link href="blog-standard">Blog Standard</Link></li>
                                        <li><Link href="blog-left-sidebar">Blog Left
                                                Sidebar</Link>
                                        </li>
                                        <li><Link href="blog-right-sidebar">Blog Right
                                                Sidebar</Link>
                                        </li>
                                        <li><Link href="blog-details">Blog Details</Link></li>
                                    </ul>
                                    <button className={isActive.key == 5 ? "expanded open" : ""} onClick={() => handleToggle(5)}><span className="fa fa-angle-right" /></button>
                                </li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="fa fa-envelope"></i>
                            <Link href="mailto:needhelp@elitecons.com">needhelp@elitecons.com</Link>
                        </li>
                        <li>
                            <i className="fa fa-phone-alt"></i>
                            <Link href="tel:666-888-0000">666 888 0000</Link>
                        </li>
                    </ul>
                    <div className="mobile-nav__top">
                        <div className="mobile-nav__social">
                            <Link href="#" className="fab fa-twitter"></Link>
                            <Link href="#" className="fab fa-facebook-square"></Link>
                            <Link href="#" className="fab fa-pinterest-p"></Link>
                            <Link href="#" className="fab fa-instagram"></Link>
                        </div>
                    </div>
                </div>
            </div>

          

        </>
    )
}
export default MobileMenu;
