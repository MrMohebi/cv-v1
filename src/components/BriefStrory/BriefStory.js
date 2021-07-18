import React, {useState, useEffect} from "react";
import {Badge, Tooltip} from "@material-ui/core";
import {StaticImage} from "gatsby-plugin-image";
import AnimatedProgressProvider from "../../providers/AnimatedProgressProvider";
import {easeQuadInOut} from "d3-ease";
import {CircularProgressbar} from "react-circular-progressbar";
import {BlurOn, GitHub, Telegram} from "@material-ui/icons";
import {AnimatedNumber} from "../../providers/AnimatedNumber";
import {AnimatedLinePBar} from "../../providers/AnimatedLinePBar";

// css
import "./style.css"
import 'react-circular-progressbar/dist/styles.css';

export const BriefStory = (props) =>{
    let lang = props.lang
    return(
        <div className={props.bSOpenClass + "brief-story "} >
            <div onClick={props.tapExitBSFunc} className={"bs-title"}>
                <Tooltip title={lang.briefStory.statusTooltip} placement={lang.lang === "en" ? "right-end" : "left-end"} arrow>
                    <Badge id="badgeStatic" anchorOrigin={{vertical: 'bottom', horizontal: 'right',}} overlap="circle" badgeContent=" " color="secondary">
                        <Badge id="badgeAnimate"  anchorOrigin={{vertical: 'bottom', horizontal: 'right',}} overlap="circle" badgeContent=" " color="secondary">
                            <StaticImage className={"mt-4"} src="../../images/brief-story.jpg" alt="its Me:)" imgStyle={{clipPath:"circle(45px at center)"}} width={90} height={90} quality={100}/>
                        </Badge>
                    </Badge>
                </Tooltip>
                <span className={"m-2 name"}>{lang.briefStory.name}</span>
                <span className={"skills"} >{lang.briefStory.skills}</span>
            </div>
            <div className={"bs-info"}>
                <div style={{margin: "0 0 190px 0"}}/>

                <div className={"key-val-container"}>
                    <span className={"key"}>{lang.briefStory.keyCountry}: </span><span className={"val"}>{lang.briefStory.country}</span>
                </div>
                <div className={"key-val-container"}>
                    <span className={"key"}>{lang.briefStory.keyCity}: </span><span className={"val"}>{lang.briefStory.city}</span>
                </div>
                <div className={"key-val-container"}>
                    <span className={"key"}>{lang.briefStory.keyAge}:</span><span className={"val"}>{lang.briefStory.age}</span>
                </div>
                <div className={"key-val-container"}>
                    <span className={"key"}>{lang.briefStory.phone}:</span><span className={"val"}>(+98)9221321311</span>
                </div>
                <div className={"key-val-container"}>
                    <span className={"key"}>{lang.briefStory.email}:</span><span className={"val"}>MMMohebi@outlook.com</span>
                </div>

                <hr style={{width:"70%", border: "1px solid rgb(126 126 129)", margin:"20px 0", borderRadius:"5px", zIndex:4 }} />

                <div style={{width:"inherit"}}>
                    <span className={"title"} >{lang.briefStory.languages}</span>
                    <div className={"d-flex justify-content-around"}>
                        <AnimatedProgressProvider valueStart={0} valueEnd={100} duration={3} easingFunction={easeQuadInOut}>
                            {value => {
                                const roundedValue = Math.round(value);
                                return (<CircularProgressbar styles={{root:{width:"50px", height:"50px", margin:"10px 20px"}, path: {stroke: `rgba(255, 193, 7, 1)`, transition: "none"}, trail: {stroke: '#181616'}, text:{fill:"#fff", fontSize:26}}} value={value} text={`${roundedValue}%`}/>);
                            }}
                        </AnimatedProgressProvider>
                        <AnimatedProgressProvider valueStart={0} valueEnd={80} duration={3} easingFunction={easeQuadInOut}>
                            {value => {
                                const roundedValue = Math.round(value);
                                return (<CircularProgressbar styles={{root:{width:"50px", height:"50px", margin:"10px 20px"}, path: {stroke: `rgba(255, 193, 7, 1)`, transition: "none"}, trail: {stroke: '#181616'}, text:{fill:"#fff", fontSize:26}}} value={value} text={`${roundedValue}%`}/>);
                            }}
                        </AnimatedProgressProvider>
                    </div>
                    <div className={"d-flex justify-content-around"}>
                        <span className={"key"} style={{margin:"0 20px"}} >{lang.briefStory.persian}</span>
                        <span className={"key"} style={{margin:"0 20px"}} >{lang.briefStory.english}</span>
                    </div>
                </div>

                <hr style={{width:"70%", border: "1px solid rgb(126 126 129)", margin:"20px 0", borderRadius:"5px", zIndex:4 }} />

                <div style={{width:"inherit"}}>
                    <span className={"title"} >{lang.briefStory.knowledge}</span>
                    <li className={"key mlr-list"}><BlurOn className={"knowledge-icon"}/>  Laravel, Symfony, Django</li>
                    <li className={"key mlr-list"}><BlurOn className={"knowledge-icon"}/>  Nginx, Apache</li>
                    <li className={"key mlr-list"}><BlurOn className={"knowledge-icon"}/>  Mysql, Mongodb</li>
                    <li className={"key mlr-list"}><BlurOn className={"knowledge-icon"}/>  React-js, Vue-js</li>
                    <li className={"key mlr-list"}><BlurOn className={"knowledge-icon"}/>  Redux</li>
                    <li className={"key mlr-list"}><BlurOn className={"knowledge-icon"}/>  Three-js, WebGL</li>
                    <li className={"key mlr-list"}><BlurOn className={"knowledge-icon"}/>  GSAP, Animate.css</li>
                    <li className={"key mlr-list"}><BlurOn className={"knowledge-icon"}/>  Bootstrap, Material-ui</li>
                    <li className={"key mlr-list"}><BlurOn className={"knowledge-icon"}/>  Sass, Less, Scss</li>
                    <li className={"key mlr-list"}><BlurOn className={"knowledge-icon"}/>  Git</li>
                    <li className={"key mlr-list"}><BlurOn className={"knowledge-icon"}/>  Docker</li>
                    <li className={"key mlr-list"}><BlurOn className={"knowledge-icon"}/>  Tkinter</li>
                    <li className={"key mlr-list"}><BlurOn className={"knowledge-icon"}/>  Telegram Bots</li>
                    <li className={"key mlr-list"}><BlurOn className={"knowledge-icon"}/>  Trading Bots</li>
                </div>

                <hr style={{width:"70%", border: "1px solid rgb(126 126 129)", margin:"20px 0", borderRadius:"5px", zIndex:4 }} />

                <div style={{width:"inherit"}}>
                    <span className={"title"} >{lang.briefStory.coding}</span>
                    <div className={"key-val-container"} style={{paddingBottom: "2px"}}>
                        <span className={"key"}>PHP</span>
                        <span className={"val"}><AnimatedNumber start={0} end={90} duration={2000} />%</span>
                    </div>
                    <div style={{margin:"5px 30px"}}>
                        <AnimatedLinePBar percent={90} width={"210px"} color={"#FFC107FF"} trailColor={'#181616FF'} />
                    </div>
                    <div className={"key-val-container"} style={{paddingBottom: "2px"}}>
                        <span className={"key"}>JS</span>
                        <span className={"val"}><AnimatedNumber start={0} end={80} duration={2000} />%</span>
                    </div>
                    <div style={{margin:"5px 30px"}}>
                        <AnimatedLinePBar percent={80} width={"210px"} color={"#FFC107FF"} trailColor={'#181616FF'} />
                    </div>
                    <div className={"key-val-container"} style={{paddingBottom: "2px"}}>
                        <span className={"key"}>Python</span>
                        <span className={"val"}><AnimatedNumber start={0} end={70} duration={2000} />%</span>
                    </div>
                    <div style={{margin:"5px 30px"}}>
                        <AnimatedLinePBar percent={70} width={"210px"} color={"#FFC107FF"} trailColor={'#181616FF'} />
                    </div>
                    <div className={"key-val-container"} style={{paddingBottom: "2px"}}>
                        <span className={"key"}>HTML</span>
                        <span className={"val"}><AnimatedNumber start={0} end={80} duration={2000} />%</span>
                    </div>
                    <div style={{margin:"5px 30px"}}>
                        <AnimatedLinePBar percent={80} width={"210px"} color={"#FFC107FF"} trailColor={'#181616FF'} />
                    </div>
                    <div className={"key-val-container"} style={{paddingBottom: "2px"}}>
                        <span className={"key"}>CSS</span>
                        <span className={"val"}><AnimatedNumber start={0} end={60} duration={2000} />%</span>
                    </div>
                    <div style={{margin:"5px 30px"}}>
                        <AnimatedLinePBar percent={60} width={"210px"} color={"#FFC107FF"} trailColor={'#181616FF'} />
                    </div>
                    <div className={"key-val-container"} style={{paddingBottom: "2px"}}>
                        <span className={"key"}>C#</span>
                        <span className={"val"}><AnimatedNumber start={0} end={50} duration={2000} />%</span>
                    </div>
                    <div style={{margin:"5px 30px"}}>
                        <AnimatedLinePBar percent={50} width={"210px"} color={"#FFC107FF"} trailColor={'#181616FF'} />
                    </div>
                    <div className={"key-val-container"} style={{paddingBottom: "2px"}}>
                        <span className={"key"}>MQL4</span>
                        <span className={"val"}><AnimatedNumber start={0} end={80} duration={2000} />%</span>
                    </div>
                    <div style={{margin:"5px 30px"}}>
                        <AnimatedLinePBar percent={80} width={"210px"} color={"#FFC107FF"} trailColor={'#181616FF'} />
                    </div>
                    <div className={"key-val-container"} style={{paddingBottom: "2px"}}>
                        <span className={"key"}>Pine Script</span>
                        <span className={"val"}><AnimatedNumber start={0} end={50} duration={2000} />%</span>
                    </div>
                    <div style={{margin:"5px 30px"}}>
                        <AnimatedLinePBar percent={50} width={"210px"} color={"#FFC107FF"} trailColor={'#181616FF'} />
                    </div>
                </div>




                <div style={{margin: "0 0 50px 0"}}/>
            </div>
            <div className={"bs-social-network"}>
                <a className={"m-2"} href="https://github.com/MrMohebi">
                    <GitHub style={{ color: "#8c8c8e" }} fontSize="small" />
                </a>
                <a className={"m-2"} href="">
                    <Telegram style={{ color: "#8c8c8e" }} fontSize="small"/>
                </a>
            </div>
        </div>
    );
}