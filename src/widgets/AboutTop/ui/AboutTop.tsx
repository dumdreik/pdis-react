import {Images} from "../../../shared/Image";

export const AboutTop = () => {
    return (
        <section className="about_detail dark_text single_page">
            <div className="section_wrap">
                <h1 className="block_title">
                    О компании
                </h1>
                <div className="about_detail_img">
                    <img src={Images.AboutBanner} alt=""/>
                </div>
                <div className="about_detail_text">
                    «Дизайн — это эволюция, и наша студия развивается, благодаря вам. Наше внимание к деталям и
                    понимание того, как живут люди, — ключ к успеху вашего дизайна»
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
        </section>
    )
}