import React, {useEffect, useState} from "react";
import {Progress} from "react-sweet-progress";
import { gsap } from "gsap";
import useIsInViewport from "use-is-in-viewport"
import "react-sweet-progress/lib/style.css";

export const AnimatedLinePBar = (props) => {
    const id = "id" + Math.floor(Math.random()*100000)
    const [isPlayed, setIsPlayed] = useState(false)
    const [isInViewport, targetRef] = useIsInViewport()

    useEffect(()=>{
        if(isInViewport && !isPlayed){
            gsap.to(
                document.getElementById(id).getElementsByClassName("react-sweet-progress-line-inner"),
                {width:`${props["percent"]}%`,ease: "power2.out", duration:3})
            setIsPlayed(true);
        }
    }, [isPlayed, isInViewport,props])

    return(
        <div id={id} ref={targetRef}>
            <Progress percent={2} style={{width:`${props["width"]}px`}} theme={{active: {color:props["color"], trailColor:props["trailColor"]}}} symbolClassName={"d-none"}/>
        </div>
    );
}