import React from 'react';


import headerImg1 from "../../../images/header-parts/12.png";
import headerImg3 from "../../../images/header-parts/32.png";
import headerImg4 from "../../../images/header-parts/42.png";
import {AnimatedNumber} from "../../../providers/AnimatedNumber";

import "./style.css"
import ChangeLangSwitch from "../../ChangeLangSwitch";

const MainFA = (props) => {
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
                <h1 className={"banner-title"}>سلام محبی هستم،<br/>طراح و توسعه دهنده وب :)</h1>
                {/*<Button variant="outlined" color="primary">باهم ببینیم</Button>*/}
            </div>
            <div className={"statistics"}>
                <div><span className={"statNumbers"}><AnimatedNumber style={{color:"white"}} start={0} end={5} duration={1000}/>+  </span><span>{"\nسال تجربه\n"}</span></div>
                <div><span className={"statNumbers"}><AnimatedNumber style={{color:"white"}} start={0} end={15} duration={3000}/>   </span><span>{"\nپروژه های انجام شده\n"}</span></div>
                <div><span className={"statNumbers"}><AnimatedNumber style={{color:"white"}} start={0} end={10} duration={3000}/>+ </span><span>{"\nکارفرما های راضی\n"}</span></div>
            </div>
            <h6 style={{margin:"30px 30px 0 30px"}} className={"align-self-start p-2"} >خدمات قابل ارائه:</h6>
            <div style={{width: "90%", padding:"10px 0 30px 0"}} className={"d-flex flex-wrap justify-content-around align-content-around"} >
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-title">توسعه دهنده وب</h6>
                        <p className="card-text"> ساخت وب سایت و وب اپلیکیشن برای کسب و کار، فروشگاه و یا معرفی شخصی, <br/>هرآنچه که بتوانید تصورش را کنید  :) </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-title">مدیریت سرور</h6>
                        <p className="card-text">راه اندازی و پیکربندی سرویس ها، نرم افزار و وب سایت روی سرور، به طور ویژه سرور های لینکوسی.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-title">وب سایت های سه بعدی</h6>
                        <p className="card-text">یک تجربه جدید! دنیایی با مدل های تعاملی. می توانید کالاهای خود را به طور سه بعدی معرفی کنید. تصوارت و ایده های خود را به وبسایتتان بیاورید:)</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-title">طراحی معماری پروژه</h6>
                        <p className="card-text">تمامی فازهای توسعه پروژه شامل طراحی و معماری کلی، رابط های کاربری، ساختار مدل ها و کامپوننت ها. همچنین مدیریت و طراحی دیتابیس</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-title">ربات شبکه های اجتماعی</h6>
                        <p className="card-text">اتصال سرویس شما به شبکه های اجتماعی برای اطلاع رسانی مشتریان و یا مدیریت گروه ها. بات و گیم های تلگرامی و...</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-title">رمز ارز ها</h6>
                        <p className="card-text">برنامه نویسی اسمارت کانترکت بر بستر بلاکچین، به عبارتی بهتر برنامه ها و سیستم های غیر متمرکز</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MainFA;