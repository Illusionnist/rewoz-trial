import React, {useEffect, useRef} from 'react'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/all";
gsap.registerPlugin(ScrollTrigger)


interface AnimatedTitleProps {
    title: string;
    containerClass?: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ title, containerClass }) => {

    const containRef  = useRef(null);

    useEffect(()=> {
         const ctx = gsap.context(()=> {
             const titleAnimation = gsap.timeline({
                 scrollTrigger: {
                     trigger: containRef.current,
                 start: '100 bottom',
                 end: 'center bottom',
                 toggleActions: 'play none none reverse',
                 }
             });
             titleAnimation.to('.animated-word', {
                 opacity:1,
                 transform: 'translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)',
                 ease: 'power2.inOut',
                 stagger: 0.02,
             })
         }, containRef)

        return()=> ctx.revert()
    }, [])

    return (
        <div className={`animated-tile ${containerClass || ''}`} ref={containRef}>
            {title.split('<br/>').map((line, lineIndex) => (
                <div
                    key={lineIndex}
                    className={'flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3'} // Using standard Tailwind for flex-center
                >
                    {line.split('<b></b>').map((char, charIndex) => (
                        // Render the character directly instead of using dangerouslySetInnerHTML
                        // Each character is wrapped in a span with the 'animated-word' class (consider renaming to 'animated-char' for clarity)
                        <span key={charIndex} className={'animated-word'} dangerouslySetInnerHTML={{ __html: char }}/>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default AnimatedTitle;
