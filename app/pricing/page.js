'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    
    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            
        },
        575: {
            slidesPerView: 1,
            
        },
        767: {
            slidesPerView: 2,
            
        },
        991: {
            slidesPerView: 4,
            
        },
        1199: {
            slidesPerView: 5,
            
        },
        1350: {
            slidesPerView: 5,
            
        },
    }
}

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Pricing">
                {/*Start Pricing One*/}
                <section className="pricing-one pricing-one--pricing">
                    <div className="pricing-one__pattern"
                        style={{ backgroundImage: 'url(assets/images/pattern/pricing-v1-pattern.png)' }} ></div>
                    <div className="container">
                        <div className="row">
                            {/*Start Pricing One Single*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                                <div className="pricing-one__single">
                                    <div className="pricing-one__single-inner">
                                        <div className="table-header">
                                            <div className="img-box">
                                                <img src="assets/images/resources/pricing-v1-img1.jpg" alt=""/>
                                            </div>
                                            <div className="title-box">
                                                <h2>Road Cargo</h2>
                                                <h3>$99 <span>/50kg</span></h3>
                                            </div>
                                        </div>

                                        <div className="table-content">
                                            <ul>
                                                <li>
                                                    <div className="icon">
                                                        <span className="fa fa-check-circle"></span>
                                                    </div>

                                                    <div className="text-box">
                                                        <p>Pickup and delivery</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="icon">
                                                        <span className="fa fa-check-circle"></span>
                                                    </div>

                                                    <div className="text-box">
                                                        <p>Custom coverage</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="icon">
                                                        <span className="fa fa-check-circle"></span>
                                                    </div>

                                                    <div className="text-box">
                                                        <p>Customer Management</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="icon">
                                                        <span className="fa fa-check-circle"></span>
                                                    </div>

                                                    <div className="text-box">
                                                        <p>Deliver in 2-3 days</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="icon">
                                                        <span className="fa fa-check-circle"></span>
                                                    </div>

                                                    <div className="text-box">
                                                        <p>24 Hours Support</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="table-footer">
                                            <div className="btn-box">
                                                <Link className="thm-btn" href="#">Choose Plan
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
                            {/*End Pricing One Single*/}

                            {/*Start Pricing One Single*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInDown" data-wow-delay=".3s">
                                <div className="pricing-one__single">
                                    <div className="pricing-one__single-inner">
                                        <div className="table-header">
                                            <div className="img-box">
                                                <img src="assets/images/resources/pricing-v1-img2.jpg" alt=""/>
                                            </div>
                                            <div className="title-box">
                                                <h2>Sea Freight</h2>
                                                <h3>$199 <span>/50kg</span></h3>
                                            </div>
                                        </div>

                                        <div className="table-content">
                                            <ul>
                                                <li>
                                                    <div className="icon">
                                                        <span className="fa fa-check-circle"></span>
                                                    </div>

                                                    <div className="text-box">
                                                        <p>Pickup and delivery</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="icon">
                                                        <span className="fa fa-check-circle"></span>
                                                    </div>

                                                    <div className="text-box">
                                                        <p>Custom coverage</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="icon">
                                                        <span className="fa fa-check-circle"></span>
                                                    </div>

                                                    <div className="text-box">
                                                        <p>Customer Management</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="icon">
                                                        <span className="fa fa-check-circle"></span>
                                                    </div>

                                                    <div className="text-box">
                                                        <p>Deliver in 2-3 days</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="icon">
                                                        <span className="fa fa-check-circle"></span>
                                                    </div>

                                                    <div className="text-box">
                                                        <p>24 Hours Support</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="table-footer">
                                            <div className="btn-box">
                                                <Link className="thm-btn" href="#">Choose Plan
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
                            {/*End Pricing One Single*/}

                            {/*Start Pricing One Single*/}
                            <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
                                <div className="pricing-one__single">
                                    <div className="pricing-one__single-inner">
                                        <div className="table-header">
                                            <div className="img-box">
                                                <img src="assets/images/resources/pricing-v1-img3.jpg" alt=""/>
                                            </div>
                                            <div className="title-box">
                                                <h2>Ship Cargo</h2>
                                                <h3>$250 <span>/100kg</span></h3>
                                            </div>
                                        </div>

                                        <div className="table-content">
                                            <ul>
                                                <li>
                                                    <div className="icon">
                                                        <span className="fa fa-check-circle"></span>
                                                    </div>

                                                    <div className="text-box">
                                                        <p>Pickup and delivery</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="icon">
                                                        <span className="fa fa-check-circle"></span>
                                                    </div>

                                                    <div className="text-box">
                                                        <p>Custom coverage</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="icon">
                                                        <span className="fa fa-check-circle"></span>
                                                    </div>

                                                    <div className="text-box">
                                                        <p>Customer Management</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="icon">
                                                        <span className="fa fa-check-circle"></span>
                                                    </div>

                                                    <div className="text-box">
                                                        <p>Deliver in 2-3 days</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="icon">
                                                        <span className="fa fa-check-circle"></span>
                                                    </div>

                                                    <div className="text-box">
                                                        <p>24 Hours Support</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="table-footer">
                                            <div className="btn-box">
                                                <Link className="thm-btn" href="#">Choose Plan
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
                            {/*End Pricing One Single*/}
                        </div>
                    </div>
                </section>
                {/*End Pricing One*/}

                {/*Start Brand One*/}
                <section className="brand-one brand-one--pricing">
                    <div className="container">
                        <Swiper {...swiperOptions} className="brand-one__carousel owl-carousel owl-theme">
                            <SwiperSlide>
                            {/*Start Brand One Single*/}
                            <div className="brand-one__single">
                                <div className="brand-one__single-inner">
                                    <Link href="#"><img src="assets/images/brand/brand-v1-img1.png" alt=""/></Link>
                                </div>
                            </div>
                            {/*End Brand One Single*/}
                            </SwiperSlide>
                            <SwiperSlide>
                            {/*Start Brand One Single*/}
                            <div className="brand-one__single">
                                <div className="brand-one__single-inner">
                                    <Link href="#"><img src="assets/images/brand/brand-v1-img2.png" alt=""/></Link>
                                </div>
                            </div>
                            {/*End Brand One Single*/}
                            </SwiperSlide>
                            <SwiperSlide>
                            {/*Start Brand One Single*/}
                            <div className="brand-one__single">
                                <div className="brand-one__single-inner">
                                    <Link href="#"><img src="assets/images/brand/brand-v1-img3.png" alt=""/></Link>
                                </div>
                            </div>
                            {/*End Brand One Single*/}
                            </SwiperSlide>
                            <SwiperSlide>
                            {/*Start Brand One Single*/}
                            <div className="brand-one__single">
                                <div className="brand-one__single-inner">
                                    <Link href="#"><img src="assets/images/brand/brand-v1-img4.png" alt=""/></Link>
                                </div>
                            </div>
                            {/*End Brand One Single*/}
                            </SwiperSlide>
                            <SwiperSlide>
                            {/*Start Brand One Single*/}
                            <div className="brand-one__single">
                                <div className="brand-one__single-inner">
                                    <Link href="#"><img src="assets/images/brand/brand-v1-img5.png" alt=""/></Link>
                                </div>
                            </div>
                            {/*End Brand One Single*/}
                            </SwiperSlide>
                            <SwiperSlide>
                            {/*Start Brand One Single*/}
                            <div className="brand-one__single">
                                <div className="brand-one__single-inner">
                                    <Link href="#"><img src="assets/images/brand/brand-v1-img6.png" alt=""/></Link>
                                </div>
                            </div>
                            {/*End Brand One Single*/}
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                {/*End Brand One*/}

            </Layout>
        </>
    )
}