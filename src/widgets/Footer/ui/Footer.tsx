import {Images} from "../../../shared/Image";
import {Copy} from "../../../shared/Copy";
import {Politics} from "../../../shared/Politics";
import {Developers} from "../../../shared/Developers";
import {LinkPhone} from "../../../shared/LinkPhone";
import {LinkEmail} from "../../../shared/LinkEmail";
import {Address} from "../../../shared/Address";
import {Menu} from "../../../shared/Menu/ui/Menu.tsx";

export const Footer = () => {
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
                            <Menu typeMenu={"footer"}/>
                        </div>
                        <div className="footer_top_soc">
                            <Menu typeMenu={"soc"}/>
                        </div>
                        <div className="footer_top_contacts">
                            <div className="footer_top_contact">
                                <Address/>
                            </div>
                            <div className="footer_top_contact">
                                <LinkPhone/>
                            </div>
                            <div className="footer_top_contact">
                                <LinkEmail/>
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