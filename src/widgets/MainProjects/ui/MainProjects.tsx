import {ProjectCart} from "../../../features/ProjectCart";
import {projectCarts} from "../../../features/ProjectCart/model/db.tsx";

export const MainProjects = () => {
    const projects = projectCarts().slice(0, 3);
    return (
        <section className="projects dark_text">
            <div className="section_wrap">
                <div className="block_title">
                    наши проекты
                </div>
                <div className="projects_items">
                    {projects.map((item,index) => {
                        return(
                            <ProjectCart key={`item_${index}`} id={item.id} previewImage={item.previewImage} name={item.name}/>
                        )
                    })}
                </div>
                <a href={`/projects/`} className="more btn">
                    <div className="btn_text">
                        Смотреть еще
                    </div>
                </a>
            </div>
        </section>
    )
}