'use client'

import React, {JSX, ReactNode, useRef, useState} from 'react'

interface BentoCardProps {
    src: string;
    title: string | JSX.Element;
    description?: string;
}

const BentoTilt = ({children, className = ''}: { children: ReactNode, className?: string }) => {

    const [transformStyle, setTransformStyle] = useState('')
    const itemRef = useRef(null);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if(!itemRef.current) return;

        const { left, top, width, height } = itemRef.current.getBoundingClientRect();

        const relativeX = (event.clientX - left) / width;
        const relativeY = (event.clientY - top) / height;

        const tiltX = (relativeX - 0.5) * 5;
        const tiltY = (relativeY - 0.5) * -5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.99, 0.99, 0.99)`;

        setTransformStyle(newTransform);
    }
    const handleMouseLeave = () => {

        setTransformStyle('');
    };
    return (
        <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{transform: transformStyle}}>
            {children}
        </div>
    )
}


const BentoCard = ({src, title, description}: BentoCardProps) => {
    return (
        <BentoTilt className={'relative size-full border-hsla'}>
            <video src={src} loop={true} autoPlay={true} muted={true}
                   className={'absolute left-0 top-0 size-full object-cover object-center'}/>
            <div className="relative z-10 flex flex-col justify-between p-5 text-blue-400">
                <h1 className={'bento-title special-font'}>{title}</h1>
                {description && (
                    <p className={'mt-3 max-w-64 text-xs md:text-base'}>{description}</p>
                )}
            </div>
        </BentoTilt>
    )
}
export default BentoCard
