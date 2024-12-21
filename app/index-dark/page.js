import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import About from "@/components/sections/home1/About"
import Service from "@/components/sections/home1/Service"
import Projects from "@/components/sections/home1/Projects"
import WhyChooseUs from "@/components/sections/home1/WhyChooseUs"
import Skills from "@/components/sections/home1/Skills"
import Testimonial from "@/components/sections/home1/Testimonial"
import Faq from "@/components/sections/home1/Faq"
import Cta from "@/components/sections/home1/Cta"
import Funfacts from "@/components/sections/home1/Funfacts"
import Team from "@/components/sections/home1/Team"
import Blog from "@/components/sections/home1/Blog"
import Brands from "@/components/sections/home1/Brands"

export default function Home() {

    return (
        <>
            <div className="dark-version">
                <Layout headerStyle={1} footerStyle={1}>
                    <Banner />
                    <About />
                    <Service />
                    <Projects />
                    <WhyChooseUs />
                    <Skills />
                    <Testimonial />
                    <Faq />
                    <Cta />
                    <Funfacts />
                    <Team />
                    <Blog />
                    <Brands />
                </Layout>
            </div>

        </>
    )
}