import {Images} from "../../../shared/Image";
import {Copy} from "../../../shared/Copy";
import {Politics} from "../../../shared/Politics";
import {Developers} from "../../../shared/Developers";
import {LinkPhone} from "../../../shared/LinkPhone";
import {LinkEmail} from "../../../shared/LinkEmail";
import {Address} from "../../../shared/Address";
import {Menu} from "../../../shared/Menu/ui/Menu.tsx";

interface MenuItem {
    id:number,
    link:string,
    name:string,
}

export const Footer = () => {
    const Items:MenuItem[] = [
        {id: 1, link:"/projects/", name:"Проекты"},
        {id: 2, link:"/about/", name:"О компании"},
        {id: 3, link:"/contacts/", name:"Контакты"},
    ];
    const SocItems:MenuItem[] = [
        {id: 1, link:"#", name:"ВКонтакте"},
        {id: 2, link:"#", name:"Телеграм"},
        {id: 3, link:"#", name:"YouTube"},
    ]
    return (
        <div className="footer">
            <div className="section_wrap">
                <div className="footer_top">
                    <div className="footer_top_left">
                        <div className="footer_logo">
                            <img src={Images.LogoFooter} alt=""/>
                        </div>
                    </div>
                    <div className="footer_top_right">
                        <div className="footer_top_menu">
                            <Menu Items={Items}/>
                        </div>
                        <div className="footer_top_soc">
                            <Menu Items={SocItems}/>
                        </div>
                        <div className="footer_top_contacts">
                            <div className="footer_top_contact">
                                <Address/>
                            </div>
                            <div className="footer_top_contact">
                                <LinkPhone phone={"+7 499 322 35 17"}/>
                            </div>
                            <div className="footer_top_contact">
                                <LinkEmail mail={"info@point-design.ru"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="footer_bottom_block">
                        <Copy/>
                    </div>
                    <div className="footer_bottom_block">
                        <Politics/>
                    </div>
                    <div className="footer_bottom_block">
                        <Developers/>
                    </div>
                </div>
            </div>
        </div>
    )
}