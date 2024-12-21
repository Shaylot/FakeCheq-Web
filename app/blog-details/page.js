
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Blog Details">
            {/*Start Blog Details*/}
            <section className="blog-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="blog-details__content">
                                <div className="blog-details__content-img1">
                                    <div className="inner">
                                        <img src="assets/images/blog/blog-details-img1.jpg" alt=""/>
                                    </div>
                                </div>

                                <div className="blog-details__content-meta-box">
                                    <ul>
                                        <li>
                                            <div className="img-box">
                                                <img src="assets/images/blog/blog-details-img8.jpg" alt=""/>
                                            </div>

                                            <div className="text-box">
                                                <p>BY-Admin</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <span className="icon-calendar"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>October 8,2023</p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <span className="icon-chat"></span>
                                            </div>

                                            <div className="text-box">
                                                <p>Comment(5)</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="blog-details__content-text1">
                                    <h2>We Ensure Best Quality Logistic Service</h2>
                                    <p>Your team's brilliance, determination, and confidence will drive you to conquer new
                                        frontiers; greatness lies within you. greatnes lies within w ill driveYour team's
                                        brilliance, determination, and confidence will drive you to conquer new frontiers;
                                        greatness lies within you. greatnes lies within w ill driveYour team's brilliance,
                                        determination, and confidence will drive you to conquer new frontiers; greatness
                                        lies within you. </p>
                                </div>

                                <div className="blog-details__content-img2">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="single-img">
                                                <img src="assets/images/blog/blog-details-img2.jpg" alt=""/>
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="single-img">
                                                <img src="assets/images/blog/blog-details-img3.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="blog-details__content-text2">
                                    <h2>How Are Federal Contractors Expected.</h2>
                                    <p>Your team's brilliance, determination, and confidence will drive you to conquer new
                                        frontiers; greatness lies within you. greatnes lies within driveYour team's
                                        brilliance, determination, and confidence will drive you to conquer new frontiers;
                                        greatness lies within you. greatnes lies within w ill driveYour team's brilliance,
                                        determination, and confidence will drive you to conquer new frontiers; greatness
                                        lies within you. greatnes lies within w ill drive</p>
                                </div>

                                <div className="blog-details__content-text3">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="blog-details__content-text3-text">
                                                <ul>
                                                    <li>
                                                        <p><span className="icon-right-arrow41"></span> Sed ut perspiciatis unde
                                                            omniccusantium
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p><span className="icon-right-arrow41"></span> Ut enim ad minima
                                                            veniam, quis nostrum exercita
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p><span className="icon-right-arrow41"></span> Quis autem vel eum iure
                                                            reprehenderit qui in ea
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p><span className="icon-right-arrow41"></span> Excepteur sint occaecat
                                                            cupidatat
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p><span className="icon-right-arrow41"></span> Excepteur sint occaecat
                                                            cupidatat non proident,
                                                        </p>
                                                    </li>

                                                    <li>
                                                        <p><span className="icon-right-arrow41"></span> Quis autem vel eum iure
                                                            reprehenderit
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6">
                                            <div className="blog-details__content-text3-img">
                                                <div className="inner">
                                                    <div className="blog-details__video-link">
                                                        <Link href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                                                            className="video-popup">
                                                            <div className="blog-details__video-icon">
                                                                <span className="icon-video"></span>
                                                                <i className="ripple"></i>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <img src="assets/images/blog/blog-details-img4.jpg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="blog-details__content-text4">
                                    <p>Your team's brilliance, determination, and confidence will drive you to conquer new
                                        frontiers; greatness lies within you. greatnes lies within w ill driveYour team's
                                        brilliance, determination, and confidence will drive you to conquer new frontiers;
                                        greatness lies within you. greatnes lies within w ill driveYour team's brilliance,
                                        determination, and confidence will drive you to conquer new frontiers; greatness
                                        lies within you. greatnes lies within w ill drive</p>
                                </div>

                                <div className="blog-details__content-text5">
                                    <div className="blog-details__content-text5-tag">
                                        <div className="title-box">
                                            <h2>Tags:</h2>
                                        </div>

                                        <ul>
                                            <li><Link href="#">#Logistics</Link></li>
                                            <li><Link href="#">#Transport</Link></li>
                                        </ul>
                                    </div>


                                    <div className="blog-details__content-text5-share">
                                        <div className="title-box">
                                            <p>Share Now</p>
                                        </div>

                                        <ul>
                                            <li><Link href="#"><span className="icon-facebook-f"></span></Link></li>
                                            <li><Link href="#"><span className="icon-instagram"></span></Link></li>
                                            <li><Link href="#"><span className="icon-twitter"></span></Link></li>
                                            <li><Link href="#"><span className="icon-linkedin"></span></Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="blog-details__content-text6">
                                    <div className="img-box">
                                        <img src="assets/images/blog/blog-details-img5.jpg" alt=""/>
                                    </div>

                                    <div className="content-box">
                                        <h2>Alex Micle</h2>
                                        <p>Your team's brilliance, determination, and confidence will drive you to conquer
                                            new frontiers; greatness lies within you. greatnes lies within will driveYour
                                            team's brilliance, determination, and confidence will drive you</p>

                                        <div className="social-links">
                                            <Link href="#"><span className="icon-facebook-f"></span></Link>
                                            <Link href="#"><span className="icon-instagram"></span></Link>
                                            <Link href="#"><span className="icon-twitter"></span></Link>
                                            <Link href="#"><span className="icon-linkedin"></span></Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="comment-one">
                                    <div className="title-box">
                                        <h2>2 Comments</h2>
                                    </div>

                                    <div className="comment-one__single">
                                        <div className="comment-one__single-inner">
                                            <div className="comment-one__img">
                                                <img src="assets/images/blog/blog-details-img6.jpg" alt=""/>
                                            </div>

                                            <div className="comment-one__content">
                                                <div className="comment-one__content-title">
                                                    <h2>Cameron Williamson</h2>
                                                    <p>3 Hours Ago</p>
                                                </div>

                                                <p>Your team's brilliance, determination, and confidence will drive you to
                                                    conquer new frontiers; greatness lies within you. greatnes lies.</p>

                                                <div className="btn-box">
                                                    <Link href="#">Reply</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="comment-one__single style2">
                                        <div className="comment-one__single-inner">
                                            <div className="comment-one__img">
                                                <img src="assets/images/blog/blog-details-img7.jpg" alt=""/>
                                            </div>

                                            <div className="comment-one__content">
                                                <div className="comment-one__content-title">
                                                    <h2>Jons kihan</h2>
                                                    <p>3 Hours Ago</p>
                                                </div>

                                                <p>Your team's brilliance, determination, and confidence will drive you to
                                                    conquer new frontiers; greatness lies within you. greatnes lies within w
                                                    ill driveYour team's brilliance</p>

                                                <div className="btn-box">
                                                    <Link href="#">Reply</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="comment-form">
                                    <div className="title-box">
                                        <h2>Leave a Reply</h2>
                                        <p>Your email address will not be published. Required fields are marked *</p>
                                    </div>

                                    <form className="contact-form-validated why-choose-one__form"
                                        action="assets/inc/sendemail.php" method="post" >
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="input-box">
                                                    <input type="text" name="name" placeholder="Name" required=""/>
                                                    <div className="icon"><span className="icon-user"></span></div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="input-box">
                                                    <input type="email" name="email" placeholder="Email" required=""/>
                                                    <div className="icon"><span className="icon-email"></span></div>
                                                </div>
                                            </div>

                                            <div className="col-xl-12">
                                                <div className="input-box">
                                                    <textarea name="message" placeholder="Message"></textarea>
                                                    <div className="icon style2"><span className="icon-pen"></span></div>
                                                </div>
                                            </div>

                                            <div className="col-xl-12">

                                                <div className="comment-form__checkbox">
                                                    <input type="checkbox" name="agree " id="agree" />
                                                    <label><span></span>Save my name, email, and website in this
                                                        browser for the next time I comment.</label>
                                                </div>



                                                <div className="why-choose-one__form-btn">
                                                    <button type="submit" className="thm-btn">
                                                        Submit Now
                                                        <i className="icon-right-arrow21"></i>
                                                        <span className="hover-btn hover-bx"></span>
                                                        <span className="hover-btn hover-bx2"></span>
                                                        <span className="hover-btn hover-bx3"></span>
                                                        <span className="hover-btn hover-bx4"></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="result"></div>

                                </div>
                            </div>
                        </div>

                        {/*Start Sidebar*/}
                        <div className="col-xl-4">
                            <div className="sidebar">
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
                    </div>
                </div>
            </section>
            {/*End Blog Details*/}

            </Layout>
        </>
    )
}