import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Project Details">
        {/*Start Project Details*/}
        <section className="project-details">
            <div className="container">
                <div className="project-details__inner">
                    <div className="project-details__img1">
                        <div className="inner">
                            <img src="assets/images/project/project-details-img1.jpg" alt=""/>
                        </div>

                        <div className="project-details__img1-content wow fadeInRight" data-wow-delay="0ms"
                            data-wow-duration="1500ms">
                            <div className="title-box">
                                <h2>Project Details</h2>
                            </div>
                            <div className="project-details__img1-content-list">
                                <ul className="clearfix">
                                    <li>
                                        <div className="title">
                                            <h2>Category:</h2>
                                        </div>

                                        <div className="text">
                                            <p>Quality Equipment </p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="title">
                                            <h2>Client:</h2>
                                        </div>

                                        <div className="text">
                                            <p>Mack Straing </p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="title">
                                            <h2>Location:</h2>
                                        </div>

                                        <div className="text">
                                            <p>USA </p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="title">
                                            <h2>Value:</h2>
                                        </div>

                                        <div className="text">
                                            <p>$500K </p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="title">
                                            <h2>Website:</h2>
                                        </div>

                                        <div className="text">
                                            <p><Link href="https://www.google.com/">www.google.com</Link></p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="title">
                                            <h2>Share:</h2>
                                        </div>

                                        <div className="social-links">
                                            <Link href="#"><span className="icon-facebook-f"></span></Link>
                                            <Link href="#"><span className="icon-instagram"></span></Link>
                                            <Link href="#"><span className="icon-twitter1"></span></Link>
                                            <Link href="#"><span className="icon-linkedin"></span></Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="project-details__text1">
                        <h2>Here to Know About This Project</h2>
                        <p>With a focus on safety, efficiency, and cost-effectiveness, we offer a range of tailored
                            services to meet the unique needs of our clients, from air and sea freight to road
                            transportation. Our dedicated team of professionals is committed to delivering excellence at
                            every stage of the journey, providing peace of mind and ensuring that your cargo arrives at
                            its destination securely and on schedule. Entrust your international transport needs to us,
                            and experience the difference of our trusted and proven services.</p>
                    </div>

                    <div className="project-details__text2">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="project-details__text2-img">
                                    <div className="inner">
                                        <img src="assets/images/project/project-details-img2.jpg" alt=""/>

                                        <div className="project-details__video-link">
                                            <Link href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                                <div className="project-details__video-icon">
                                                    <span className="icon-video"></span>
                                                    <i className="ripple"></i>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="project-details__text2-content">
                                    <h2>Key Objectives:</h2>
                                    <p>As a premier international transport service provider, we specialize in
                                        seamlessly connecting businesses and individuals with efficient and reliable
                                        transportation solutions across borders. </p>
                                    <ul>
                                        <li>
                                            <p><span className="icon-arrow-right-circle"></span> Develop recommendations for
                                                process improvements
                                                and technology i</p>
                                        </li>

                                        <li>
                                            <p><span className="icon-arrow-right-circle"></span> Create a roadmap for the
                                                implementation of proposed changes.</p>
                                        </li>

                                        <li>
                                            <p><span className="icon-arrow-right-circle"></span> Create a roadmap for the
                                                implementation of proposed changes.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="project-details__text3">
                        <p>With a focus on safety, efficiency, and cost-effectiveness, we offer a range of tailored
                            services to meet the unique needs of our clients, from air and sea freight to road
                            transportation. Our dedicated team of professionals is committed to delivering excellence at
                            every stage of the journey, providing peace of mind and ensuring that your cargo arrives at
                            its destination securely and on schedule. Entrust your international transport needs to us,
                            and experience the difference of our trusted and proven services. Capitalizing on the
                            increasing awareness of environmental sustainability, you could start a subscription box
                            service that delivers eco-friendly
                            products to subscribers on a regular basis. The focus would be on providing consumers with
                            sustainable.</p>

                        <div className="img-box">
                            <img src="assets/images/project/project-details-img3.jpg" alt=""/>
                        </div>
                    </div>

                    <div className="project-details__previous-next">
                        <ul>
                            <li>
                                <div className="icon">
                                    <Link href="#"><span className="icon-right-arrow2"></span></Link>
                                </div>
                                <div className="text-box">
                                    <Link href="#">Previous Project</Link>
                                </div>
                            </li>

                            <li>
                                <div className="text-box">
                                    <Link href="#">Next Project</Link>
                                </div>
                                <div className="icon">
                                    <Link href="#"><span className="icon-right-arrow2"></span></Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        {/*End Project Details*/}

        {/*Start Project One*/}
        <section className="project-one project-one--project-details">
            <div className="container">
                <div className="title-box text-center">
                    <h2>Related Work</h2>
                </div>
                <div className="row">
                    {/*Start Project One Single*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="project-one__single">
                            <div className="project-one__single-img">
                                <div className="inner">
                                    <img src="assets/images/project/project-v1-img6.jpg" alt="#"/>
                                    <div className="project-one__overlay-content">
                                        <div className="text-box">
                                            <p>Logistic</p>
                                            <h2><Link href="#">Warehouse Inventory </Link></h2>
                                        </div>

                                        <div className="icon">
                                            <Link href="#"><span className="icon-right-arrow21"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Project One Single*/}

                    {/*Start Project One Single*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="project-one__single">
                            <div className="project-one__single-img">
                                <div className="inner">
                                    <img src="assets/images/project/project-v1-img7.jpg" alt="#"/>
                                    <div className="project-one__overlay-content">
                                        <div className="text-box">
                                            <p>Logistic</p>
                                            <h2><Link href="#">Warehouse Inventory </Link></h2>
                                        </div>

                                        <div className="icon">
                                            <Link href="#"><span className="icon-right-arrow21"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Project One Single*/}

                    {/*Start Project One Single*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="project-one__single">
                            <div className="project-one__single-img">
                                <div className="inner">
                                    <img src="assets/images/project/project-v1-img8.jpg" alt="#"/>
                                    <div className="project-one__overlay-content">
                                        <div className="text-box">
                                            <p>Logistic</p>
                                            <h2><Link href="#">Warehouse Inventory </Link></h2>
                                        </div>

                                        <div className="icon">
                                            <Link href="#"><span className="icon-right-arrow21"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Project One Single*/}
                </div>
            </div>
        </section>
        {/*End Project One*/}

            </Layout>
        </>
    )
}