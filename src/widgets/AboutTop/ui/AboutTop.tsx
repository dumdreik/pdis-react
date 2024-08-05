import {Images} from "../../../shared/Image";
import {AboutAdvantage} from "../../../features/AboutAdvantages/ui/AboutAdvantage.tsx";

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
                <AboutAdvantage/>
            </div>
        </section>
    )
}