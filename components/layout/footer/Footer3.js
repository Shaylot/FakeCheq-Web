import Link from "next/link"

export default function Footer3() {
    return (
        <>
       
        {/*Start Footer Two*/}
        <footer className="footer-one footer-one--two">
            <div className="footer-one__bottom">
                <div className="container">

                    <div className="footer-one__bottom-inner">
                        <div className="footer-one__bottom-text">
                            <p>© Copyright 2024 <Link href="/">Deepfake Detection.</Link> All Rights Reserved</p>
                        </div>

                        <div className="footer-one__social-links">
                            <ul>
                                <li>
                                    <Link href="#"><span className="icon-facebook-f"></span></Link>
                                </li>

                                <li>
                                    <Link href="#"><span className="icon-instagram"></span></Link>
                                </li>

                                <li>
                                    <Link href="#"><span className="icon-twitter1"></span></Link>
                                </li>
                                <li>
                                    <Link href="#"><span className="icon-linkedin"></span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        {/*End Footer Two*/}
      


        </>
    )
}
