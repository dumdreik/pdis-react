import {ProjectCart} from "../../../features/ProjectCart";
import {projectCarts} from "../../../features/ProjectCart/model/db.tsx";

export const ProjectsList = () => {
    const projects = projectCarts().slice(0, 10);
    return (
        <section className="projects dark_text single_page">
            <div className="section_wrap">
                <h1 className="block_title">
                    Проекты
                </h1>
                <div className="projects_items">
                    {projects.map((item,index) => {
                        return(
                            <ProjectCart key={`item_${index}`} id={item.id} previewImage={item.previewImage} name={item.name}/>
                        )
                    })}
                </div>
                <div className="pagination">
                    <div className="pagination_wrap">
                        <a href="" className="pagination_arrow arrow_left"></a>
                        <a href="" className="pagination_number active">1</a>
                        <a href="" className="pagination_number">2</a>
                        <a href="" className="pagination_number">3</a>
                        <a href="" className="pagination_dots">...</a>
                        <a href="" className="pagination_number">7</a>
                        <a href="" className="pagination_arrow arrow_right"></a>
                    </div>
                    <a href="" className="btn_more">
                        Показать еще
                    </a>
                </div>
            </div>
        </section>
    )
}