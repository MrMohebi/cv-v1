import React, {useEffect, useRef, useState} from "react";
import useIsInViewport from "use-is-in-viewport";

export const AnimatedNumber = (props)=>{
    const [isPlayed, setIsPlayed] = useState(false)
    const [isInViewport, targetRef] = useIsInViewport()
    const numRef = useRef();

    //No easing
    // function constant (duration, range, current) {
    //     return duration / range;
    // }
    //Linear easing
    // function linear (duration, range, current) {
    //     return ((duration * 2) / Math.pow(range, 2)) * current;
    // }
    //Quadratic easing
    function quadratic (duration, range, current) {
        return ((duration * 3) / Math.pow(range, 3)) * Math.pow(current, 2);
    }
    function animateValue(ref, end, start, duration, easing) {
        let range = end - start;
        let current = start;
        let increment = end > start? 1 : -1;

        let step = function() {
            current += increment;
            ref.current.innerHTML = current;

            if (current !== end) {
                setTimeout(step, easing(duration, range, current));
            }
        };
        setTimeout(step, easing(duration, range, start));
    }

    useEffect(()=>{
        if(isInViewport && !isPlayed){
            animateValue(numRef, props['end'], props['start'], props['duration'], quadratic)
            setIsPlayed(true);
        }
    }, [isPlayed, isInViewport, props])

    return(
        <div style={{display:"inline"}} ref={targetRef}><div style={{display:"inline"}} ref={numRef}>{props['end']}</div></div>
    )
}