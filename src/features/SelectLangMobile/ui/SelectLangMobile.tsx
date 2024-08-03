import React from "react";
import {LinkLogoSVG} from "../../LinkLogoSVG";

export const SelectLangMobile = () => {
    return (
        <div className="header_mobile_content_lang">
            <div className="header_mobile_content_lang_select">Ru</div>
            <div className="popup_lang">
                <a href="" className="lang_item select">
                    <div className="lang_item_text">Ru</div>
                </a>
                <a href="" className="lang_item">
                    <div className="lang_item_text">Eng</div>
                </a>
            </div>
        </div>
    )
}