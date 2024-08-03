import {Images} from "../../../shared/Image";

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
                            <ul>
                                <li><a href="#">О компании</a></li>
                                <li><a href="#">Проекты</a></li>
                                <li><a href="#">Контакты</a></li>
                            </ul>
                        </div>
                        <div className="footer_top_soc">
                            <ul>
                                <li><a href="#">ВКонтакте</a></li>
                                <li><a href="#">Телеграм</a></li>
                                <li><a href="#">YouTube</a></li>
                            </ul>
                        </div>
                        <div className="footer_top_contacts">
                            <div className="footer_top_contact">
                                Москва, Кутузовский проспект, 1/7
                            </div>
                            <div className="footer_top_contact">
                                <a href="tel:+7 499 322 35 17">+7 499 322 35 17</a>
                            </div>
                            <div className="footer_top_contact">
                                <a href="mailto:info@point-design.ru">info@point-design.ru</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="footer_bottom_block">©Pointdesign</div>
                    <div className="footer_bottom_block"><a href="#">Политика конфиденциальности</a></div>
                    <div className="footer_bottom_block"><a href="#">Разработано в deus</a></div>
                </div>
            </div>
        </div>
    )
}