import {Images} from "../../../shared/Image";
import {AboutAdvantage} from "../../../features/AboutAdvantages/ui/AboutAdvantage.tsx";

interface IAdvantage {
    id:number,
    title:string,
    text:string,
}

export const AboutTop = () => {
    const Items:IAdvantage[] = [
        {id: 1, title:"10 лет", text:"бюро Point Design"},
        {id: 2, title:"50 000 м2", text:"общая площадь объектов"},
        {id: 3, title:"85 проектов", text:"созданных для клиентов"},
    ]
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
                <AboutAdvantage Items={Items}/>
            </div>
        </section>
    )
}