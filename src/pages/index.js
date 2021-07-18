import React, {useState} from "react";
import {langFa, langEn} from "../lang/langVal";


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

const IndexPage = () => {
    gsap.registerPlugin(ScrollTrigger);
    let [lang, setLang] = useState(langEn);

    return (
    <main className={"d-flex align-items-center justify-content-center"}>
        {/*<button onClick={()=>{lang === langEn? setLang(langFa) : setLang(langEn)}}>lang</button>*/}
        <div className={"main-container"}>
            <BriefStory lang={lang}/>
            <Main lang={lang}/>
            {/*<div className={"sidebar"}></div>*/}
        </div>
    </main>
    )
}

export default IndexPage
