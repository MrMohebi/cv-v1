import React, {useState, useEffect, } from "react";
import {Menu} from "@material-ui/icons";
import {useSwipeable} from "react-swipeable";
import logs from "../js/logs";

// plugin
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// css
import 'bootstrap/dist/css/bootstrap.css'
import "../styles/index.css"
import 'react-circular-progressbar/dist/styles.css';

//components
import {BriefStory} from "../components/BriefStrory/BriefStory";
import Main from "../components/Main/Main";
import {Helmet} from "react-helmet";

const IndexPage = () => {
    gsap.registerPlugin(ScrollTrigger);
    let [bSOpenClass, setBSOpenClass] = useState("");
    let [mainOpenBSClass, setMainOpenBSClass] = useState("");
    let [menuIconClass, setMenuIconClass] = useState("");

    let openBriefStory = () =>{
        if(bSOpenClass.length < 2){
            setBSOpenClass(" open-bs ")
            setMainOpenBSClass(" main-open-bs ")
            setMenuIconClass(" hide-menu-icon ")
        }
    }
    let closeBriefStory = ()=>{
        if(bSOpenClass.length > 2){
            setBSOpenClass("")
            setMainOpenBSClass("")
            setMenuIconClass("")
        }
    }

    const handlers = useSwipeable({
        onSwipedLeft: closeBriefStory,
        onSwipedRight: openBriefStory,
    });

    useEffect(()=>{
        logs()
    },[])

    return (
    <main className={"d-flex align-items-center justify-content-center"}>
        <Helmet>
            <title>MMMohebi CV</title>
        </Helmet>
        <div {...handlers} className={"main-container"}>
            <div onClick={openBriefStory} className={"menu-icon d-flex justify-content-center align-items-center" + menuIconClass}>
                <Menu/>
            </div>
            <BriefStory bSOpenClass={bSOpenClass} tapExitBSFunc={closeBriefStory}/>
            <Main mainOpenBSClass={mainOpenBSClass} tapExitBSFunc={closeBriefStory}/>
            {/*<div className={"sidebar"}></div>*/}
        </div>
    </main>
    )
}

export default IndexPage
