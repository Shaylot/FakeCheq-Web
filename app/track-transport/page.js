'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Local Track Transport">
            {/*Start Service Details*/}
            <section className="service-details">
                <div className="container">
                    <div className="row">
                        {/*Start Service Details Sidebar*/}
                        <div className="col-xl-4">
                            <div className="service-details__sidebar">
                                <div className="service-details__sidebar-single">
                                    <div className="title-box">
                                        <h2>Our Service</h2>
                                    </div>
                                    <div className="service-details__sidebar-single-service">
                                        <ul className="clearfix">
                                            <li><Link href="#">International Transport <span
                                                        className="icon-right-arrow21"></span></Link></li>

                                            <li><Link className="active" href="track-transport">Local Track Transport <span
                                                        className="icon-right-arrow21"></span></Link></li>

                                            <li><Link href="personal-delivery">Fast Personal Delivery <span
                                                        className="icon-right-arrow21"></span></Link></li>

                                            <li><Link href="ocean-transport">Safe Ocean Transport <span
                                                        className="icon-right-arrow21"></span></Link></li>

                                            <li><Link href="warehouse-facility">Warehouse Facility <span
                                                        className="icon-right-arrow21"></span></Link>
                                            </li>

                                            <li><Link href="emergency-transport">Emergency Transport <span
                                                        className="icon-right-arrow21"></span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="service-details__sidebar-single">
                                    <div className="title-box">
                                        <h2>Download</h2>
                                    </div>
                                    <div className="service-details__sidebar-single-download">

                                        <ul className="clearfix">
                                            <li>
                                                <div className="content-box">
                                                    <div className="icon">
                                                        <span className="icon-pdf"></span>
                                                    </div>
                                                    <div className="text-box">
                                                        <h2><Link href="#">Pdf Download</Link></h2>
                                                        <p><Link href="#">Download</Link></p>
                                                    </div>
                                                </div>

                                                <div className="btn-box">
                                                    <Link href="#"><span className="icon-download"></span></Link>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="content-box">
                                                    <div className="icon">
                                                        <span className="icon-pdf"></span>
                                                    </div>
                                                    <div className="text-box">
                                                        <h2><Link href="#">Pdf Download</Link></h2>
                                                        <p><Link href="#">Download</Link></p>
                                                    </div>
                                                </div>

                                                <div className="btn-box">
                                                    <Link href="#"><span className="icon-download"></span></Link>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="content-box">
                                                    <div className="icon">
                                                        <span className="icon-pdf"></span>
                                                    </div>
                                                    <div className="text-box">
                                                        <h2><Link href="#">Pdf Download</Link></h2>
                                                        <p><Link href="#">Download</Link></p>
                                                    </div>
                                                </div>

                                                <div className="btn-box">
                                                    <Link href="#"><span className="icon-download"></span></Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="service-details__sidebar-contact text-center">
                                    <div className="service-details__sidebar-contact-img">
                                        <div className="inner">
                                            <img src="assets/images/resources/service-details-sidebar-img.png" alt=""/>
                                        </div>
                                    </div>

                                    <div className="service-details__sidebar-contact-content">
                                        <div className="icon">
                                            <span className="icon-phone"></span>
                                        </div>
                                        <h2><Link href="tel:1234567890">+880 123 456 789</Link></h2>
                                        <h3>If You Need Any Help <br/>
                                            Contact With Us</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Service Details Sidebar*/}

                        {/*Start Service Details Content*/}
                        <div className="col-xl-8">
                            <div className="service-details__content">
                                <div className="service-details__content-img1">
                                    <div className="inner">
                                        <img src="assets/images/services/service-details-img1.jpg" alt="#"/>
                                    </div>
                                </div>

                                <div className="service-details__content-text1">
                                    <h2>Local Track Transport</h2>
                                    <p>As a premier international transport service provider, we specialize in seamlessly
                                        connecting businesses and individuals with efficient and reliable transportation
                                        solutions across borders. Whether it's shipping goods or facilitating the travel of
                                        individuals.</p>
                                </div>

                                <div className="service-details__content-text2">
                                    <h2>Why You Choose This Effective Service</h2>
                                    <p>With a focus on safety, efficiency, and cost-effectiveness, we offer a range of
                                        tailored services to meet the unique needs of our clients, from air and sea freight
                                        to road transportation. Our dedicated team of professionals is committed to
                                        delivering excellence at every stage of the journey, providing peace of mind and
                                        ensuring that your cargo arrives at its destination securely and on schedule.
                                        Entrust your international transport needs to us, and experience the difference of
                                        our trusted and proven services.</p>
                                </div>

                                <div className="service-details__content-img2">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="single-img">
                                                <img src="assets/images/services/service-details-img2.jpg" alt=""/>
                                            </div>
                                        </div>

                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="single-img">
                                                <img src="assets/images/services/service-details-img3.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>

                                    <p>This business idea leverages the growing demand for virtual experiences and the need
                                        for professional support in navigating the virtual event landscape. It's a service
                                        that can cater to businesses, organizations, and individuals looking to make their
                                        virtual events stand out and be successful.</p>
                                </div>

                                <div className="service-details__content-img3">
                                    <img src="assets/images/services/service-details-img4.jpg" alt=""/>
                                </div>

                                <div className="service-details__faq">
                                    <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                        <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                            <div className="accrodion-title">
                                                <h4>Is my technology allowed on tech?</h4>
                                            </div>

                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>As a premier international transport service provider, we specialize
                                                        in seamlessly connecting busines and individuals with efficient and
                                                        reliable transportation solutions across borders. Whether it's
                                                        shipping goods or facilitating the travel of individuals.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                            <div className="accrodion-title">
                                                <h4>What types of cargo can your service handle?</h4>
                                            </div>

                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>As a premier international transport service provider, we specialize
                                                        in seamlessly connecting busines and individuals with efficient and
                                                        reliable transportation solutions across borders. Whether it's
                                                        shipping goods or facilitating the travel of individuals.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                            <div className="accrodion-title">
                                                <h4>What Are the typical stages of a logistic project?</h4>
                                            </div>

                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>As a premier international transport service provider, we specialize
                                                        in seamlessly connecting busines and individuals with efficient and
                                                        reliable transportation solutions across borders. Whether it's
                                                        shipping goods or facilitating the travel of individuals.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                            <div className="accrodion-title">
                                                <h4>Is my technology allowed on tech?</h4>
                                            </div>

                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>As a premier international transport service provider, we specialize
                                                        in seamlessly connecting busines and individuals with efficient and
                                                        reliable transportation solutions across borders. Whether it's
                                                        shipping goods or facilitating the travel of individuals.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={isActive.key == 5 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(5)}>
                                            <div className="accrodion-title">
                                                <h4>Can you assist with customs clearance procedures?</h4>
                                            </div>

                                            <div className="accrodion-content">
                                                <div className="inner">
                                                    <p>As a premier international transport service provider, we specialize
                                                        in seamlessly connecting busines and individuals with efficient and
                                                        reliable transportation solutions across borders. Whether it's
                                                        shipping goods or facilitating the travel of individuals.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*End Service Details Content*/}
                    </div>
                </div>
            </section>
            {/*End Service Details*/}

            </Layout>
        </>
    )
}