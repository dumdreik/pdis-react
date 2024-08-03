import {Images} from "../../../shared/Image.ts";

export const NextPage = () => {
    return (
        <section className="next_page">
            <div className="section_wrap">
                <div className="next_page_wrap">
                    <div className="next_page_img">
                        <img src={Images.ProjectNext} alt=""/>
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
    )
}