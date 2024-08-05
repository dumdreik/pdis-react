import React from "react";
import {IProject} from "../model/db.tsx";

export const ProjectCart = (item:IProject) => {
    const projectsLink = "/projects";
    return (
        <a href={`${projectsLink}/${item.id}`} className="projects_item">
            <div className="projects_item_pic" style={{backgroundImage: "url(/src/data/img/"+item.previewImage+")"}}>
            </div>
            <div className="projects_item_name">
                {item.name}
            </div>
        </a>
    )
}