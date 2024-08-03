import React from "react";
import {LinkLogoSVG} from "../../LinkLogoSVG";
import {LinkPhone} from "../../../shared/LinkPhone";
import {SelectLang} from "../../SelectLang";
import {Menu} from "../../../shared/Menu/ui/Menu.tsx";

interface MenuItem {
    id:number,
    link:string,
    name:string,
}

export const HeaderTop = () => {
    const Items:MenuItem[] = [
        {id: 1, link:"/projects/", name:"Проекты"},
        {id: 2, link:"/about/", name:"О компании"},
        {id: 3, link:"/about/#team", name:"Команда"},
        {id: 4, link:"/contacts/", name:"Контакты"},
    ]
    return (
        <div className="header_top">
            <div className="header_logo">
                <LinkLogoSVG color={"white"}/>
            </div>
            <div className="header_menu">
                <Menu Items={Items}/>
            </div>
            <div className="header_right">
                <div className="header_phone">
                    <LinkPhone phone={"+7 499 322 35 17"}/>
                </div>
                <div className="header_lang">
                    <SelectLang/>
                </div>
            </div>
        </div>
    )
}