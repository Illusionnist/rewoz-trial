'use client'

import React, {useRef, useState} from 'react'
import Button from "@/components/Button";
import {TiLocationArrow} from "react-icons/ti";


const Hero = () => {

    const [currentIndex, setCurrentIndex] = useState(1)
    const [hasClicked, setHasClicked] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [loadedVideos, setLoadedVideos] = useState(0)
    const totalVideos = 2;
    const nextVideoRef = useRef(null)

    const handleMiniVideoClick = () => {
        setHasClicked(true)
        setCurrentIndex(upcomingVideoIndex)
    }

    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;


    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    }

    const getVideoSrc = (index: number) => `videos/coffee-cup-${index}.mp4`

    return (
        <div className={'relative h-dvh w-screen overflow-x-hidden'}>
            <div id={'video-frame'} className={'relative z-10 h-dvh  w-screen overflow-hidden rounded-lg bg-blue-500'}>
                <div>
                    <div
                        className={'mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'}>
                        <div onClick={handleMiniVideoClick}
                             className={'origin-center scale-50 opacity-0 transition-all duration-500 ease-in-out hover:scale-100 hover:opacity-100'}>
                            <video src={getVideoSrc(upcomingVideoIndex)} ref={nextVideoRef} loop={true} muted={true}
                                   id={'current-video'}
                                   className={'size-64 origin-center scale-150 object-cover object-center'}
                                   onLoadedData={handleVideoLoad}/>
                        </div>
                    </div>
                    <video ref={nextVideoRef} src={getVideoSrc(currentIndex)} loop={true} muted={true} id={'next-video'}
                           className={'absolute-center invisible absolute z-20 size-60 object-cover object-center'}
                           onLoadedData={handleVideoLoad}></video>
                    <video src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)} autoPlay={true}
                           loop={true} muted={true} className={'absolute left-0 top-0 size-full object-center object-cover'} onLoadedData={handleVideoLoad}/>
                </div>
                <h1 className={'special-font hero-heading absolute bottom-5 z-40 right-5 text-orange-400'}>
                    rew<b>a</b>rds
                </h1>
                <div className="absolute left-0 top-0 z-40 size-full">
                    <div className="mt-24 px-5 sm:px-10">
                        <h1 className={'special-font hero-heading text-orange-400'}>
                            M<b>y</b>
                        </h1>
                        <p className={'mb-5 max-w-64 font-robert-regular text-orange-400'}>Shop to earn rewards</p>
                        <Button id={'watch-trailer'} title={'Watch Trailer'} leftIcon={<TiLocationArrow/>} containerClass={'bg-yellow-300 flex-center gap-1'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero
