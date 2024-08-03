import {Images} from "../../../shared/Image.ts";
import React from "react";

export const MainHeaderBannerContent = () => {
    return (
        <div className="header_banner_content">
            <div className="header_banner_logo">
                <img src={Images.LogoBanner} alt=""/>
            </div>
            <div className="banner_text">
                Студия архитектуры и дизайна интерьера
            </div>
        </div>
    )
}