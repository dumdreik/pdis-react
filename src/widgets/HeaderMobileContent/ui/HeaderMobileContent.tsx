import {Link} from "react-router-dom";

export const HeaderMobileContent = () =>{
    return (
        <div className="header_mobile_content">
            <div className="header_mobile_content_wrap">
                <div className="header_mobile_content_top">
                    <ul>
                        <li><Link to="/projects/">Проекты</Link></li>
                        <li><Link to="/about/">О компании</Link></li>
                        <li><Link to="/about/#team">Команда</Link></li>
                        <li><Link to="/contacts/">Контакты</Link></li>
                    </ul>
                </div>
                <div className="header_mobile_content_bottom">
                    <div className="header_mobile_content_phone">
                        <a href="tel:+7 499 322 35 17">+7 499 322 35 17</a>
                    </div>
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
                </div>
            </div>
        </div>
    );
}