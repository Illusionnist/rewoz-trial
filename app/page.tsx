import React from 'react'
import Hero from "@/components/Hero";
import About from "@/components/About";
import BentoGrid from "@/components/BentoGrid";

const Page = () => {
    return (
        <main className={'relative min-h-screen w-screen overflow-x-hidden'}>
            <Hero/>
            <About/>
            <BentoGrid/>
        </main>
    )
}
export default Page
