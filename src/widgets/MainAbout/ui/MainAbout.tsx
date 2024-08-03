import {Images} from "../../../shared/Image";

export const MainAbout = () => {
    return (
        <section className="about_us dark_text">
            <div className="section_wrap">
                <div className="block_title">
                    о компании
                </div>
                <div className="about_us_content">
                    <div className="about_us_left">
                        <img src={Images.MainAbout} alt=""/>
                    </div>
                    <div className="about_us_right">
                        <div className="about_us_right_top">
                            <div className="about_us_right_title">
                                История компании — это не просто цифры, которые говорят, сколько лет мы на рынке, не
                                количество клиентов
                            </div>
                            <div className="about_us_right_text">
                                История компании — это цвета, текстуры найденных предметов, масштаба, настроения, тепла
                                и эксклюзивности, которую мы создали вместе с нашими клиентами.
                            </div>
                            <div className="more btn">
                                <div className="btn_text">
                                    Подробнее
                                </div>
                            </div>
                        </div>
                        <div className="about_us_right_bottom">
                            <div className="about_us_right_bottom_sect">
                                <span>10 лет</span><br/>
                                бюро Point
                                Design
                            </div>
                            <div className="about_us_right_bottom_sect">
                                <span>50 000 м2</span><br/>
                                общая площадь
                                объектов
                            </div>
                            <div className="about_us_right_bottom_sect">
                                <span>85 проектов</span><br/>
                                созданных для
                                клиентов
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}