'use client'

import React, {useRef} from 'react'
import AnimatedTitle from "@/components/AnimatedTitle";
import {gsap} from "gsap";
import Button from "@/components/Button";

const Story = () => {

    const frameRef = useRef('null');


    const handleMouseMove = (e) => {
        const element = frameRef.current

        if (!element) return;
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10
        const rotateY = ((x - centerY) / centerX) * 10

        gsap.to(element, {
            duration: 0.3,
            rotateX, rotateY,
            transformPerspective: 500,
            ease: 'power1.inOut',
        })

    }


    const handleMouseLeave = () => {
        const element = frameRef.current
        gsap.to(element, {
            duration: 0.3,
            rotateX: 0, rotateY: 0,
            transformPerspective: 500,
            ease: 'power1.inOut',
        })

    }

    return (
        <section id={'#story'} className={'min-h-dvh w-screen bg-black text-blue-400'}>
            <div className="flex size-full flex-col items-center py-10 pb-24">
                <p className={'font-general text-sm uppercase md:text-[10px]'}>Yes Text here</p>
                <div className="relative size-full">
                    <AnimatedTitle
                        title={'the st<b>o</b>ry of <br /> a hidden real<b>m</b>'}
                        containerClass="mt-5 text-center text-4xl md:text-[6rem] special-font pointer-events-none mix-blend-difference relative z-10"
                    />
                    <div className={'story-img-container'}>
                        <div className={'story-img-mask'}>
                            <div className={'story-img-content'}>
                                <img
                                    ref={frameRef}
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseUp={handleMouseLeave}
                                    onMouseEnter={handleMouseLeave}
                                    src="/img/entrance.webp"
                                    alt="entrance.webp"
                                    className="object-contain"
                                />
                            </div>
                        </div>

                    </div>
                </div>
                <div className={'-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end'}>
                    <div className={'flex h-full w-fit flex-col items-center md:items-start'}>
                        <p className={'mt-3 max-w-sm text-center font-circularWeb md:text-start'}>Something something</p>
                        <Button title={'Discover More'} id={'realm'} containerClass={'mt-5'}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Story
