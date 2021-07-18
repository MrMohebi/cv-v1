import React, {useState, useEffect} from "react";
import {Menu} from "@material-ui/icons";


// plugin
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {Helmet} from "react-helmet";

// css
import 'bootstrap/dist/css/bootstrap.css'
import "../../styles/index.css"
import 'react-circular-progressbar/dist/styles.css';

//components
import {BriefStoryFA} from "../../components/LangFa/BriefStrory_FA/BriefStoryFA";
import MainFA from "../../components/LangFa/Main_FA/MainFA";
import {useSwipeable} from "react-swipeable";

const IndexPage = () => {
    gsap.registerPlugin(ScrollTrigger);
    let [bSOpenClass, setBSOpenClass] = useState("");
    let [mainOpenBSClass, setMainOpenBSClass] = useState("");
    let [menuIconClass, setMenuIconClass] = useState("");

    useEffect(()=>{
        document.body.style.direction = "rtl"
        document.body.style.fontFamily = "AppIranSans"
    },[])

    let openBriefStory = () =>{
        if(bSOpenClass.length < 2){
            setBSOpenClass(" open-bs ")
            setMainOpenBSClass(" main-open-bs_FA ")
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
        onSwipedLeft: openBriefStory,
        onSwipedRight: closeBriefStory,
    });
    return (
        <main className={"d-flex align-items-center justify-content-center"}>
            <Helmet>
                <title>MMMohebi CV</title>
            </Helmet>
            <div {...handlers} className={"main-container"}>
                <div onClick={openBriefStory} className={"menu-icon d-flex justify-content-center align-items-center" + menuIconClass}>
                    <Menu/>
                </div>
                <BriefStoryFA bSOpenClass={bSOpenClass} tapExitBSFunc={closeBriefStory}/>
                <MainFA mainOpenBSClass={mainOpenBSClass} tapExitBSFunc={closeBriefStory}/>
                {/*<div className={"sidebar"}></div>*/}
            </div>
        </main>
    )
}

export default IndexPage
