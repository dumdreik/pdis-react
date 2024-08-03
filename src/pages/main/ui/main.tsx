import './main.scss'

export const Main = () => {
    return (
        <>
            <section className="about_us dark_text">
                <div className="section_wrap">
                    <div className="block_title">
                        о компании
                    </div>
                    <div className="about_us_content">
                        <div className="about_us_left">
                            <img src="./img/about.png" alt=""/>
                        </div>
                        <div className="about_us_right">
                            <div className="about_us_right_top">
                                <div className="about_us_right_title">
                                    История компании — это не просто цифры, которые говорят, сколько лет мы на рынке, не количество клиентов
                                </div>
                                <div className="about_us_right_text">
                                    История компании — это цвета, текстуры найденных предметов, масштаба, настроения, тепла и эксклюзивности, которую мы создали вместе с нашими клиентами.
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
            <section className="main_quote">
                <div className="section_wrap">
                    <div className="main_quote_wrap">
                        <div className="main_quote_photo">
                            <img className="round" src="./img/person_round.png" alt=""/>
                        </div>
                        <div className="main_quote_text">«Дизайн — это эволюция, и наша студия развивается, благодаря вам. Наше внимание к деталям и понимание того, как живут люди, — ключ к успеху вашего дизайна»</div>
                        <div className="main_quote_name">Наталья Гринфелд</div>
                        <div className="main_quote_job_title">генеральный директор</div>
                    </div>
                </div>
            </section>
            <section className="projects dark_text">
                <div className="section_wrap">
                    <div className="block_title">
                        наши проекты
                    </div>
                    <div className="projects_items">
                        <div className="projects_item">
                            <a href="">
                                <div className="projects_item_pic">
                                    <img src="./img/Image_1.png" alt=""/>
                                </div>
                                <div className="projects_item_name">
                                    Шервуд
                                </div>
                            </a>
                        </div>
                        <div className="projects_item">
                            <a href="">
                                <div className="projects_item_pic">
                                    <img src="./img/Image_2.png" alt=""/>
                                </div>
                                <div className="projects_item_name">
                                    миллениум-парк
                                </div>
                            </a>
                        </div>
                        <div className="projects_item">
                            <a href="">
                                <div className="projects_item_pic">
                                    <img src="./img/Image_3.png" alt=""/>
                                </div>
                                <div className="projects_item_name">
                                    Резиденция Монэ
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="more btn">
                        <div className="btn_text">
                            Смотреть еще
                        </div>
                    </div>
                </div>
            </section>
            <section className="group dark_text">
                <div className="section_wrap">
                    <div className="block_title">
                        Группа компаний
                    </div>
                    <div className="group_items">
                        <a className="group_item" href="">
                            <div className="group_item_pic">
                                <img src="./img/Image_4.png" alt=""/>
                            </div>
                            <div className="group_item_name">
                                Point Estate
                            </div>
                            <div className="group_item_desc">
                                Покупка и продажа элитной недвижимости
                            </div>
                        </a>
                        <a className="group_item" href="">
                            <div className="group_item_pic">
                                <img src="./img/Image_5.png" alt=""/>
                            </div>
                            <div className="group_item_name">
                                Point Woodcraft
                            </div>
                            <div className="group_item_desc">
                                Производство эксклюзивной мебели из дерева
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}