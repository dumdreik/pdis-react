import React from "react";
import {LinkLogoSVG} from "../../LinkLogoSVG";
import {LinkPhone} from "../../../shared/LinkPhone";
import {SelectLang} from "../../SelectLang";
import {Menu} from "../../../shared/Menu/ui/Menu.tsx";

export const HeaderTop = () => {
    return (
        <div className="header_top">
            <div className="header_logo">
                <LinkLogoSVG color={"white"}/>
            </div>
            <div className="header_menu">
                <Menu typeMenu={"header"}/>
            </div>
            <div className="header_right">
                <div className="header_phone">
                    <LinkPhone/>
                </div>
                <div className="header_lang">
                    <SelectLang/>
                </div>
            </div>
        </div>
    )
}