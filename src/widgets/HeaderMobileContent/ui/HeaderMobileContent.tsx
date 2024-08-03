import {Link} from "react-router-dom";
import {Menu} from "../../../shared/Menu/ui/Menu.tsx";
import React from "react";
import {LinkPhone} from "../../../shared/LinkPhone";
import {SelectLangMobile} from "../../../features/SelectLangMobile";

interface MenuItem {
    id:number,
    link:string,
    name:string,
}

export const HeaderMobileContent = () =>{
    const Items:MenuItem[] = [
        {id: 1, link:"/projects/", name:"Проекты"},
        {id: 2, link:"/about/", name:"О компании"},
        {id: 3, link:"/about/#team", name:"Команда"},
        {id: 4, link:"/contacts/", name:"Контакты"},
    ]
    return (
        <div className="header_mobile_content">
            <div className="header_mobile_content_wrap">
                <div className="header_mobile_content_top">
                    <Menu Items={Items}/>
                </div>
                <div className="header_mobile_content_bottom">
                    <div className="header_mobile_content_phone">
                        <LinkPhone phone={"+7 499 322 35 17"}/>
                    </div>
                    <SelectLangMobile/>
                </div>
            </div>
        </div>
    );
}