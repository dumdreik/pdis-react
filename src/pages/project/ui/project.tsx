import {Images} from "../../../shared/Image.ts";
import './project.scss'
import {ProjectTop} from "../../../widgets/ProjectTop";
import {ProjectSlider} from "../../../widgets/ProjectSlider";
import {NextPage} from "../../../widgets/NextPage";

export const Project = () => {
    return (
        <>
            <ProjectTop/>
            <ProjectSlider/>
            <NextPage/>
        </>
    )
}