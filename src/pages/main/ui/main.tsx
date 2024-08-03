import './main.scss'
import {MainAbout} from "../../../widgets/MainAbout";
import {MainQuote} from "../../../widgets/MainQuote";
import {MainProjects} from "../../../widgets/MainProjects";
import {MainGroup} from "../../../widgets/MainGroup";

export const Main = () => {
    return (
        <>
            <MainAbout/>
            <MainQuote/>
            <MainProjects/>
            <MainGroup/>
        </>
    )
}