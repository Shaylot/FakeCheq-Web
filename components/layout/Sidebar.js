import Link from "next/link"

export default function Sidebar({ isSidebar, handleSidebar }) {
    return (
        <>

        <div className={`xs-sidebar-group info-group info-sidebar ${isSidebar ? "isActive" : ""}`}>
            <div className="xs-overlay xs-bg-black" onClick={handleSidebar}></div>
            <div className="xs-sidebar-widget">
                <div className="sidebar-widget-container">
                    <div className="widget-heading">
                        <Link href="#" className="close-side-widget">X</Link>
                    </div>
                    <div className="sidebar-textwidget">
                        <div className="sidebar-info-contents">
                            <div className="content-inner">
                                <div className="logo">
                                    <Link href="/"><img src="assets/images/resources/sidebar-logo.png"
                                            alt="" /></Link>
                                </div>
                                <div className="content-box">
                                    <h4>About Us</h4>
                                    <div className="inner-text">
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                                            roots in a piece of classNameical Latin literature from 45 BC, making it over
                                            2000 years old.
                                        </p>
                                    </div>
                                </div>

                                <div className="form-inner">
                                    <h4>Get a free quote</h4>
                                    <form action="/" method="post">
                                        <div className="form-group">
                                            <input type="text" name="name" placeholder="Name" required=""/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="email" placeholder="Email" required=""/>
                                        </div>
                                        <div className="form-group">
                                            <textarea name="message" placeholder="Message..."></textarea>
                                        </div>
                                        <div className="form-group message-btn">
                                            <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                                                Submit Now
                                                <i className="icon-right-arrow21"></i>
                                                <span className="hover-btn hover-bx"></span>
                                                <span className="hover-btn hover-bx2"></span>
                                                <span className="hover-btn hover-bx3"></span>
                                                <span className="hover-btn hover-bx4"></span>
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                <div className="sidebar-contact-info">
                                    <h4>Contact Info</h4>
                                    <ul>
                                        <li>
                                            <span className="icon-location1"></span> 88 broklyn street, New York
                                        </li>
                                        <li>
                                            <span className="icon-phone"></span>
                                            <Link href="tel:123456789">+1 555-9990-153</Link>
                                        </li>
                                        <li>
                                            <span className="fa fa-envelope"></span>
                                            <Link href="mailto:info@example.com">info@example.com</Link>
                                        </li>
                                    </ul>
                                </div>


                                <div className="thm-social-link1">
                                    <ul className="social-box">
                                        <li className="facebook">
                                            <Link href="#"><i className="icon-facebook-f" aria-hidden="true"></i></Link>
                                        </li>
                                        <li className="twitter">
                                            <Link href="#"><i className="icon-twitter" aria-hidden="true"></i></Link>
                                        </li>
                                        <li className="linkedin">
                                            <Link href="#"><i className="icon-instagram" aria-hidden="true"></i></Link>
                                        </li>
                                        <li className="gplus">
                                            <Link href="#"><i className="icon-linkedin" aria-hidden="true"></i></Link>
                                        </li>
                                    </ul>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        </>
    )
}
