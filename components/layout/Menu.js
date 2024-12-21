import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>


            <ul className="main-menu__list">
                <li className="dropdown">
                    <Link href="/">Home </Link>
                    <ul>
                        <li><Link href="/">Home One</Link></li>
                        <li><Link href="index2">Home Two</Link></li>
                        <li><Link href="index3">Home Three</Link></li>
                        <li><Link href="index-dark">Home Dark</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="about">About Us</Link>
                </li>
                <li className="dropdown">
                    <Link href="#">Services</Link>
                    <ul>
                        <li><Link href="service">Services</Link></li>
                        <li><Link href="international-transport">International
                                Transport </Link>
                        </li>
                        <li><Link href="track-transport">Local Track
                                Transport</Link>
                        </li>
                        <li><Link href="personal-delivery">Fast
                                Personal Delivery</Link>
                        </li>
                        <li><Link href="ocean-transport">Safe Ocean
                                Transport</Link>
                        </li>
                        <li><Link href="warehouse-facility">Warehouse
                                Facility</Link>
                        </li>
                        <li><Link href="emergency-transport">Emergency
                                Transport </Link>
                        </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">projects</Link>
                    <ul>
                        <li><Link href="project">Projects</Link></li>
                        <li><Link href="project-details">Project Details</Link>
                        </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Pages</Link>
                    <ul>
                        <li><Link href="team">Team</Link></li>
                        <li><Link href="team-details">Team Details</Link></li>
                        <li><Link href="testimonial">Testimonials</Link></li>
                        <li><Link href="pricing">Pricing</Link></li>
                        <li><Link href="faq">Faq</Link></li>
                        <li><Link href="404">404 Error</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Blog</Link>
                    <ul>
                        <li><Link href="blog">Blog</Link></li>
                        <li><Link href="blog-standard">Blog Standard</Link></li>
                        <li><Link href="blog-left-sidebar">Blog Left
                                Sidebar</Link>
                        </li>
                        <li><Link href="blog-right-sidebar">Blog Right
                                Sidebar</Link>
                        </li>
                        <li><Link href="blog-details">Blog Details</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}
