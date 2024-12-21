'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,    
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
            slidesPerView: 1,
            
        },
        991: {
            slidesPerView: 1,
            
        },
        1199: {
            slidesPerView: 1,
            
        },
        1350: {
            slidesPerView: 1,
            
        },
    }



}


export default function Testimonial() {
    return (
        <>

        
<section className="testimonial-one">
            <div className="testimonial-one__pattern"
                style={{ backgroundImage: 'url(assets/images/pattern/testimonial-v1-pattern.png)' }} ></div>
            <div className="container">
                <div className="row">
                    {/*Start Testimonial One Content*/}
                    <div className="col-xl-6">
                        <div className="testimonial-one__content">
                            <div className="big-title wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                                <h2>TESTIMONIALS</h2>
                            </div>
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <div className="line"></div>
                                    <div className="text tg-element-title">
                                        <h4>Client Testimonial</h4>
                                    </div>
                                    <div className="icon">
                                        <span className="icon-plane2 float-bob-x3"></span>
                                    </div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">What Our Customers <br/>
                                    Say <span>About Us</span> </h2>
                            </div>

                            <div className="testimonial-one__carousel owl-carousel owl-theme">
                            <Swiper {...swiperOptions} className="service-one__carousel owl-carousel owl-theme owl-dot-style1">
                                <SwiperSlide>
                                    <div className="testimonial-one__single">
                                        <div className="icon">
                                            <span className="icon-quote1"></span>
                                        </div>
                                        <div className="testimonial-one__single-inner">
                                            <div className="shape1"><img src="assets/images/shapes/testimonial-v1-shape1.png"
                                                    alt=""/></div>
                                            <div className="author-box">
                                                <div className="img-box">
                                                    <img src="assets/images/testimonial/testimonial-v1-img1.png" alt=""/>
                                                </div>
                                                <div className="author-info">
                                                    <h2>Ronald Richards</h2>
                                                    <div className="bottom-text">
                                                        <p>MANAGER</p>
                                                        <div className="rating-box">
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-box">
                                                <p>A logistic service provider company plays a pivotal role in the global
                                                    supply chain A logistic service provider companyA logistic service
                                                    provider company plays a pivotal role in the global supply chain A
                                                    logistic service provider company</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>  
                                    <div className="testimonial-one__single">
                                        <div className="icon">
                                            <span className="icon-quote1"></span>
                                        </div>
                                        <div className="testimonial-one__single-inner">
                                            <div className="shape1"><img src="assets/images/shapes/testimonial-v1-shape1.png"
                                                    alt=""/></div>
                                            <div className="author-box">
                                                <div className="img-box">
                                                    <img src="assets/images/testimonial/testimonial-v1-img1.png" alt=""/>
                                                </div>
                                                <div className="author-info">
                                                    <h2>Ronald Richards</h2>
                                                    <div className="bottom-text">
                                                        <p>MANAGER</p>
                                                        <div className="rating-box">
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-box">
                                                <p>A logistic service provider company plays a pivotal role in the global
                                                    supply chain A logistic service provider companyA logistic service
                                                    provider company plays a pivotal role in the global supply chain A
                                                    logistic service provider company</p>
                                            </div>
                                        </div>
                                    </div>                         
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-one__single">
                                        <div className="icon">
                                            <span className="icon-quote1"></span>
                                        </div>
                                        <div className="testimonial-one__single-inner">
                                            <div className="shape1"><img src="assets/images/shapes/testimonial-v1-shape1.png"
                                                    alt=""/></div>
                                            <div className="author-box">
                                                <div className="img-box">
                                                    <img src="assets/images/testimonial/testimonial-v1-img1.png" alt=""/>
                                                </div>
                                                <div className="author-info">
                                                    <h2>Ronald Richards</h2>
                                                    <div className="bottom-text">
                                                        <p>MANAGER</p>
                                                        <div className="rating-box">
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                            <i className="icon-star"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-box">
                                                <p>A logistic service provider company plays a pivotal role in the global
                                                    supply chain A logistic service provider companyA logistic service
                                                    provider company plays a pivotal role in the global supply chain A
                                                    logistic service provider company</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            </div>
                        </div>
                    </div>
                    {/*End Testimonial One Content*/}


                    {/*Start Testimonial One Img*/}
                    <div className="col-xl-6">
                        <div className="testimonial-one__img">
                            <div className="testimonial-one__img1 reveal">
                                <img src="assets/images/testimonial/testimonial-v1-img2.jpg" alt=""/>
                            </div>

                            <div className="testimonial-one__img-author">
                                <ul>
                                    <li>
                                        <div className="img-box"><img src="assets/images/banner/banner-v1-img2.jpg" alt="#"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-box"><img src="assets/images/banner/banner-v1-img3.jpg" alt="#"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-box"><img src="assets/images/banner/banner-v1-img4.jpg" alt="#"/>
                                        </div>
                                    </li>
                                </ul>

                                <div className="text-box">
                                    <h2>Customer Satisfied</h2>
                                    <p>4.8 (15k Reviews)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Testimonial One Img*/}
                </div>
            </div>
        </section>
       

            
        </>
    )
}
