import React, { useEffect } from "react";

// 출처 : https://blog.soga.ng/story/39
const KakaoAdFit = ({adUnit, adWidth, adHeight}) => {
    useEffect(() => {
        let ins = document.createElement('ins');
        let scr = document.createElement('script');

        ins.className = 'kakao_ad_area';
        ins.style = "display:none; width:100%;";
        scr.async = 'true';
        scr.type = "text/javascript";
        scr.src = "//t1.daumcdn.net/kas/static/ba.min.js";
        ins.setAttribute('data-ad-unit', adUnit);
        ins.setAttribute('data-ad-width', adWidth);
        ins.setAttribute('data-ad-height', adHeight);

        document.querySelector('.adfit').appendChild(ins);
        document.querySelector('.adfit').appendChild(scr);
    },[])

  return <div className="adfit" />;
}
export default KakaoAdFit;