import React from 'react';


import headerImg1 from "../../images/header-parts/12.png";
import headerImg3 from "../../images/header-parts/32.png";
import headerImg4 from "../../images/header-parts/42.png";
import {AnimatedNumber} from "../../providers/AnimatedNumber";

import "./style.css"
import ChangeLangSwitch from "../ChangeLangSwitch";

const Main = (props) => {
    // let parallaxHeader =(e)=>{
    //     document.getElementById("header-img1").style.transform = `translate(${e.clientX/100}%,${e.clientY/100}%)`
    //     document.getElementById("header-img3").style.transform = `translate(${e.clientX/90}%,${e.clientY/90}%)`
    //     let rect = document.getElementById("header-img4").getBoundingClientRect();
    //     console.log(rect.top, rect.right, rect.bottom, rect.left);
    // }

    return (
        <div onClick={props.tapExitBSFunc} className={"main" + props.mainOpenBSClass} >
            <div className={"change-lang-container"} >
                <ChangeLangSwitch/>
            </div>
            <div className="back-img"/>
            <div className="main-banner">
                <img style={{ zIndex:12}} id={"header-img1"} src={headerImg1} alt="header"/>
                <img style={{zIndex:13}} id={"header-img3"} src={headerImg3} alt="header"/>
                <img style={{zIndex:10}} id={"header-img4"} src={headerImg4} alt="header"/>
                <h1 className={"banner-title"}>Hi it's Mohebi, <br/>a web developer :)</h1>
                {/*<Button variant="outlined" color="primary">explore now</Button>*/}
            </div>
            <div className={"statistics"}>
                <div><span className={"statNumbers"}><AnimatedNumber style={{color:"white"}} start={0} end={5} duration={1000}/>+  </span><span>{"\nYears Of Experience"}</span></div>
                <div><span className={"statNumbers"}><AnimatedNumber style={{color:"white"}} start={0} end={15} duration={3000}/>   </span><span>{"\nComplected Projects"}</span></div>
                <div><span className={"statNumbers"}><AnimatedNumber style={{color:"white"}} start={0} end={10} duration={3000}/>+ </span><span>{"\nHappy Customers"}</span></div>
            </div>
            <h6 style={{margin:"30px 30px 0 30px"}} className={"align-self-start p-2"} >My Services:</h6>
            <div style={{width: "90%", padding:"10px 0 30px 0"}} className={"d-flex flex-wrap justify-content-around align-content-around"} >
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-title">Web Development</h6>
                        <p className="card-text">Create web sites and web applications for your online shops, work or personal introducing and etc... <br/> Every thing you can imagine :)</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-title">Server Management</h6>
                        <p className="card-text">Setup and configuration of software, services or website running on the server. Specifically linux servers.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-title">Web 3d</h6>
                        <p className="card-text">Completely new experience! A world with 3d and interactive object. Bring your ideas in your websites, Introduce product by 3d models :)</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-title">Architecture Design</h6>
                        <p className="card-text">All phases of project development including architecture and design, user interface design, module and component construction. Also designing and administering databases</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-title">Social Media Bots</h6>
                        <p className="card-text">Connect your service to social medias, manage groups or notify customers. telegram bots or games and etc...</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-title">Cryptocurrency</h6>
                        <p className="card-text">Program smart contracts on blockchains, On the other hand better to say distributed systems or programs</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Main;