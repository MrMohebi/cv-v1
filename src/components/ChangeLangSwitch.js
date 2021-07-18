import React, {useEffect, useState} from 'react';
import Switch from "react-switch";

const ChangeLangSwitch = () => {
    let [nextLang, setNextLang] = useState("fa")
    useEffect(()=>{
        console.log(window.location.href);
        let lang = window.location.pathname.split("/").filter(i=> i !== "")
        if(lang.hasOwnProperty(0) && lang[0].length === 2){
            console.log(lang[0]);
            if(lang[0]==="fa")
                setNextLang("")
        }
    },[])

    let handleChange = () =>{
        window.location.href = "/" + nextLang
        setNextLang(nextLang === "fa" ? "" : "fa")
    }
    return (
        <Switch
            checked={nextLang === "fa"}
            onChange={handleChange}
            handleDiameter={28}
            offColor="#2c2c38"
            onColor="#2c2c38"
            offHandleColor="#191923"
            onHandleColor="#191923"
            height={40}
            width={70}
            borderRadius={10}
            activeBoxShadow="0px 0px 1px 2px #fffc35"
            uncheckedIcon={
                <div style={{color:"rgba(255,255,255,0.39)"}} className={"d-flex justify-content-center align-items-center h-100"}>
                    EN
                </div>
            }
            checkedIcon={
                <div style={{color:"rgba(255,255,255,0.39)"}}  className={"d-flex justify-content-center align-items-center h-100"}>
                    FA
                </div>
            }
            uncheckedHandleIcon={
                <div style={{color:"#fff"}} className={"d-flex justify-content-center align-items-center h-100"}>
                    FA
                </div>
            }
            checkedHandleIcon={
                <div style={{color:"#fff"}} className={"d-flex justify-content-center align-items-center h-100"}>
                    EN
                </div>
            }
        />
    );
};

export default ChangeLangSwitch;