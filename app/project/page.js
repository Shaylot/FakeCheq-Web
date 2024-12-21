import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Project">
                {/*Start Project One*/}
                <section className="project-one project-one--project">
                    <div className="container">
                        <div className="row">
                            {/*Start Project One Single*/}
                            <div className="col-xl-5 col-lg-5 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="project-one__single">
                                    <div className="project-one__single-img">
                                        <div className="inner">
                                            <img src="assets/images/project/project-v1-img5.jpg" alt="#"/>
                                            <div className="project-one__overlay-content">
                                                <div className="text-box">
                                                    <p>Logistic</p>
                                                    <h2><Link href="project-details">Warehouse Inventory </Link></h2>
                                                </div>

                                                <div className="icon">
                                                    <Link href="project-details"><span className="icon-right-arrow21"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*End Project One Single*/}

                            {/*Start Project One Single*/}
                            <div className="col-xl-7 col-lg-7 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="project-one__single">
                                    <div className="project-one__single-img">
                                        <div className="inner">
                                            <img src="assets/images/project/project-v1-img1.jpg" alt="#"/>
                                            <div className="project-one__overlay-content">
                                                <div className="text-box">
                                                    <p>Logistic</p>
                                                    <h2><Link href="project-details">Warehouse Inventory </Link></h2>
                                                </div>

                                                <div className="icon">
                                                    <Link href="project-details"><span className="icon-right-arrow21"></span></Link>
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
                                            <img src="assets/images/project/project-v1-img2.jpg" alt="#"/>
                                            <div className="project-one__overlay-content">
                                                <div className="text-box">
                                                    <p>Logistic</p>
                                                    <h2><Link href="project-details">Warehouse Inventory </Link></h2>
                                                </div>

                                                <div className="icon">
                                                    <Link href="project-details"><span className="icon-right-arrow21"></span></Link>
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
                                            <img src="assets/images/project/project-v1-img3.jpg" alt="#"/>
                                            <div className="project-one__overlay-content">
                                                <div className="text-box">
                                                    <p>Logistic</p>
                                                    <h2><Link href="project-details">Warehouse Inventory </Link></h2>
                                                </div>

                                                <div className="icon">
                                                    <Link href="project-details"><span className="icon-right-arrow21"></span></Link>
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
                                            <img src="assets/images/project/project-v1-img4.jpg" alt="#"/>
                                            <div className="project-one__overlay-content">
                                                <div className="text-box">
                                                    <p>Logistic</p>
                                                    <h2><Link href="project-details">Warehouse Inventory </Link></h2>
                                                </div>

                                                <div className="icon">
                                                    <Link href="project-details"><span className="icon-right-arrow21"></span></Link>
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