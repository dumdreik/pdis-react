import {Images} from "../../../shared/Image.ts";

export const AboutTeam = () => {
    return (
        <section className="team dark_text" id="team">
            <div className="section_wrap">
                <div className="block_title">
                    Команда
                </div>
                <div className="team_gen">
                    <div className="team_gen_img">
                        <img src={Images.TeamImg} alt=""/>
                    </div>
                    <div className="team_gen_content">
                        <div className="team_gen_text">
                            <p>Уже 10 лет команда архитектурного бюро Point Design Studio проектирует для своих клиентов
                                премиальные интерьеры для красивой и комфортной жизни.</p><br/>
                            <p>Каждый спроектированный нами метр площади – это эстетика, уют и функционал, повышающие
                                качество повседневной жизни.</p><br/>
                            <p>Четкая структурированность работы, индивидуальный подход и высокий профессионализм
                                каждого сотрудника помогают нам создавать качественный и современный продукт, который
                                будет радовать наших клиентов долгие годы</p>
                        </div>
                        <div className="team_gen_bottom">
                            <div className="team_gen_name">Наталья Гринфелд</div>
                            <div className="team_gen_job_title">генеральный директор</div>
                        </div>
                    </div>
                </div>
                <div className="team_quote">
                    <div className="team_quote_text">«Наибольшей похвалы заслуживает тот архитектор, который умеет
                        соединить в постройке красоту с удобством для жизни»
                    </div>
                    <span>Джованни Лоренцо Бернини</span>
                </div>
                <div className="team_items">
                    <div className="team_item">
                        <img src={Images.Person1} alt=""/>
                        <div className="team_item_name">
                            Олеся Голова
                        </div>
                    </div>
                    <div className="team_item">
                        <img src={Images.Person2} alt=""/>
                        <div className="team_item_name">
                            Сергей Корн
                        </div>
                    </div>
                    <div className="team_item">
                        <img src={Images.Person3} alt=""/>
                        <div className="team_item_name">
                            Елизавета Куварзина
                        </div>
                    </div>
                    <div className="team_item">
                        <img src={Images.Person4} alt=""/>
                        <div className="team_item_name">
                            Дарья Новоселова
                        </div>
                    </div>
                    <div className="team_item">
                        <img src={Images.Person5} alt=""/>
                        <div className="team_item_name">
                            Элеонора Эскиндарова
                        </div>
                    </div>
                    <div className="team_item">
                        <img src={Images.Person6} alt=""/>
                        <div className="team_item_name">
                            Глеб Суслов
                        </div>
                    </div>
                    <div className="team_item">
                        <img src={Images.Person7} alt=""/>
                        <div className="team_item_name">
                            Александр Воробков
                        </div>
                    </div>
                    <div className="team_item">
                        <img src={Images.Person8} alt=""/>
                        <div className="team_item_name">
                            Анастасия Теплова
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}