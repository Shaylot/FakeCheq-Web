'use client'
import { useState } from 'react'
import CounterUp from "@/components/elements/CounterUp"
import ModalVideo from 'react-modal-video'
export default function WhyChooseUs() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
       
       <section className="why-choose-two">
            <div className="why-choose-two__bg"
                style={{ backgroundImage: 'url(assets/images/backgrounds/why-choose-v2-bg.jpg)' }} >
                <div className="shape3 float-bob-x"><img src="assets/images/shapes/why-choose-v2-shape3.png" alt=""/></div>
                <div className="why-choose-two__video-box">
                    <a onClick={() => setOpen(true)} className="video-popup">
                        <div className="why-choose-two__video-box-icon">
                            <span className="icon-video"></span>
                            <i className="ripple"></i>
                        </div>
                    </a>
                </div>
            </div>
            <div className="shape1"><img src="assets/images/shapes/why-choose-v2-shape1.png" alt=""/></div>
            <div className="container">
                <div className="why-choose-two__content">
                    <div className="sec-title tg-heading-subheading animation-style2">
                        <div className="sec-title__tagline">
                            <div className="line"></div>
                            <div className="text tg-element-title">
                                <h4>WHy choose us</h4>
                            </div>
                            <div className="icon">
                                <span className="icon-plane2 float-bob-x3"></span>
                            </div>
                        </div>
                        <h2 className="sec-title__title tg-element-title">Transportation Services We <br/> Are Often
                            <span>Considered</span>
                        </h2>
                    </div>

                    <div className="why-choose-two__content-text">
                        <p>Logistic service provider company plays a pivotal role in the global supply
                            chain ecosystem by efficiently managing the movement of goods from origin to final
                            destination. These companies offer a diverse.</p>
                    </div>

                    <div className="why-choose-two__content-bottom">
                        <div className="shape2 float-bob-x"><img src="assets/images/shapes/why-choose-v2-shape2.png" alt=""/>
                        </div>
                        <div className="client-box">
                            <ul>
                                <li>
                                    <div className="img-box">
                                        <img src="assets/images/resources/why-choose-v2-img1.png" alt=""/>
                                    </div>
                                </li>

                                <li>
                                    <div className="img-box">
                                        <img src="assets/images/resources/why-choose-v2-img2.png" alt=""/>
                                    </div>
                                </li>

                                <li>
                                    <div className="img-box">
                                        <img src="assets/images/resources/why-choose-v2-img3.png" alt=""/>
                                    </div>
                                </li>

                                <li>
                                    <div className="img-box">
                                        <img src="assets/images/resources/why-choose-v2-img4.png" alt=""/>
                                    </div>
                                </li>
                            </ul>

                            <div className="count-text-box count-box">
                                <h3>1500</h3>
                                <span className="plus">+</span>
                            </div>
                            <h3>Happy Clients</h3>
                        </div>

                        <div className="why-choose-two__content-bottom-content wow fadeInRight" data-wow-delay="0ms"
                            data-wow-duration="1500ms">
                            <div className="why-choose-two__pattern2"
                                style={{ backgroundImage: 'url(assets/images/pattern/why-choose-v2-pattern2.png)' }} ></div>
                            <ul>
                                <li className="why-choose-two__single">
                                    <div className="why-choose-two__single-top">
                                        <div className="icon">
                                            <span className="icon-international-shipping"></span>
                                        </div>

                                        <div className="title">
                                            <h4>Global Logistics <br/>
                                                Operation</h4>
                                        </div>
                                    </div>
                                    <div className="text-box">
                                        <p>A logistic service provider company <br/> plays a role in the global chain
                                        </p>
                                    </div>
                                </li>

                                <li className="why-choose-two__single">
                                    <div className="why-choose-two__single-top">
                                        <div className="icon">
                                            <span className="icon-protection"></span>
                                        </div>

                                        <div className="title">
                                            <h4>Safety & Security <br/>
                                                Delivery</h4>
                                        </div>
                                    </div>
                                    <div className="text-box">
                                        <p>A logistic service provider company <br/> plays a role in the global chain
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <ul>
                                <li className="why-choose-two__single">
                                    <div className="why-choose-two__single-top">
                                        <div className="icon">
                                            <span className="icon-professional-services"></span>
                                        </div>

                                        <div className="title">
                                            <h4>Professional Logistics <br/> Management</h4>
                                        </div>
                                    </div>
                                    <div className="text-box">
                                        <p>A logistic service provider company <br/> plays a role in the global chain
                                        </p>
                                    </div>
                                </li>

                                <li className="why-choose-two__single">
                                    <div className="why-choose-two__single-top">
                                        <div className="icon">
                                            <span className="icon-tracking"></span>
                                        </div>

                                        <div className="title">
                                            <h4>Real Time location <br/>
                                                Tracking </h4>
                                        </div>
                                    </div>
                                    <div className="text-box">
                                        <p>A logistic service provider company <br/> plays a role in the global chain
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
        </>
    )
}
