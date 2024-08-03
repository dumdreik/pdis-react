import {Images} from "../../../shared/Image.ts";

export const ProjectSlider = () => {
    return (
        <section className="project_slider">
            <div className="project_slider_wrap">
                <div className="slider_navigation section_wrap">
                    <div className="slider_navigation_wrap">
                        <div className="slider_navigation_arrow arrow_left"></div>
                        <div className="slider_navigation_arrow arrow_right"></div>
                    </div>
                </div>
                <div className="project_slider_items">
                    <div className="project_slider_item"><a href={Images.ProjectSlide} data-fancybox="gallery"><img
                        src={Images.ProjectSlide} alt=""/></a></div>
                    <div className="project_slider_item"><a href={Images.ProjectSlide} data-fancybox="gallery"><img
                        src={Images.ProjectSlide} alt=""/></a></div>
                    <div className="project_slider_item"><a href={Images.ProjectSlide} data-fancybox="gallery"><img
                        src={Images.ProjectSlide} alt=""/></a></div>
                    <div className="project_slider_item"><a href={Images.ProjectSlide} data-fancybox="gallery"><img
                        src={Images.ProjectSlide} alt=""/></a></div>
                    <div className="project_slider_item"><a href={Images.ProjectSlide} data-fancybox="gallery"><img
                        src={Images.ProjectSlide} alt=""/></a></div>
                </div>
            </div>
        </section>
    )
}