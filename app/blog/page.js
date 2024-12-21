
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Blog & News">
            {/*Start Blog Page*/}
            <section className="blog-page">
                <div className="container">
                    <div className="row">
                        {/*Start Blog One Single*/}
                        <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="blog-one__single">
                                <div className="blog-one__single-img">
                                    <img src="assets/images/blog/blog-v1-img1.jpg" alt=""/>
                                </div>

                                <div className="blog-one__single-content">
                                    <div className="date-box">
                                        <h2>05</h2>
                                        <p>FEB</p>
                                    </div>
                                    <div className="blog-one__single-content-inner">
                                        <ul className="meta-box">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-user"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p><Link href="#">Robert Fox</Link></p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-chat"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p><Link href="#">2 Comment</Link></p>
                                                </div>
                                            </li>
                                        </ul>

                                        <h2><Link href="blog-details">How Will You Know Success <br/> When it Show Up?</Link>
                                        </h2>
                                        <p>Logistic service provider company plays a pivotal role in the global supply chain
                                            ecosystem by efficiently... </p>

                                        <div className="btn-box">
                                            <Link className="thm-btn" href="blog-details">Read More
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
                        {/*End Blog One Single*/}

                        {/*Start Blog One Single*/}
                        <div className="col-xl-4 col-lg-6 wow fadeInDown" data-wow-delay=".3s">
                            <div className="blog-one__single">
                                <div className="blog-one__single-img">
                                    <img src="assets/images/blog/blog-v1-img2.jpg" alt=""/>
                                </div>

                                <div className="blog-one__single-content">
                                    <div className="date-box">
                                        <h2>05</h2>
                                        <p>FEB</p>
                                    </div>
                                    <div className="blog-one__single-content-inner">
                                        <ul className="meta-box">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-user"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p><Link href="#">Robert Fox</Link></p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-chat"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p><Link href="#">2 Comment</Link></p>
                                                </div>
                                            </li>
                                        </ul>

                                        <h2><Link href="blog-details">Mastering Last Mile Delivery <br/> Strategies for
                                                Success</Link></h2>
                                        <p>Logistic service provider company plays a pivotal role in the global supply chain
                                            ecosystem by efficiently... </p>

                                        <div className="btn-box">
                                            <Link className="thm-btn" href="blog-details">Read More
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
                        {/*End Blog One Single*/}

                        {/*Start Blog One Single*/}
                        <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="blog-one__single">
                                <div className="blog-one__single-img">
                                    <img src="assets/images/blog/blog-v1-img3.jpg" alt=""/>
                                </div>

                                <div className="blog-one__single-content">
                                    <div className="date-box">
                                        <h2>05</h2>
                                        <p>FEB</p>
                                    </div>
                                    <div className="blog-one__single-content-inner">
                                        <ul className="meta-box">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-user"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p><Link href="#">Robert Fox</Link></p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-chat"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p><Link href="#">2 Comment</Link></p>
                                                </div>
                                            </li>
                                        </ul>

                                        <h2><Link href="blog-details">Logistics Announces Launch <br/> of Greenhouse
                                                Gas</Link></h2>
                                        <p>Logistic service provider company plays a pivotal role in the global supply chain
                                            ecosystem by efficiently... </p>

                                        <div className="btn-box">
                                            <Link className="thm-btn" href="blog-details">Read More
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
                        {/*End Blog One Single*/}

                        {/*Start Blog One Single*/}
                        <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="blog-one__single">
                                <div className="blog-one__single-img">
                                    <img src="assets/images/blog/blog-v1-img4.jpg" alt=""/>
                                </div>

                                <div className="blog-one__single-content">
                                    <div className="date-box">
                                        <h2>05</h2>
                                        <p>FEB</p>
                                    </div>
                                    <div className="blog-one__single-content-inner">
                                        <ul className="meta-box">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-user"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p><Link href="#">Robert Fox</Link></p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-chat"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p><Link href="#">2 Comment</Link></p>
                                                </div>
                                            </li>
                                        </ul>

                                        <h2><Link href="blog-details">Logistics Announces Launch <br/> of Greenhouse
                                                Gas</Link></h2>
                                        <p>Logistic service provider company plays a pivotal role in the global supply chain
                                            ecosystem by efficiently... </p>

                                        <div className="btn-box">
                                            <Link className="thm-btn" href="blog-details">Read More
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
                        {/*End Blog One Single*/}

                        {/*Start Blog One Single*/}
                        <div className="col-xl-4 col-lg-6 wow fadeInDown" data-wow-delay=".3s">
                            <div className="blog-one__single">
                                <div className="blog-one__single-img">
                                    <img src="assets/images/blog/blog-v1-img5.jpg" alt=""/>
                                </div>

                                <div className="blog-one__single-content">
                                    <div className="date-box">
                                        <h2>05</h2>
                                        <p>FEB</p>
                                    </div>
                                    <div className="blog-one__single-content-inner">
                                        <ul className="meta-box">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-user"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p><Link href="#">Robert Fox</Link></p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-chat"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p><Link href="#">2 Comment</Link></p>
                                                </div>
                                            </li>
                                        </ul>

                                        <h2><Link href="blog-details">Mastering Last Mile Delivery <br/> Strategies for
                                                Success</Link></h2>
                                        <p>Logistic service provider company plays a pivotal role in the global supply chain
                                            ecosystem by efficiently... </p>

                                        <div className="btn-box">
                                            <Link className="thm-btn" href="blog-details">Read More
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
                        {/*End Blog One Single*/}

                        {/*Start Blog One Single*/}
                        <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="blog-one__single">
                                <div className="blog-one__single-img">
                                    <img src="assets/images/blog/blog-v1-img6.jpg" alt=""/>
                                </div>

                                <div className="blog-one__single-content">
                                    <div className="date-box">
                                        <h2>05</h2>
                                        <p>FEB</p>
                                    </div>
                                    <div className="blog-one__single-content-inner">
                                        <ul className="meta-box">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-user"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p><Link href="#">Robert Fox</Link></p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="icon">
                                                    <span className="icon-chat"></span>
                                                </div>

                                                <div className="text-box">
                                                    <p><Link href="#">2 Comment</Link></p>
                                                </div>
                                            </li>
                                        </ul>

                                        <h2><Link href="blog-details">How Will You Know Success <br/> When it Show Up?</Link>
                                        </h2>
                                        <p>Logistic service provider company plays a pivotal role in the global supply chain
                                            ecosystem by efficiently... </p>

                                        <div className="btn-box">
                                            <Link className="thm-btn" href="blog-details">Read More
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
                        {/*End Blog One Single*/}
                    </div>

                    <ul className="styled-pagination text-center clearfix">
                        <li className="arrow prev active"><Link href="#"><span className="icon-right-arrow3"></span></Link>
                        </li>
                        <li><Link href="#">1</Link></li>
                        <li><Link href="#">2</Link></li>
                        <li><Link href="#">3</Link></li>
                        <li className="arrow next"><Link href="#"><span className="icon-right-arrow31"></span></Link>
                        </li>
                    </ul>
                </div>
            </section>
            {/*End Blog Page*/}

            </Layout>
        </>
    )
}