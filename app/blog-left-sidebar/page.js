import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Blog Left Sidebar">
                {/*Start Blog Page*/}
                <section className="blog-page-two">
                    <div className="container">
                        <div className="row">
                            {/*Start Sidebar*/}
                            <div className="col-xl-4">
                                <div className="sidebar style2">
                                    {/*Start Sidebar Single*/}
                                    <div className="sidebar__single sidebar__search wow fadeInUp" data-wow-delay=".1s">
                                        <form action="#" className="sidebar__search-form">
                                            <input type="search" placeholder="Search..."/>
                                            <button type="submit"><i className="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                    {/*End Sidebar Single*/}

                                    {/*Start Sidebar Single*/}
                                    <div className="sidebar__single sidebar__category wow fadeInUp" data-wow-delay=".1s">
                                        <h3 className="sidebar__title">Categories</h3>
                                        <ul className="sidebar__category-list">
                                            <li><Link href="#">New Technologies <span>(12)</span></Link></li>
                                            <li className="active"><Link href="#">Parallax Effect
                                                    <span>(15)</span></Link></li>
                                            <li><Link href="#">Digital Marketing <span>(08)</span></Link></li>
                                            <li><Link href="#">Content Writting <span>(20)</span></Link></li>
                                            <li><Link href="#">One Page Template <span>(14)</span></Link></li>
                                            <li><Link href="#">Relationship Buildup <span>(05)</span></Link></li>
                                        </ul>
                                    </div>
                                    {/*End Sidebar Single*/}

                                    {/*Start Sidebar Single*/}
                                    <div className="sidebar__single sidebar__post wow fadeInUp" data-wow-delay=".1s">
                                        <h3 className="sidebar__title">Recent Post</h3>
                                        <div className="sidebar__post-box">
                                            <div className="sidebar__post-single">
                                                <div className="sidebar-post__img">
                                                    <img src="assets/images/blog/recent-post-img1.jpg" alt=""/>
                                                </div>
                                                <div className="sidebar__post-content-box">
                                                    <h3><Link href="#">Face eite mowl dirst dominon
                                                            likeness meat a mornin.</Link></h3>
                                                </div>
                                            </div>

                                            <div className="sidebar__post-single">
                                                <div className="sidebar-post__img">
                                                    <img src="assets/images/blog/recent-post-img2.jpg" alt=""/>
                                                </div>
                                                <div className="sidebar__post-content-box">
                                                    <h3><Link href="#">Said dill under bielding over
                                                            made spirit sea.</Link></h3>
                                                </div>
                                            </div>

                                            <div className="sidebar__post-single">
                                                <div className="sidebar-post__img">
                                                    <img src="assets/images/blog/recent-post-img3.jpg" alt=""/>
                                                </div>
                                                <div className="sidebar__post-content-box">
                                                    <h3><Link href="#">Face eite mowl dirst dominon
                                                            likeness meat a mornin.</Link></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*End Sidebar Single*/}

                                    {/*Start Sidebar Single*/}
                                    <div className="sidebar__single sidebar__tags wow fadeInUp" data-wow-delay=".1s">
                                        <h3 className="sidebar__title">Tags Cloud</h3>
                                        <ul className="sidebar__tags-list clearfix">
                                            <li><Link href="#">Carpet</Link></li>
                                            <li><Link href="#">Office</Link></li>
                                            <li><Link href="#">Agent</Link></li>
                                            <li><Link href="#">Business</Link></li>
                                            <li><Link href="#">Love</Link></li>
                                            <li><Link href="#">Room</Link></li>
                                            <li><Link href="#">Project</Link></li>
                                            <li><Link href="#">Corporate</Link></li>
                                        </ul>
                                    </div>
                                    {/*End Sidebar Single*/}

                                </div>
                            </div>
                            {/*End Sidebar*/}

                            <div className="col-xl-8">
                                <div className="row">
                                    {/*Start Blog One Single*/}
                                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
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

                                                    <h2><Link href="blog-details">How Will You Know Success <br/> When it Show
                                                            Up?</Link></h2>
                                                    <p>Logistic service provider company plays a pivotal role in the global
                                                        supply chain ecosystem by efficiently... </p>

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
                                    <div className="col-xl-6 col-lg-6 wow fadeInDown" data-wow-delay=".3s">
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

                                                    <h2><Link href="blog-details">Mastering Last Mile Delivery <br/> Strategies
                                                            for Success</Link>
                                                    </h2>
                                                    <p>Logistic service provider company plays a pivotal role in the global
                                                        supply chain ecosystem by efficiently... </p>

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
                                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
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

                                                    <h2><Link href="blog-details">Logistics Announces Launch <br/> of
                                                            Greenhouse Gas</Link></h2>
                                                    <p>Logistic service provider company plays a pivotal role in the global
                                                        supply chain ecosystem by efficiently... </p>

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
                                    <div className="col-xl-6 col-lg-6 wow fadeInDown" data-wow-delay=".3s">
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

                                                    <h2><Link href="blog-details">Mastering Last Mile Delivery <br/> Strategies
                                                            for Success</Link>
                                                    </h2>
                                                    <p>Logistic service provider company plays a pivotal role in the global
                                                        supply chain ecosystem by efficiently... </p>

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
                                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
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

                                                    <h2><Link href="blog-details">Logistics Announces Launch <br/> of
                                                            Greenhouse
                                                            Gas</Link></h2>
                                                    <p>Logistic service provider company plays a pivotal role in the global
                                                        supply chain ecosystem by efficiently... </p>

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
                                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
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

                                                    <h2><Link href="blog-details">How Will You Know Success <br/> When it Show
                                                            Up?</Link>
                                                    </h2>
                                                    <p>Logistic service provider company plays a pivotal role in the global
                                                        supply chain cosystem by efficiently... </p>

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
                                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="blog-one__single">
                                            <div className="blog-one__single-img">
                                                <img src="assets/images/blog/blog-v1-img7.jpg" alt=""/>
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

                                                    <h2><Link href="blog-details">How Will You Know Success <br/> When it Show
                                                            Up?</Link></h2>
                                                    <p>Logistic service provider company plays a pivotal role in the global
                                                        supply chain ecosystem by efficiently... </p>

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
                                    <div className="col-xl-6 col-lg-6 wow fadeInDown" data-wow-delay=".3s">
                                        <div className="blog-one__single">
                                            <div className="blog-one__single-img">
                                                <img src="assets/images/blog/blog-v1-img8.jpg" alt=""/>
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

                                                    <h2><Link href="blog-details">Mastering Last Mile Delivery <br/> Strategies
                                                            for Success</Link>
                                                    </h2>
                                                    <p>Logistic service provider company plays a pivotal role in the global
                                                        supply chain ecosystem by efficiently... </p>

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
                                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="blog-one__single">
                                            <div className="blog-one__single-img">
                                                <img src="assets/images/blog/blog-v1-img9.jpg" alt=""/>
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

                                                    <h2><Link href="blog-details">Logistics Announces Launch <br/> of
                                                            Greenhouse Gas</Link></h2>
                                                    <p>Logistic service provider company plays a pivotal role in the global
                                                        supply chain
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
                                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="blog-one__single">
                                            <div className="blog-one__single-img">
                                                <img src="assets/images/blog/blog-v1-img10.jpg" alt=""/>
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

                                                    <h2><Link href="blog-details">How Will You Know Success <br/>When it Show
                                                            Up?</Link></h2>
                                                    <p>Logistic service provider company plays a pivotal role in the global
                                                        supply chain ecosystem by efficiently... </p>

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
                            </div>
                        </div>
                    </div>
                </section>
                {/*End Blog Page*/}

            </Layout>
        </>
    )
}