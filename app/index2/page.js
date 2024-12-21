
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home2/About"
import WhyChooseUs from "@/components/sections/home2/WhyChooseUs"
import Banner from "@/components/sections/home2/Banner"
import Blog from "@/components/sections/home2/Blog"
import Brands from "@/components/sections/home2/Brands"
import Cta from "@/components/sections/home2/Cta"
import Funfacts from "@/components/sections/home2/Funfacts"
import Projects from "@/components/sections/home2/Projects"
import Process from "@/components/sections/home2/Process"
import Services from "@/components/sections/home2/Services"
import Team from "@/components/sections/home2/Team"
import Testimonial from "@/components/sections/home2/Testimonial"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Banner />
                <Funfacts />
                <About />
                <Services />
                <Projects />
                <Cta />
                <Team />
                <Testimonial />
                <Brands />
                <WhyChooseUs />
                <Process />
                <Blog />
            </Layout>
        </>
    )
}