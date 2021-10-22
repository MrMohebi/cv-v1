import React, {useState} from "react";
import {Menu} from "@material-ui/icons";
import {useSwipeable} from "react-swipeable";

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
    console.log(logEinstein)
    console.log(logMaze)

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






const logEinstein =
    "       -''--.\n" +
    "       _`>   `\\.-'<\n" +
    "    _.'     _     '._\n" +
    "  .'   _.='   '=._   '.\n" +
    "  >_   / /_\\ /_\\ \\   _<\n" +
    "    / (  \\o/\\\\o/  ) \\\n" +
    "    >._\\ .-,_)-. /_.<\n" +
    "        /__/ \\__\\ \n" +
    "          '---'    \n"+
    "       You are curious,\n"+
    "        I Like You :)\n"


const logMaze = "           solve this instead of wasting time here :)\n" +
    "  _________________________________________________________________\n" +
    " |         ___________            |   __________________________   |\n" +
    " |  send  |   _____   |  |  |  |  |  |   ____________________   |  |\n" +
    " |________|  |     |_____|  |  |_____|  |   _________________   |  |\n" +
    " |___________|  |___________|  |   _____|  |   ___________   |  |  |\n" +
    " |   ___________|   ___________|  |  ______|  |   ________|  |_____|\n" +
    " |  |   ___________|   ___________|___________|  |___________|     |\n" +
    " |  |  |   __         |   _________________   |_____   |     |  |  |\n" +
    " |  |  |  |  |  |  |  |  |   ______________|_____   |  |  |  |  |  |\n" +
    " |  |  |  |  |  |  |_____|  |   _____   |   __   |  |  |  |  |  |  |\n" +
    " |  |  |  |  |  |___________|  |     |  |  |  |  |  |  |  |  |  |  |\n" +
    " |  |  |  |  |_________________|  |  |  |  |  |  |  |  |  |  |  |  |\n" +
    " |  |  |  |  |   _________________|_____|  |  |  |  |  |  |  |  |  |\n" +
    " |  |  |  |  |  |   __    ______________|  |  |  |  |   __|  |  |  |\n" +
    " |  |  |  |  |  |  |  |  |   ________   |  |  |  |  |  |  |  |  |  |\n" +
    " |  |  |  |  |  |  |  |  |  |   _____   |  |  |  |  |  | ____|  |  |\n" +
    " |  |  |  |  |  |  |  |  |  |  |  ______|  |  |  |  |   ________|  |\n" +
    " |  |  |_____|  |  |  |  |  |  |_____   |  |  |  |  |  |           |\n" +
    " |  |_____   |  |__|  |  |  |________|  |  |  |  |__|  |   answer  |\n" +
    " |___________|_______________________|________|________|___________|\n" +
    "                      To Me: MMMohebi@outlook.com ;) "