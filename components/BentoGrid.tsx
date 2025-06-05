import React from 'react'
import BentoCard from "@/components/BentoCard";
import {TiLocationArrow} from "react-icons/ti";

const BentoGrid = () => {
    return (
        <section className={'bg-black pb-52'}>
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <p className={'font-circularWeb text-lg text-orange-400'}>A Revolutionary Customer Loyalty
                        Program</p>

                    <p className={'max-w-md font-circularWeb text-lg text-orange-400 opacity-50'}>No Tech Hassles, Just
                        More Sales & Engagement!</p>
                </div>
                <div className={'border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'}>
                    <BentoCard src={'/videos/feature-1.mp4'} title={<>radia<b>n</b>t</>}
                               description={'Things do things'}/>
                </div>
                <div className={'grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'}>
                    <div className={'bento-tilt_1 row-span-1 col-span-2 md:col-span-1 md:row-span-2'}>
                        <BentoCard src={'/videos/feature-2.mp4'} title={<>radia<b>n</b>t</>}
                                   description={'Things do things'}/>
                    </div>
                    <div className={'bento-tilt_1 row-span-1 col-span-3 md:col-span-1 ms-32 md:ms-0'}>
                        <BentoCard src={'/videos/feature-3.mp4'} title={<>nexus</>} description={'Things do things'}/>
                    </div>
                    <div className={'bento-tilt_1 row-span-1 col-span-3 md:col-span-1 me-14 md:me-0'}>
                        <BentoCard src={'/videos/feature-4.mp4'} title={<>nexus</>} description={'Things do things'}/>
                    </div>

                    <div className={'bento-tilt_2'}>
                        <div className="flex size-full flex-col justify-between bg-orange-600">
                            <h1 className={'bento-title special-font max-w-64 p-5'}>
                                M<b>o</b>re co<b>m</b>ing so<b>o</b>n!
                            </h1>
                            <TiLocationArrow className={'m-5 scale-[5] self-end'}/>
                        </div>
                    </div>
                    <div className={'bento-tilt_2'}>
                        <div className="flex size-full flex-col justify-between bg-orange-600">
                            <BentoCard src={'/videos/feature-5.mp4'} title={<>nexus</>} description={'Things do things'}/>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default BentoGrid
