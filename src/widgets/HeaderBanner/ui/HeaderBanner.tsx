import React from "react";
import {MainHeaderBannerContent} from "../../../features/MainHeaderBannerContent";
import {HeaderMobile} from "../../../features/HeaderMobile";
import {HeaderTop} from "../../../features/HeaderTop";
export const HeaderBanner = () => {
    return(
        <>
            <div className="header banner">
                <div className="header_wrap">
                    <HeaderTop/>
                    <HeaderMobile/>
                    <MainHeaderBannerContent/>
                </div>
            </div>
        </>
    )
}