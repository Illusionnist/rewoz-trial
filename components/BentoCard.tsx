import React, {JSX} from 'react'

interface BentoCardProps{
    src: string;
    title: string | JSX.Element;
    description?: string;
}

const BentoCard = ({src, title, description}: BentoCardProps) => {
    return (
        <div className={'relative size-full'}>
            <video src={src} loop={true} autoPlay={true} muted={true} className={'absolute left-0 top-0 size-full object-cover object-center'}/>
            <div className="relative z-10 flex flex-col justify-between p-5 text-blue-400">
                <h1 className={'bento-title special-font'}>{title}</h1>
                {description && (
                    <p className={'mt-3 max-w-64 text-xs md:text-base'}>{description}</p>
                )}
            </div>
        </div>
    )
}
export default BentoCard
