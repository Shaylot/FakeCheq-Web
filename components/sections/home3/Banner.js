
'use client'
import Main from "@/components/Main"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    loop: true,
    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}


export default function Banner() {


     const [isMobile, setIsMobile] = useState(false);
      
          const detectScreenType = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 768) {
              setIsMobile(true);
            } else {
              setIsMobile(false);
            }
          };
        
          useEffect(() => {
            detectScreenType(); // Initial detection
            window.addEventListener("resize", detectScreenType); // Update on resize
        
            return () => {
              window.removeEventListener("resize", detectScreenType); // Cleanup
            };
          }, []);

    return (
        <>
             
        <section className="slider-one">
            <div className="" >
                <Swiper {...swiperOptions} className="slider-one__carousel owl-carousel owl-theme">
                    <SwiperSlide>
                        <div className="slider-one__single" style={{height:isMobile?"760px":"1000px"}}>
                            <div className="slider-one__single-bg"
                                style={{ backgroundImage: 'url(https://wallpapercave.com/wp/w6Nm03D.jpg)' }} ></div>
                            <div className="shape1"></div>
                            <div className="shape2"></div>
                            <div className="shape3"></div>
                            <div className="shape4"></div>
                            <div className="container" >
                                <div className="slider-one__single-inner" >
                                     <Main isMobile={isMobile}/>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>

        
        
            
        </>
    )
}
