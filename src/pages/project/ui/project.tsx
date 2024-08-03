import './project.scss'

export const Project = () => {
    return (
        <>
            <section className="project dark_text single_page">
                <div className="section_wrap">
                    <h1 className="block_title">
                        Шервуд
                    </h1>
                    <div className="project_wrap">
                        <div className="project_pic">
                            <img src="/img/project.png" alt=""/>
                        </div>
                        <div className="project_info">
                            <div className="project_title">
                                о проекте
                            </div>
                            <div className="project_text">
                                <p>Уже 10 лет команда архитектурного бюро Point Design Studio проектирует для своих клиентов премиальные интерьеры для красивой и комфортной жизни.</p><br/>
                                <p>Каждый спроектированный нами метр площади – это эстетика, уют и функционал, повышающие качество повседневной жизни.</p><br/>
                                <p>Четкая структурированность работы, индивидуальный подход и высокий профессионализм каждого сотрудника помогают нам создавать качественный и современный продукт, который будет радовать наших клиентов долгие годы.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="project_slider">
                <div className="project_slider_wrap">
                    <div className="slider_navigation section_wrap">
                        <div className="slider_navigation_wrap">
                            <div className="slider_navigation_arrow arrow_left"></div>
                            <div className="slider_navigation_arrow arrow_right"></div>
                        </div>
                    </div>
                    <div className="project_slider_items">
                        <div className="project_slider_item"><a href="/img/slide.png" data-fancybox="gallery"><img src="/img/slide.png" alt=""/></a></div>
                        <div className="project_slider_item"><a href="/img/slide.png" data-fancybox="gallery"><img src="/img/slide.png" alt=""/></a></div>
                        <div className="project_slider_item"><a href="/img/slide.png" data-fancybox="gallery"><img src="/img/slide.png" alt=""/></a></div>
                        <div className="project_slider_item"><a href="/img/slide.png" data-fancybox="gallery"><img src="/img/slide.png" alt=""/></a></div>
                        <div className="project_slider_item"><a href="/img/slide.png" data-fancybox="gallery"><img src="/img/slide.png" alt=""/></a></div>
                    </div>
                </div>
            </section>
            <section className="next_page">
                <div className="section_wrap">
                    <div className="next_page_wrap">
                        <div className="next_page_img">
                            <img src="/img/next.png" alt=""/>
                        </div>
                        <div className="next_page_info">
                            <div className="next_page_info_title">
                                Миллениум Парк
                            </div>
                            <div className="next_page_info_text">
                                Следующий проект
                            </div>
                            <div className="more white btn">
                                <div className="btn_text">
                                    Смотреть
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}