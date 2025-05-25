import React from 'react'

interface ButtonProps {
    id?: string;
    title: string;
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
    containerClass?: string;
}
const Button = ({id, title, rightIcon, leftIcon, containerClass}: ButtonProps) => {
    return (
        <button id={id}
                className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-5 py-3 text-black ${containerClass}`}>
            {leftIcon}
            <span className={'relative inline-flex overflow-hidden font-general text-xs uppercase'}>
                <div>
                    {title}
                </div>
            </span>
            {rightIcon}
        </button>
    )
}
export default Button
