import React, {useState} from "react";
import {langFa, langEn} from "../lang/langVal";

// liberary
import { CircularProgressbar } from 'react-circular-progressbar';
import { Badge, Tooltip, Button } from '@material-ui/core';
import { GitHub, Telegram, BlurOn } from '@material-ui/icons';
import { easeQuadInOut } from "d3-ease";

// plugin
import { StaticImage } from "gatsby-plugin-image"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// css
import 'bootstrap/dist/css/bootstrap.css'
import "../styles/index.css"
import 'react-circular-progressbar/dist/styles.css';


//providers
import AnimatedProgressProvider from "../providers/AnimatedProgressProvider";
import {AnimatedLinePBar} from "../providers/AnimatedLinePBar";
import {AnimatedNumber} from "../providers/AnimatedNumber";

// img
import headerImg1 from "../images/header-parts/12.png"
import headerImg3 from "../images/header-parts/32.png"
import headerImg4 from "../images/header-parts/42.png"

//components
import {BriefStory} from "../components/BriefStory";

const IndexPage = () => {
    gsap.registerPlugin(ScrollTrigger);
    let [lang, setLang] = useState(langEn);

    let parallaxHeader =(e)=>{
        document.getElementById("header-img1").style.transform = `translate(${e.clientX/100}%,${e.clientY/100}%)`
        document.getElementById("header-img3").style.transform = `translate(${e.clientX/90}%,${e.clientY/90}%)`
        let rect = document.getElementById("header-img4").getBoundingClientRect();
        console.log(rect.top, rect.right, rect.bottom, rect.left);
    }
    return (
    <main className={"d-flex align-items-center justify-content-center"}>
        {/*<button onClick={()=>{lang === langEn? setLang(langFa) : setLang(langEn)}}>lang</button>*/}
        <div className={"main-container"}>
            <BriefStory lang={lang}/>
            <div  className={"main"} >
                <div className="back-img"/>
                <div className="main-banner">
                    <img style={{ zIndex:12}} id={"header-img1"} src={headerImg1} alt="header"/>
                    <img style={{zIndex:13}} id={"header-img3"} src={headerImg3} alt="header"/>
                    <img style={{zIndex:10}} id={"header-img4"} src={headerImg4} alt="header"/>
                    <h1 className={"banner-title"}>{lang.main.bannerTitle}</h1>
                    {/*<Button variant="outlined" color="primary">{lang.main.bannerBtn}</Button>*/}
                </div>
                <div className={"statistics"}>
                    <div><span className={"statNumbers"}><AnimatedNumber style={{color:"white"}} start={0} end={10} duration={4000}/>+  </span><span>{lang.main.yearsOfExperience}</span></div>
                    <div><span className={"statNumbers"}><AnimatedNumber style={{color:"white"}} start={0} end={60} duration={5000}/>   </span><span>{lang.main.completedProjects}</span></div>
                    <div><span className={"statNumbers"}><AnimatedNumber style={{color:"white"}} start={0} end={5} duration={3000}/>+ </span><span>{lang.main.happyCustomers}</span></div>
                </div>
                <h6 style={{margin:"30px 0 0 30px"}} className={"align-self-start p-2"} >{lang.main.myServices}</h6>
                <div style={{width: "90%", padding:"10px 0 30px 0"}} className={"d-flex justify-content-between"} >
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">{lang.main.card1.title}</h6>
                            <p className="card-text">{lang.main.card1.body}</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">{lang.main.card1.title}</h6>
                            <p className="card-text">{lang.main.card1.body}</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">{lang.main.card1.title}</h6>
                            <p className="card-text">{lang.main.card1.body}</p>
                        </div>
                    </div>
                </div>
                <div style={{width: "90%", padding:"10px 0 30px 0"}} className={"d-flex justify-content-between"} >
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">{lang.main.card1.title}</h6>
                            <p className="card-text">{lang.main.card1.body}</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">{lang.main.card1.title}</h6>
                            <p className="card-text">{lang.main.card1.body}</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">{lang.main.card1.title}</h6>
                            <p className="card-text">{lang.main.card1.body}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className={"sidebar"}></div>*/}
        </div>
    </main>
    )
}

export default IndexPage
