import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Home() {

    return (
        <>
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Team Members">
        {/*Start Team One*/}
        <section className="team-one team-one--two team-one--two--team">
            <div className="shape1"><img src="assets/images/pattern/team-page-pattern.png" alt=""/></div>
            <div className="container">
                <div className="row">
                    {/*Start Team One Single*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".1s">
                        <div className="team-one__single">
                            <div className="team-one__single-img">
                                <div className="inner">
                                    <img src="assets/images/team/team-v1-img1.jpg" alt=""/>
                                </div>
                            </div>

                            <div className="team-one__single-content">
                                <ul className="social-links">
                                    <li><Link href="#"><span className="icon-linkedin"></span></Link></li>
                                    <li><Link href="#"><span className="icon-twitter1"></span></Link></li>
                                    <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                    <li><Link href="#"><span className="icon-facebook-f"></span></Link></li>
                                </ul>
                                <span>FOUNDER</span>
                                <h2><Link href="team-details">Courtney Henry</Link></h2>
                                <p>Logistic service provider company plays a pivotal role in the global supply chain
                                </p>
                                <div className="btn-box">
                                    <Link href="contact">Contact Me <i className="icon-right-arrow21"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Team One Single*/}

                    {/*Start Team One Single*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="team-one__single">
                            <div className="team-one__single-img">
                                <div className="inner">
                                    <img src="assets/images/team/team-v1-img2.jpg" alt=""/>
                                </div>
                            </div>

                            <div className="team-one__single-content">
                                <ul className="social-links">
                                    <li><Link href="#"><span className="icon-linkedin"></span></Link></li>
                                    <li><Link href="#"><span className="icon-twitter1"></span></Link></li>
                                    <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                    <li><Link href="#"><span className="icon-facebook-f"></span></Link></li>
                                </ul>
                                <span>FOUNDER</span>
                                <h2><Link href="team-details">Jane Cooper</Link></h2>
                                <p>Logistic service provider company plays a pivotal role in the global supply chain
                                </p>
                                <div className="btn-box">
                                    <Link href="contact">Contact Me <i className="icon-right-arrow21"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Team One Single*/}

                    {/*Start Team One Single*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="team-one__single">
                            <div className="team-one__single-img">
                                <div className="inner">
                                    <img src="assets/images/team/team-v1-img3.jpg" alt=""/>
                                </div>
                            </div>

                            <div className="team-one__single-content">
                                <ul className="social-links">
                                    <li><Link href="#"><span className="icon-linkedin"></span></Link></li>
                                    <li><Link href="#"><span className="icon-twitter1"></span></Link></li>
                                    <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                    <li><Link href="#"><span className="icon-facebook-f"></span></Link></li>
                                </ul>
                                <span>FOUNDER</span>
                                <h2><Link href="team-details">Marvin McKinney</Link></h2>
                                <p>Logistic service provider company plays a pivotal role in the global supply chain
                                </p>
                                <div className="btn-box">
                                    <Link href="contact">Contact Me <i className="icon-right-arrow21"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Team One Single*/}

                    {/*Start Team One Single*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".1s">
                        <div className="team-one__single">
                            <div className="team-one__single-img">
                                <div className="inner">
                                    <img src="assets/images/team/team-v1-img4.jpg" alt=""/>
                                </div>
                            </div>

                            <div className="team-one__single-content">
                                <ul className="social-links">
                                    <li><Link href="#"><span className="icon-linkedin"></span></Link></li>
                                    <li><Link href="#"><span className="icon-twitter1"></span></Link></li>
                                    <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                    <li><Link href="#"><span className="icon-facebook-f"></span></Link></li>
                                </ul>
                                <span>FOUNDER</span>
                                <h2><Link href="team-details">Jacob Jones</Link></h2>
                                <p>Logistic service provider company plays a pivotal role in the global supply chain
                                </p>
                                <div className="btn-box">
                                    <Link href="contact">Contact Me <i className="icon-right-arrow21"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Team One Single*/}

                    {/*Start Team One Single*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="team-one__single">
                            <div className="team-one__single-img">
                                <div className="inner">
                                    <img src="assets/images/team/team-v1-img5.jpg" alt=""/>
                                </div>
                            </div>

                            <div className="team-one__single-content">
                                <ul className="social-links">
                                    <li><Link href="#"><span className="icon-linkedin"></span></Link></li>
                                    <li><Link href="#"><span className="icon-twitter1"></span></Link></li>
                                    <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                    <li><Link href="#"><span className="icon-facebook-f"></span></Link></li>
                                </ul>
                                <span>FOUNDER</span>
                                <h2><Link href="team-details">Darrell Steward</Link></h2>
                                <p>Logistic service provider company plays a pivotal role in the global supply chain
                                </p>
                                <div className="btn-box">
                                    <Link href="contact">Contact Me <i className="icon-right-arrow21"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Team One Single*/}

                    {/*Start Team One Single*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="team-one__single">
                            <div className="team-one__single-img">
                                <div className="inner">
                                    <img src="assets/images/team/team-v1-img6.jpg" alt=""/>
                                </div>
                            </div>

                            <div className="team-one__single-content">
                                <ul className="social-links">
                                    <li><Link href="#"><span className="icon-linkedin"></span></Link></li>
                                    <li><Link href="#"><span className="icon-twitter1"></span></Link></li>
                                    <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                    <li><Link href="#"><span className="icon-facebook-f"></span></Link></li>
                                </ul>
                                <span>FOUNDER</span>
                                <h2><Link href="team-details">Theresa Webb</Link></h2>
                                <p>Logistic service provider company plays a pivotal role in the global supply chain
                                </p>
                                <div className="btn-box">
                                    <Link href="contact">Contact Me <i className="icon-right-arrow21"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Team One Single*/}
                </div>
            </div>
        </section>
        {/*End Team One*/}

            </Layout>
        </>
    )
}