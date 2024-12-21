'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
export default function Faq() {
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
    const [isOpen, setOpen] = useState(false)
    return (
        <>


        <section className="faq-one">
            <div className="shape1 float-bob-x"><img src="assets/images/shapes/faq-v1-shape1.png" alt=""/></div>
            <div className="container">
                <div className="row">
                    {/*Start Faq One Content*/}
                    <div className="col-xl-6">
                        <div className="faq-one__content">
                            <div className="faq-one__content-faq">
                                <div className="sec-title tg-heading-subheading animation-style2">
                                    <div className="sec-title__tagline">
                                        <div className="line"></div>
                                        <div className="text tg-element-title">
                                            <h4>Company's FAQ</h4>
                                        </div>
                                        <div className="icon">
                                            <span className="icon-plane2 float-bob-x3"></span>
                                        </div>
                                    </div>
                                    <h2 className="sec-title__title tg-element-title">Frequently Asked Have <br/>
                                        Any <span>Question?</span> </h2>
                                </div>

                                <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                    <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                        <div className="accrodion-title">
                                            <h4>How do you handle returns or exchanges?</h4>
                                        </div>

                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>We help businesses bring ideas to life in the digital world designing
                                                    & implementing the technology tools that they need to win. We help
                                                    business bring ideas to life in the digital wor</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                        <div className="accrodion-title">
                                            <h4>What does business consulting do?</h4>
                                        </div>

                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>We help businesses bring ideas to life in the digital world designing
                                                    & implementing the technology tools that they need to win. We help
                                                    business bring ideas to life in the digital wor</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                        <div className="accrodion-title">
                                            <h4>Can I cancel a shipment after it's been booked?</h4>
                                        </div>

                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>We help businesses bring ideas to life in the digital world designing
                                                    & implementing the technology tools that they need to win. We help
                                                    business bring ideas to life in the digital wor</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                        <div className="accrodion-title">
                                            <h4>Can you assist with customs clearance procedures?</h4>
                                        </div>

                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>We help businesses bring ideas to life in the digital world designing
                                                    & implementing the technology tools that they need to win. We help
                                                    business bring ideas to life in the digital wor</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Faq One Content*/}

                    {/*Start Faq One Img*/}
                    <div className="col-xl-6">
                        <div className="faq-one__img">
                            <div className="faq-one__img-box">
                                <img src="assets/images/resources/faq-v1-img1.jpg" alt=""/>

                                <div className="faq-one__video-link">
                                    <a onClick={() => setOpen(true)} className="video-popup">
                                        <div className="faq-one__video-icon">
                                            <span className="icon-video"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End Faq One Img*/}
                </div>
            </div>

            {/*Start Sliding Text One*/}
            <div className="sliding-text-one">
                <div className="sliding-text-one__wrap">
                    <ul className="sliding-text__list list-unstyled marquee_mode">
                        <li>
                            <h2 data-hover="100% TRUSTED TRANSPORT" className="sliding-text__title">100% TRUSTED TRANSPORT
                                <img src="assets/images/icon/sliding-text-icon-1.png" alt=""/></h2>
                        </li>
                        <li>
                            <h2 data-hover="100% TRUSTED TRANSPORT" className="sliding-text__title">100% TRUSTED TRANSPORT
                                <img src="assets/images/icon/sliding-text-icon-1.png" alt=""/></h2>
                        </li>
                        <li>
                            <h2 data-hover="100% TRUSTED TRANSPORT" className="sliding-text__title">100% TRUSTED TRANSPORT
                                <img src="assets/images/icon/sliding-text-icon-1.png" alt=""/></h2>
                        </li>
                        <li>
                            <h2 data-hover="100% TRUSTED TRANSPORT" className="sliding-text__title">100% TRUSTED TRANSPORT
                                <img src="assets/images/icon/sliding-text-icon-1.png" alt=""/></h2>
                        </li>
                        <li>
                            <h2 data-hover="100% TRUSTED TRANSPORT" className="sliding-text__title">100% TRUSTED TRANSPORT
                                <img src="assets/images/icon/sliding-text-icon-1.png" alt=""/></h2>
                        </li>
                    </ul>
                </div>
            </div>
            {/*End Sliding Text One*/}
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
            
        </>
    )
}
