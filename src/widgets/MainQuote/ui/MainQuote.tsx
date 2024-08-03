import {Images} from "../../../shared/Image";

export const MainQuote = () => {
    return (
        <section className="main_quote">
            <div className="section_wrap">
                <div className="main_quote_wrap">
                    <div className="main_quote_photo">
                        <img className="round" src={Images.PersonRound} alt=""/>
                    </div>
                    <div className="main_quote_text">«Дизайн — это эволюция, и наша студия развивается, благодаря вам.
                        Наше внимание к деталям и понимание того, как живут люди, — ключ к успеху вашего дизайна»
                    </div>
                    <div className="main_quote_name">Наталья Гринфелд</div>
                    <div className="main_quote_job_title">генеральный директор</div>
                </div>
            </div>
        </section>
    )
}