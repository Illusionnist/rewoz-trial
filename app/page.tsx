import React from 'react'
import Hero from "@/components/Hero";
import About from "@/components/About";
import BentoGrid from "@/components/BentoGrid";
import Story from "@/components/Story";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Page = () => {
    return (
        <main className={'relative min-h-screen w-screen overflow-x-hidden'}>
            <Hero/>
            <About/>
            <BentoGrid/>
            <Story/>
            <Contact/>
            <Footer/>
        </main>

    )
}
export default Page
