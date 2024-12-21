
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home3/About"
import Banner from "@/components/sections/home3/Banner"
import Funfacts from "@/components/sections/home3/Funfacts"
import Services from "@/components/sections/home3/Services"
import Blog from "@/components/sections/home3/Blog"
import Testimonial from "@/components/sections/home3/Testimonial"
import Quote from "@/components/sections/home3/Quote"
import Features from "@/components/sections/home3/Features"
import Pricing from "@/components/sections/home3/Pricing"
import Team from "@/components/sections/home3/Team"
import Brands from "@/components/sections/home3/Brands"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>
                <Banner />
                <Features />
                <About />
                <Services />
                <Team/>
                <Quote />
                <Testimonial />
                <Pricing />
                <Funfacts />
                <Blog />
                <Brands />
                
            </Layout>
        </>
    )
}