'use client'

import React, {useEffect, useRef, useState} from 'react'
import Image from "next/image";
import Button from "@/components/Button";
import {TiLocationArrow} from "react-icons/ti";
import {useWindowScroll} from "react-use";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const Navbar = () => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false)
    const [isIndicatorActive, setIsIndicatorActive] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isNavVisible, setIsNavVisible] = useState(true)
    
    const navContainerRef = useRef<HTMLDivElement | null>(null)
    const navItems = ['About', 'Partner', 'Sign up', 'Contact']
    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev)
        setIsIndicatorActive((prev) => !prev)
    }
    const audioElementRef = useRef<HTMLAudioElement | null>(null);
    const {y: currentScrollY} = useWindowScroll()

    
    useEffect(() => {
        if (currentScrollY === 0){
            setIsNavVisible(true);
            navContainerRef.current?.classList.remove('floating-nav');
        }else if (currentScrollY > lastScrollY) {
            setIsNavVisible(false);
            navContainerRef.current?.classList.add('floating-nav');
        } else if (currentScrollY < lastScrollY){
            setIsNavVisible(true);
            navContainerRef.current?.classList.add('floating-nav');
        }

        setLastScrollY(currentScrollY)
    }, [currentScrollY, lastScrollY]);

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.1,
        })
    }, [isNavVisible]);

    useEffect(()=> {
        if (isAudioPlaying) {
            audioElementRef.current?.play()
        } else {
            audioElementRef.current?.pause()
        }
    }, [isAudioPlaying])



    return (
        <div ref={navContainerRef} className={'fixed inset-x-0 top-4 z-100 h-16 border-none transition-all duration-700 sm:inset-x-6'}>
            <header className={'absolute top-1/2 w-full -translate-y-1/2'}>
                <nav className={'flex size-full items-center justify-between px-4'}>
                    <div className={'flex items-center gap-7'}>
                        <Image src={'/img/logoDR.png'} alt={'logo'} className={'w-10'} width={40} height={40}/>
                        <Button title={'Sign in'} id={'Sign In'} rightIcon={<TiLocationArrow/>} containerClass={'bg-orange-400 md:flex hidden items-center gap-1 justify-center'}/>
                    </div>
                    <div className={'flex items-center h-full'}>
                        <div className={'hidden md:block'}>
                            {navItems.map((item, index) => (
                                <a key={index} href={`#${item.toLowerCase()}`} className={'nav-hover-btn'}>
                                    {item}
                                </a>
                            ))}
                        </div>

                        <button className={'ml-10 flex items-center space-x-0.5'} onClick={toggleAudioIndicator}>
                            <audio src="/audio/loop.mp3" ref={audioElementRef} className={'hidden'} loop={true} />
                                {[1, 2, 3, 4].map((bar)=>(
                                    <div key={bar} className={`indicator-line ${isIndicatorActive ? 'active' : ''}`} style={{ '--animation-order': bar} as React.CSSProperties}/>
                                ))}
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default Navbar
