import React from "react";
import {LinkLogoSVG} from "../../LinkLogoSVG";

export const HeaderMobile = () => {
    return (
        <div className="header_mobile">
            <div className="header_mobile_top">
                <div className="header_mobile_logo">
                    <LinkLogoSVG/>
                </div>
                <div className="header_mobile_burger"></div>
            </div>
        </div>
    )
}