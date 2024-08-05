import {Menu} from "../../../shared/Menu/ui/Menu.tsx";
import React from "react";
import {LinkPhone} from "../../../shared/LinkPhone";
import {SelectLangMobile} from "../../../features/SelectLangMobile";

export const HeaderMobileContent = () =>{
    return (
        <div className="header_mobile_content">
            <div className="header_mobile_content_wrap">
                <div className="header_mobile_content_top">
                    <Menu typeMenu={"header"}/>
                </div>
                <div className="header_mobile_content_bottom">
                    <div className="header_mobile_content_phone">
                        <LinkPhone/>
                    </div>
                    <SelectLangMobile/>
                </div>
            </div>
        </div>
    );
}