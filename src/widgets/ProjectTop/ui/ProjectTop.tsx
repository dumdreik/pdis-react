import {Images} from "../../../shared/Image.ts";

export const ProjectTop = () => {
    return (
        <section className="project dark_text single_page">
            <div className="section_wrap">
                <h1 className="block_title">
                    Шервуд
                </h1>
                <div className="project_wrap">
                    <div className="project_pic">
                        <img src={Images.Project} alt=""/>
                    </div>
                    <div className="project_info">
                        <div className="project_title">
                            о проекте
                        </div>
                        <div className="project_text">
                            <p>Уже 10 лет команда архитектурного бюро Point Design Studio проектирует для своих клиентов
                                премиальные интерьеры для красивой и комфортной жизни.</p><br/>
                            <p>Каждый спроектированный нами метр площади – это эстетика, уют и функционал, повышающие
                                качество повседневной жизни.</p><br/>
                            <p>Четкая структурированность работы, индивидуальный подход и высокий профессионализм
                                каждого сотрудника помогают нам создавать качественный и современный продукт, который
                                будет радовать наших клиентов долгие годы.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}