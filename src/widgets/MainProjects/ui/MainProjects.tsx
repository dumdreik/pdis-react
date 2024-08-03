import {Images} from "../../../shared/Image";

export const MainProjects = () => {
    return (
        <section className="projects dark_text">
            <div className="section_wrap">
                <div className="block_title">
                    наши проекты
                </div>
                <div className="projects_items">
                    <div className="projects_item">
                        <a href="">
                            <div className="projects_item_pic">
                                <img src={Images.Project1} alt=""/>
                            </div>
                            <div className="projects_item_name">
                                Шервуд
                            </div>
                        </a>
                    </div>
                    <div className="projects_item">
                        <a href="">
                            <div className="projects_item_pic">
                                <img src={Images.Project2} alt=""/>
                            </div>
                            <div className="projects_item_name">
                                миллениум-парк
                            </div>
                        </a>
                    </div>
                    <div className="projects_item">
                        <a href="">
                            <div className="projects_item_pic">
                                <img src={Images.Project3} alt=""/>
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
    )
}