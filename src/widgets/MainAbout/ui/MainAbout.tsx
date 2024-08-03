import {Images} from "../../../shared/Image";
import {AboutAdvantage} from "../../../features/AboutAdvantages/ui/AboutAdvantage.tsx";

interface IAdvantage {
    id:number,
    title:string,
    text:string,
}

export const MainAbout = () => {
    const Items:IAdvantage[] = [
        {id: 1, title:"10 лет", text:"бюро Point Design"},
        {id: 2, title:"50 000 м2", text:"общая площадь объектов"},
        {id: 3, title:"85 проектов", text:"созданных для клиентов"},
    ]
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
                        <AboutAdvantage Items={Items}/>
                    </div>
                </div>
            </div>
        </section>
    )
}