'use client'

import React from 'react'
import Image from "next/image";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/all";
import AnimatedTitle from "@/components/AnimatedTitle";
gsap.registerPlugin(ScrollTrigger)

const About = () => {

    useGSAP(()=> {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin:true,
                pinSpacing:true,
            }
        })

        clipAnimation.to('.mask-clip-path', {
            width:'100vw',
            height: '100vh',
            borderRadius: 0,
        })
    })

    return (
        <div id={'about'} className={'min-h-screen w-screen'}>
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5 ">
                <h2 className={'font-general text-sm uppercase'}>Welcome to Rewoz</h2>
                <AnimatedTitle title="Disc<b>o</b>ver the new <br/> cust<b>o</b>mer rewards pr<b>o</b>gram" containerClass={'mt-5 text-center text-4xl leading-[0.8] md:text-[6rem] special-font'}/>
                <div className="about-subtext">
                    <p>Your rewards journey begins today</p>
                </div>
            </div>
            <div className="h-dvh w-screen" id={'clip'}>
               <div className={'mask-clip-path about-image'}>
                   <Image src={'/img/about.png'} alt={'background'} className={'absolute left-0 top-0 size-full object-cover'} fill={true}/>
               </div>
            </div>
        </div>
    )
}
export default About
